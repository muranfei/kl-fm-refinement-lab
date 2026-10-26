# Sources and content boundary

## Primary method sources

1. B. W. Kernighan and S. Lin, "An Efficient Heuristic Procedure for Partitioning Graphs," *Bell System Technical Journal*, 49(2), 1970. DOI: [10.1002/j.1538-7305.1970.tb01770.x](https://doi.org/10.1002/j.1538-7305.1970.tb01770.x).
2. C. M. Fiduccia and R. M. Mattheyses, "A Linear-Time Heuristic for Improving Network Partitions," *19th Design Automation Conference*, 1982. DOI: [10.1109/DAC.1982.1585498](https://doi.org/10.1109/DAC.1982.1585498).

These papers support the general algorithm concepts: pair gains and locked passes for KL, and gain buckets with local neighbor updates for FM.

## What the reference repository contributed

The linked `eda-learning` course was used to understand the subject area and expected breadth of KL/FM instruction. It was not used as a source of copied media, slide layouts, quiz wording, screenshots, audio, or completed website design.

## Original example

The instructional graph uses six cells:

```text
A-B 4, B-C 2, C-D 6, D-E 3, E-F 2, F-A 1, A-D 2, B-E 1
```

Initial partition:

```text
ABC | DEF
```

Calculated values:

- Crossing edges: `C-D=6`, `F-A=1`, `A-D=2`, `B-E=1`.
- Initial cut: `6 + 1 + 2 + 1 = 10`.
- Side sizes: `3 | 3`, size gap `0`.

Worked KL swap:

```text
D(C) = 6 - 2 = 4
D(F) = 1 - 2 = -1
g(C,F) = 4 + (-1) - 2(0) = 3

ABC | DEF -> ABF | CDE
cut 10 -> cut 7
```

Worked FM move:

```text
external(D) = 6 + 2 = 8
internal(D) = 3
g(D) = 8 - 3 = 5

ABC | DEF -> ABCD | EF
cut 10 -> cut 5
side gap 0 -> 2
```

The FM result is legal only when the chosen balance rule permits a side-size gap of 2.

## Media production

- Narration: synthesized from an original English script using the offline Piper speech engine.
- Visuals: project-specific HTML/SVG diagrams rendered to 1920×1080 scene images.
- Encoding: Windows Media Foundation Media Composition to MPEG-4 with H.264 video and AAC audio.
- Bilingual captions: derived from the final script and final scene durations.

No third-party stock images, music, or fonts are included.
