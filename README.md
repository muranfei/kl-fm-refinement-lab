# KL / FM Refinement Lab

An original bilingual teaching website about KL and FM graph-partition refinement. It combines a 3 minute 26 second English-narrated video, burned-in bilingual captions, a chaptered player, interactive graph practice, and a six-question knowledge check.

**Live website:** [https://muranfei.github.io/kl-fm-refinement-lab/](https://muranfei.github.io/kl-fm-refinement-lab/)

## Open the website

Open [index.html](./index.html) in a modern browser. The package works directly from disk, without a server, package installation, login, or external CDN.

For a local server:

```powershell
cd outputs/kl-fm-academy
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Main features

- English / Simplified Chinese interface switch.
- Playback speed buttons: `0.75×`, `1×`, `1.25×`, `1.5×`, `2×`.
- Twelve clickable chapters synchronized to the video.
- Keyboard controls on the video: `Space`, `←`, and `→`.
- Interactive six-cell graph with live cut, side sizes, size gap, and legal FM candidate.
- KL cumulative-gain exercise with best-prefix visualization.
- Six bilingual quiz questions with answer explanations.
- Responsive desktop and mobile layout.
- Reduced-motion support and visible keyboard focus.

## Media

- Video: `assets/video/kl-fm-master.mp4`
- Format: MP4 / H.264 / AAC / 1920×1080 / about 30 fps
- Duration: 03:26 (205.5 seconds)
- Size: approximately 64 MB, below GitHub's 100 MB single-file limit
- Poster: `assets/video/kl-fm-master-poster.png`
- Bilingual subtitles: `assets/subtitles/kl-fm-bilingual.vtt`
- English subtitles: `assets/subtitles/kl-fm-en.vtt`
- Transcript: `assets/subtitles/kl-fm-transcript.md`

## Editing

- Course text and quiz data: `content.js`
- Page structure: `index.html`
- Visual design: `styles.css`
- Player, graph lab, pass exercise, language switch, and quiz behavior: `app.js`

The website does not require a build step. After editing, refresh the page.

## Rebuilding the video

Build sources are in the workspace `work/video/` directory:

```powershell
node work/video/build_manifest.mjs
pwsh -File work/video/render_scenes.ps1
pwsh -File work/video/render_audio.ps1
powershell.exe -STA -File work/video/export_video.ps1
node work/video/build_subtitles.mjs
```

The video exporter uses Windows Media Foundation. Narration regeneration uses the local Piper runtime and voice model cached under `work/piper/`.

## Project records

- [PROJECT_SPEC.md](./PROJECT_SPEC.md)
- [SOURCES.md](./SOURCES.md)
- [STATUS.md](./STATUS.md)

## Rights

The project-specific text, diagrams, video, and code were produced for this assignment. The upstream reference course inspired the topical scope only. Licensing for future public distribution has not been chosen.
