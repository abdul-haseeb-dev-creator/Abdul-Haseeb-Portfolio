# Third-party Claude skills

These skills were copied unmodified from their upstream repositories so Claude Code sessions on this portfolio can use them. Each skill folder keeps its upstream LICENSE file.

| Skill folder(s) | Source | Commit | License |
| --- | --- | --- | --- |
| `design-taste-frontend` | https://github.com/leonxlnx/taste-skill (`skills/taste-skill`) | `952435f` | MIT, (c) 2026 Leonxlnx |
| `animate`, `animate-expo`, `animation-performance`, `animation-vocabulary`, `apple-design`, `ask-emil`, `ask-sonner`, `break-ui`, `choreograph`, `emil-design-eng`, `find-animation-opportunities`, `gestures`, `improve-animations`, `learn-taste`, `mobile-native`, `pick-ui-library`, `prototype`, `remove-animations`, `review-animations`, `write-swift` | https://github.com/emilkowalski/skills (`skills/*`) | `64eb3de` | MIT, (c) 2026 Emil Kowalski |
| `impeccable` (+ `.claude/agents/impeccable-*.md`) | https://github.com/pbakaus/impeccable (`.claude/skills/impeccable`) | `2fc5e14` | Apache 2.0, see `impeccable/NOTICE.md` |

## Notes

- `impeccable` runs a launcher (`scripts/impeccable`) that downloads a prebuilt engine binary from the project's GitHub releases on first use. Upstream also ships always-on hooks in `.claude/settings.json` that run it after every edit; those hooks were intentionally **not** added here. The skill still works when invoked (`/impeccable ...`).
- `design-taste-frontend` declares a Stop hook in its own SKILL.md frontmatter that runs `node scripts/gate.mjs` while the skill is active. Its scripts need Node 22+ and a Chromium-based browser.
- To update, re-copy the folders from upstream and bump the commit column.
