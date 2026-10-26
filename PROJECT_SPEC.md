# Project specification

## Confirmed brief

- Topic: KL/FM refinement for graph partitioning in EDA.
- Final video: original production, no direct reuse of the reference repository's videos, slides, quizzes, screenshots, or wording.
- Audio: English narration.
- Captions: English plus Simplified Chinese.
- Website: complete Simplified Chinese/English interface switch.
- Video player: chapter navigation and playback speeds from 0.75× to 2×.
- Practice: meaningful interaction after the video, with explanations.
- Visual direction: light "chip-partition workbench" palette, precise diagrams, no dark cyber dashboard.

## Learning outcomes

1. Compute a KL pair gain with `D(a) + D(b) - 2w(a,b)`.
2. Explain why a KL pass records cumulative gain and rolls back to its best prefix.
3. Explain the local gain update used by FM after one cell moves.
4. Apply a feasibility rule before comparing two cut values.
5. Distinguish a local stopping condition from a global optimum.

## Scope boundary

This release focuses on bipartition refinement. It does not claim to cover multi-way partitioning, terminal propagation, spectral partitioning, or full physical-design implementation details.

The six-cell weighted graph is an instructional example created for this project. Its cut and balance values are calculated directly from the listed edges.

## Delivery status

- Website source and assets: complete.
- Original MP4: complete and locally playable.
- Bilingual subtitles and transcript: complete.
- Interactive graph lab and quiz: complete.
- Public deployment and course submission: not performed; they require a destination, account identity, and explicit publication approval.
