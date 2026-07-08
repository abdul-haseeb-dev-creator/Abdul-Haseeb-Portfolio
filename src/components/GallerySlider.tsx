import React, { useState, useRef, RefObject, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Globe, 
  Smartphone, 
  Info, 
  Upload, 
  LogOut, 
  Loader2, 
  Trash2, 
  Cloud, 
  HardDrive, 
  ShieldCheck 
} from 'lucide-react';
import { initAuth, googleSignIn, logout } from '../lib/firebaseAuth';
import { User } from 'firebase/auth';

const webImages = [
  
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/9d886cf1f655dc7f0a84ba83e13a77a0.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/22b4bf492c48f10eab7fbcab1a336401.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/f38aa54e0f5b5a3063021dc201188513.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/2cbac9a2a4a6ce2cae864e3eeff7f622.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/61d23d29c82a777a9ddf5f865d456fdc.jpg',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/77245eb1cad957e61dc7d2383b7d89db.jpg',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/c0ab4bcecb1e031b8fc99e2d56fe6cc3.jpg',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/9e516c041ee310fc2aeec413281fa8e6.jpg',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/40f8f0f492ce8ef5149b4fbe07f3bfe4.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/2da7eabb0377beaa139d955c9e4a456d.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/4e4847d001a2131579f984968828d344.jpg',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/25a2d1ca58d493b2fcb334eeaa18ac62.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/012fd4194884ebf02088c47fbd50da09.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/5ca84dc6cd450e27214052bac04da7dc.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/bb24bfb8caa9f28b872f0faf7267fcb6.jpg',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/350a3d2420185af38dfc8bab54a5ff88.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/0af390affa42ce1f7d8f5d54f6bf556b.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/70cf02bbf82f67f28ef5444299ba394d.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/eb798e6926898efec07c4725f432040e.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/26fe3644dcfce33380fff5abbcdb5125.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/374a34af1e497601f6da307b056ad0ff.png',
];

const appImages = [
  
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/449cbb583c05af1d2a33e0cd7d534f8d.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/772eb6972a388ad14dd20b9b5a487942.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/524b6614c795659692934d42e282c11d.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/757c6830d63a8fc5f51ce11ddc0ac553.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/a4ad3bfb26334cbcdec9eac0b1b3cc5c.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/1bca0c3e7a13429d584f5cef04744bc8.png',
  'https://www.digitalwebgo.com/portfolio/core/uploads/images/772eb6972a388ad14dd20b9b5a487942.png',
];

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  webContentLink?: string;
  createdTime?: string;
}

export default function GallerySlider() {
  // Google Authentication State
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Google Drive Files State
  const [driveImages, setDriveImages] = useState<DriveFile[]>([]);
  const [isLoadingDrive, setIsLoadingDrive] = useState(false);
  const [driveError, setDriveError] = useState<string | null>(null);

  // Upload States
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const [lightbox, setLightbox] = useState<{ isOpen: boolean; type: 'web' | 'app' | 'drive'; index: number }>({
    isOpen: false,
    type: 'web',
    index: 0,
  });

  const webScrollRef = useRef<HTMLDivElement>(null);
  const appScrollRef = useRef<HTMLDivElement>(null);
  const driveScrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Listen to Auth State
  useEffect(() => {
    const unsubscribe = initAuth(
      (firebaseUser, token) => {
        setUser(firebaseUser);
        setAccessToken(token);
        fetchDriveImages(token);
      },
      () => {
        setUser(null);
        setAccessToken(null);
        setDriveImages([]);
      }
    );
    return () => unsubscribe();
  }, []);

  // Fetch images from Google Drive
  const fetchDriveImages = async (token: string) => {
    setIsLoadingDrive(true);
    setDriveError(null);
    try {
      // Query Google Drive for images uploaded by this applet (within drive.file scope boundaries)
      const q = encodeURIComponent("mimeType contains 'image/' and trashed = false");
      const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name,mimeType,webContentLink,createdTime)&orderBy=createdTime+desc`;
      
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Google Drive API returned status ${res.status}`);
      }

      const data = await res.json();
      setDriveImages(data.files || []);
    } catch (err: any) {
      console.error('Error fetching Google Drive images:', err);
      setDriveError('Unable to load files from Google Drive. Please verify your connection.');
    } finally {
      setIsLoadingDrive(false);
    }
  };

  // Google Sign In
  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
        fetchDriveImages(result.accessToken);
      }
    } catch (err) {
      console.error('Auth Sign-In failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Sign Out
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setAccessToken(null);
      setDriveImages([]);
    } catch (err) {
      console.error('Sign-Out failed:', err);
    }
  };

  // File Upload handler
  const uploadToDrive = async (file: File) => {
    if (!accessToken) return;
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }

    setIsUploading(true);
    setUploadStatus('Uploading file...');
    try {
      // Step 1: Create multipart request body
      const metadata = {
        name: file.name,
        mimeType: file.type,
      };

      const formData = new FormData();
      formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      formData.append('file', file);

      const uploadUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
      const uploadRes = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error(`Upload failed with status ${uploadRes.status}`);
      }

      const fileData = await uploadRes.json();
      const fileId = fileData.id;

      setUploadStatus('Applying view permissions...');

      // Step 2: Share file with anyone as reader so it can render locally
      const permUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`;
      const permRes = await fetch(permUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'reader',
          type: 'anyone',
        }),
      });

      if (!permRes.ok) {
        console.warn('Failed to set public viewing permissions.');
      }

      setUploadStatus('Success!');
      setTimeout(() => {
        setIsUploading(false);
        setUploadStatus('');
      }, 1500);

      // Reload Drive files list
      fetchDriveImages(accessToken);
    } catch (err: any) {
      console.error('Upload failed:', err);
      alert(`Upload failed: ${err.message || 'Unknown error'}`);
      setIsUploading(false);
      setUploadStatus('');
    }
  };

  // File Select / Drag Drop listeners
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadToDrive(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadToDrive(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Delete file handler with confirmation modal
  const handleDeleteFile = async (fileId: string, fileName: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${fileName}" from your Google Drive? This action cannot be undone.`
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Google Drive API returned status ${res.status}`);
      }

      // Reload Drive files list
      fetchDriveImages(accessToken);
    } catch (err: any) {
      console.error('Delete failed:', err);
      alert(`Failed to delete file: ${err.message || 'Unknown error'}`);
    }
  };

  const scroll = (direction: 'left' | 'right', ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.75;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Map types for image references
  const currentImages = lightbox.type === 'web' 
    ? webImages 
    : lightbox.type === 'app' 
      ? appImages 
      : driveImages.map((img) => `https://lh3.googleusercontent.com/d/${img.id}`);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const list = currentImages;
    if (list.length === 0) return;
    let newIndex = lightbox.index;
    if (direction === 'prev') {
      newIndex = newIndex === 0 ? list.length - 1 : newIndex - 1;
    } else {
      newIndex = newIndex === list.length - 1 ? 0 : newIndex + 1;
    }
    setLightbox((prev) => ({ ...prev, index: newIndex }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox((prev) => ({ ...prev, isOpen: false }));
      }
    };
    if (lightbox.isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox.isOpen]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#030712]/50">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-violet-400 font-mono text-[10px] uppercase tracking-wider mb-4">
            <Info className="h-3.5 w-3.5" /> Visual Portfolio Showcase
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Scroll through high-fidelity interface mockups, live screenshots, and design layouts delivered across professional client web portals and native smartphone applications.
          </p>
        </div>

        {/* ==================== WEB PORTFOLIO GALLERY SLIDER ==================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shadow-sm">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Web Projects Showcase
                </h3>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Responsive dashboards, landing experiences, and e-commerce portals ({webImages.length} screens)
                </p>
              </div>
            </div>

            {/* Scrolling Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left', webScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll web items left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll('right', webScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-violet-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll web items right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Web Slider Track */}
          <div
            ref={webScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar select-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {webImages.map((src, idx) => (
              <div
                key={`web-${idx}`}
                className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[440px] aspect-[16/10] bg-gray-950 border border-gray-800/80 rounded-2xl overflow-hidden group relative shadow-lg hover:shadow-violet-950/10 hover:border-violet-500/30 transition-all duration-300 snap-start cursor-pointer"
                onClick={() => setLightbox({ isOpen: true, type: 'web', index: idx })}
              >
                <img
                  src={src}
                  alt={`Web Portfolio Screen ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Micro-hover badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest font-semibold bg-gray-900/90 border border-gray-800 px-2 py-1 rounded-lg">
                    Screen {idx + 1} of {webImages.length}
                  </span>
                  <div className="p-1.5 rounded-lg bg-violet-600 text-white shadow">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== MOBILE APP GALLERY SLIDER ==================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-sm">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Mobile App Interfaces
                </h3>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Native iOS & Android layouts, checkout screens, and flow pipelines ({appImages.length} screens)
                </p>
              </div>
            </div>

            {/* Scrolling Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left', appScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll app items left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll('right', appScrollRef)}
                className="p-2 sm:p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/30 active:scale-95 transition-all shadow-md"
                aria-label="Scroll app items right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* App Slider Track */}
          <div
            ref={appScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar select-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {appImages.map((src, idx) => (
              <div
                key={`app-${idx}`}
                className="flex-shrink-0 w-[180px] sm:w-[240px] aspect-[9/16] bg-gray-950 border border-gray-800/80 rounded-2xl overflow-hidden group relative shadow-lg hover:shadow-cyan-950/10 hover:border-cyan-500/30 transition-all duration-300 snap-start cursor-pointer"
                onClick={() => setLightbox({ isOpen: true, type: 'app', index: idx })}
              >
                <img
                  src={src}
                  alt={`Mobile Portfolio Screen ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Micro-hover badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                  <span className="font-mono text-[9px] text-gray-300 uppercase tracking-widest font-semibold bg-gray-900/90 border border-gray-800 px-1.5 py-0.5 rounded-md">
                    Screen {idx + 1}
                  </span>
                  <div className="p-1 rounded bg-cyan-600 text-white shadow">
                    <Maximize2 className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== GOOGLE DRIVE INTERACTIVE SANDBOX ==================== */}
        <div className="border border-gray-800/80 rounded-3xl bg-[#090d16]/40 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-gray-800/60">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-md">
                <Cloud className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                  Google Drive Sandbox
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light mt-0.5">
                  Securely authorize, upload design files, and render them live on this website with permissions.
                </p>
              </div>
            </div>

            {/* Authentication Control */}
            <div>
              {user ? (
                <div className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 px-4 py-2 rounded-2xl">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="h-7 w-7 rounded-full border border-gray-700" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="h-7 w-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center">
                      {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                    </div>
                  )}
                  <div className="text-left hidden sm:block">
                    <p className="text-xs font-bold text-white leading-tight">{user.displayName || 'Authorized User'}</p>
                    <p className="text-[10px] text-gray-400 font-mono leading-none">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all ml-1.5"
                    title="Disconnect Google Drive"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {isLoggingIn ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ShieldCheck className="h-4 w-4" />
                  )}
                  Connect Google Drive
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left side: Upload Area */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {user ? (
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center cursor-pointer transition-all ${
                    dragActive 
                      ? 'border-emerald-400 bg-emerald-950/20 shadow-lg scale-[1.01]' 
                      : 'border-gray-800 hover:border-emerald-500/50 bg-[#060912]/50 hover:bg-gray-900/20'
                  } group`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="h-10 w-10 text-emerald-400 animate-spin" />
                      <p className="text-sm font-medium text-emerald-400 animate-pulse">{uploadStatus}</p>
                    </div>
                  ) : (
                    <>
                      <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                        <Upload className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        Drag & Drop or Click to Upload
                      </p>
                      <p className="text-xs text-gray-400 font-light mt-1.5">
                        PNG, JPG, WEBP formats supported (Auto-shares securely)
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <div className="border border-gray-800/60 rounded-2xl bg-gray-900/20 p-8 text-center flex flex-col items-center justify-center">
                  <HardDrive className="h-12 w-12 text-gray-500 mb-4" />
                  <p className="text-sm font-bold text-gray-300">
                    Authorization Required
                  </p>
                  <p className="text-xs text-gray-400 font-light mt-1.5 max-w-[240px] mx-auto leading-relaxed">
                    Connect your Google account above to securely upload layout images directly to your Google Drive folder.
                  </p>
                </div>
              )}
            </div>

            {/* Right side: Live Uploaded Images Slider / Viewer */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[160px]">
              {!user ? (
                <div className="flex flex-col items-center justify-center text-center p-6 h-full border border-gray-800/40 rounded-2xl bg-gray-950/20">
                  <p className="text-xs text-gray-500 italic">
                    Once authorized, your active Google Drive uploads will appear here in real-time.
                  </p>
                </div>
              ) : isLoadingDrive ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 text-emerald-400 animate-spin" />
                  <p className="text-xs text-gray-400 mt-2 font-mono">Loading Drive repository...</p>
                </div>
              ) : driveError ? (
                <div className="text-center p-6 bg-red-950/10 border border-red-900/30 rounded-2xl text-red-400">
                  <p className="text-xs font-mono">{driveError}</p>
                </div>
              ) : driveImages.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center p-8 h-full border border-gray-800/40 rounded-2xl bg-gray-950/20">
                  <Cloud className="h-8 w-8 text-gray-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-400">No layout files discovered</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-[280px]">
                    Your designated app folder is currently empty. Start uploading images to watch them render live!
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-400 font-mono bg-emerald-950/20 border border-emerald-950/50 px-2.5 py-1 rounded-lg">
                      Files: {driveImages.length}
                    </span>
                    
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => scroll('left', driveScrollRef)}
                        className="p-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
                        aria-label="Scroll drive items left"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => scroll('right', driveScrollRef)}
                        className="p-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
                        aria-label="Scroll drive items right"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Drive images track */}
                  <div
                    ref={driveScrollRef}
                    className="flex gap-4 overflow-x-auto py-2 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {driveImages.map((img, idx) => (
                      <div
                        key={img.id}
                        className="flex-shrink-0 w-[140px] sm:w-[170px] aspect-[16/10] bg-gray-950 border border-gray-800 rounded-xl overflow-hidden group relative shadow-md hover:border-emerald-500/30 transition-all duration-300 snap-start cursor-pointer"
                        onClick={() => setLightbox({ isOpen: true, type: 'drive', index: idx })}
                      >
                        <img
                          src={`https://lh3.googleusercontent.com/d/${img.id}`}
                          alt={img.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                        />
                        
                        {/* Interactive triggers */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2.5">
                          {/* Top delete button */}
                          <div className="flex justify-end">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteFile(img.id, img.name);
                              }}
                              className="p-1.5 rounded-md bg-red-600/95 hover:bg-red-500 text-white shadow pointer-events-auto"
                              title="Delete file from Drive"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Bottom info banner */}
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-gray-300 font-medium truncate max-w-[90px]">
                              {img.name}
                            </span>
                            <div className="p-0.5 rounded bg-emerald-600 text-white">
                              <Maximize2 className="h-2.5 w-2.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* ==================== FULLSCREEN LIGHTBOX OVERLAY ==================== */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            {/* Top Bar Actions */}
            <div 
              className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-40 pointer-events-none"
            >
              <span className="font-mono text-xs text-gray-400 bg-gray-900/90 border border-gray-800 px-3.5 py-2 rounded-full flex items-center gap-1.5 pointer-events-auto shadow-xl">
                {lightbox.type === 'web' ? (
                  <Globe className="h-3.5 w-3.5 text-violet-400" />
                ) : lightbox.type === 'app' ? (
                  <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
                ) : (
                  <Cloud className="h-3.5 w-3.5 text-emerald-400" />
                )}
                {lightbox.type === 'web' 
                  ? 'Web Design' 
                  : lightbox.type === 'app' 
                    ? 'Mobile App Interface' 
                    : `Google Drive Design (${driveImages[lightbox.index]?.name || ''})`} • Screen {lightbox.index + 1} of {currentImages.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({ ...prev, isOpen: false }));
                }}
                className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-violet-500/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer pointer-events-auto shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Left Navigate Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-gray-900/90 border border-gray-800 hover:border-violet-500/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all hidden md:flex items-center justify-center cursor-pointer z-40 shadow-2xl hover:scale-110"
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Container Panel */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-950 cursor-default z-20 ${
                lightbox.type === 'app' ? 'aspect-[9/16] w-[340px] md:w-[380px]' : 'aspect-[16/10] w-[1000px]'
              }`}
            >
              <img
                src={currentImages[lightbox.index]}
                alt="Selected Portfolio Screen Enlarged"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Right Navigate Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-gray-900/90 border border-gray-800 hover:border-violet-500/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all hidden md:flex items-center justify-center cursor-pointer z-40 shadow-2xl hover:scale-110"
              aria-label="Next screen"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Bottom Indicator & Mobile Navigation Helper */}
            <div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40 pointer-events-none"
            >
              {/* Swipe/Tap Helper on Mobile */}
              <div className="flex md:hidden items-center gap-4 bg-gray-900/90 border border-gray-800 px-5 py-2.5 rounded-xl text-xs text-gray-400 pointer-events-auto shadow-xl">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }} 
                  className="font-bold text-white px-2 cursor-pointer hover:text-violet-400 active:scale-95"
                >
                  Prev
                </button>
                <span className="text-gray-700">|</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }} 
                  className="font-bold text-white px-2 cursor-pointer hover:text-violet-400 active:scale-95"
                >
                  Next
                </button>
              </div>

              {/* Dots tracker */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] py-1.5 px-3 rounded-full bg-gray-900/60 border border-gray-800/50 backdrop-blur pointer-events-auto shadow-md no-scrollbar">
                {currentImages.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox((prev) => ({ ...prev, index: idx }));
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      lightbox.index === idx ? 'w-5 bg-violet-500' : 'w-1.5 bg-gray-700 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
