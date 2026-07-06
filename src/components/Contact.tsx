import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setErrorMessage(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to transmit message.');
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Contact Me</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4" />
          <p className="text-sm text-gray-400 font-light mt-4 max-w-md mx-auto">
            Ready to build? Send a note to discuss senior roles, integrations, or project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-gray-400 leading-relaxed font-light mb-8">
              Reach out directly or fill the form. I typically respond to all emails within 12-24 business hours.
            </p>

            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-5 border border-gray-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/10 text-violet-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Direct Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base text-white font-medium hover:text-violet-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-5 border border-gray-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-600/10 border border-cyan-500/10 text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Direct Mobile</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm sm:text-base text-white font-medium hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-5 border border-gray-800 flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/10 text-indigo-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Location</h4>
                <p className="text-sm sm:text-base text-white font-medium">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Follow / Connections */}
            <div className="pt-6">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Core Handles:</h4>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-violet-500/30 text-gray-400 hover:text-white transition-all"
                >
                  <Linkedin className="h-4 w-4 text-violet-400" />
                  <span className="text-xs font-medium font-mono">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/30 text-gray-400 hover:text-white transition-all"
                >
                  <Github className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-medium font-mono">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-gray-800 relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-emerald-400 mb-6 animate-bounce" />
                    <h3 className="font-display font-bold text-xl text-white mb-2">Message Dispatched!</h3>
                    <p className="text-sm text-gray-400 font-light max-w-sm">
                      Thank you for reaching out, Abdul Haseeb has received your payload and will return a response shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 bg-rose-950/20 border border-rose-900/40 rounded-xl text-rose-300 text-xs flex items-start gap-2 animate-fadeIn font-mono leading-relaxed">
                        <span className="shrink-0 text-rose-400 font-bold">⚠️</span>
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div>
                        <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2" htmlFor="form-name">
                          Full Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          {...register('name')}
                          className="w-full rounded-xl p-3.5 text-sm text-white glass-input outline-none transition-all placeholder:text-gray-600"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="font-mono text-[10px] text-rose-500 mt-1.5">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2" htmlFor="form-email">
                          Email Address
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          {...register('email')}
                          className="w-full rounded-xl p-3.5 text-sm text-white glass-input outline-none transition-all placeholder:text-gray-600"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="font-mono text-[10px] text-rose-500 mt-1.5">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div>
                      <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2" htmlFor="form-subject">
                        Subject Title
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        {...register('subject')}
                        className="w-full rounded-xl p-3.5 text-sm text-white glass-input outline-none transition-all placeholder:text-gray-600"
                        placeholder="Project Partnership Proposal"
                      />
                      {errors.subject && (
                        <p className="font-mono text-[10px] text-rose-500 mt-1.5">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message input */}
                    <div>
                      <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2" htmlFor="form-message">
                        Detailed Message
                      </label>
                      <textarea
                        id="form-message"
                        rows={5}
                        {...register('message')}
                        className="w-full rounded-xl p-3.5 text-sm text-white glass-input outline-none transition-all placeholder:text-gray-600 resize-none"
                        placeholder="Describe your goals, requirements, timelines or direct questions..."
                      />
                      {errors.message && (
                        <p className="font-mono text-[10px] text-rose-500 mt-1.5">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 disabled:opacity-50 text-white font-display text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-violet-500/10 cursor-pointer hover:shadow-violet-500/25 transition-all"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Transmitting Payload...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
