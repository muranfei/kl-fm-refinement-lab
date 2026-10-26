(() => {
  "use strict";

  const I18N = {
    en: {
      title: "KL / FM Refinement Lab",
      skip: "Skip to content",
      brandTitle: "REFINEMENT LAB",
      brandSub: "Partitioning · EDA",
      navLesson: "Video",
      navConcepts: "Concepts",
      navLab: "Move lab",
      navPractice: "Practice",
      heroEyebrow: "Graph partitioning · Refinement",
      heroTitle: "Refinement Lab",
      heroLead:
        "Start with a legal cut. Use pair gains, balance rules, and the best-prefix history to choose a move you can defend.",
      watchLesson: "Watch the lesson",
      openLab: "Open the move lab",
      factVideo: "Video",
      factLanguage: "Narration",
      factEnglish: "English",
      factCaptions: "Captions",
      factBilingual: "EN + 中文",
      visualProblem: "THE PROBLEM",
      visualLegal: "Legal",
      cutLabel: "CUT",
      balanceLabel: "SIZES",
      visualCaption: "A legal partition can still hide an expensive wire.",
      lessonTitle: "One refinement decision, step by step",
      videoIndex: "01 / VIDEO",
      lessonLead:
        "English narration, bilingual captions, chapter navigation, and playback speed control.",
      videoUnsupported:
        "Your browser cannot play this MP4. Use the download link below.",
      videoCaption: "Original lesson · 1080p · English audio",
      lessonGoalsLabel: "After this lesson",
      lessonGoalsTitle: "You can explain the move, not just the number.",
      goal1: "Calculate a KL pair gain and identify the best prefix.",
      goal2: "Explain why FM updates only the neighbors of a moved cell.",
      goal3: "Apply a balance rule before comparing two cuts.",
      goal4: "Report a local result without calling it global.",
      downloadTranscript: "Download lesson transcript",
      speedLabel: "Playback speed",
      captionLabel: "Captions",
      captionNote:
        "The exported video includes burned-in bilingual captions. A WebVTT track is also available.",
      keyboardLabel: "Keyboard",
      keyboardPlay: "play / pause",
      keyboardSeek: "seek 5 s",
      chapterHeading: "Jump to a chapter",
      conceptsTitle: "Two move sets produce different evidence",
      conceptsIndex: "02 / CONCEPTS",
      conceptsLead:
        "KL coordinates a locked pair. FM chooses a sequence of legal single moves.",
      klType: "Kernighan–Lin",
      klTitle: "Score a pair, lock it, then look back.",
      klBody:
        "A paired swap preserves equal side sizes. The pass keeps locking pairs until every permitted move is used, then rolls back to the assignment with the best cumulative gain.",
      klMove: "Move",
      klMoveValue: "One vertex from each side",
      klScore: "Score",
      klUse: "Use when",
      klUseValue: "Coordinated swaps matter",
      fmType: "Fiduccia–Mattheyses",
      fmTitle: "Follow the best legal single move.",
      fmBody:
        "FM uses gain buckets to choose one cell at a time. Moving a cell changes the gains only of its neighbors, which supports fast localized updates on large instances.",
      fmMove: "Move",
      fmMoveValue: "One unlocked cell",
      fmScore: "Score",
      fmScoreFormula: "external(v) − internal(v)",
      fmUse: "Use when",
      fmUseValue: "Scalable local refinement matters",
      compareMove: "compare the move",
      sharedRuleLabel: "Shared limit",
      sharedRule:
        "A lower cut does not prove a better partition when the result violates balance, locks, connectivity, or another feasibility rule.",
      labTitle: "Inspect a cell move under a balance rule",
      labIndex: "03 / MOVE LAB",
      labLead:
        "Click a cell to move it. The cut, size gap, and legal FM candidates recalculate from the graph.",
      groupA: "Group A",
      groupB: "Group B",
      graphHint:
        "Click a node or press Enter on a focused node to move it across the cut.",
      liveState: "Live state",
      reset: "Reset",
      maxGapLabel: "Maximum side size gap",
      metricCut: "Cut",
      metricSizes: "Sizes",
      metricGap: "Gap",
      feasible: "Feasible",
      bestMoveLabel: "Best legal FM candidate",
      applyBest: "Apply best move",
      practiceTitle: "Read the pass, then test the decision",
      practiceIndex: "04 / PRACTICE",
      practiceLead:
        "The labs ask for an explanation of the state change, not a lucky final number.",
      passLabLabel: "KL pass trace",
      passLabTitle: "When does the pass reach its best state?",
      passLabLead:
        "Advance one swap at a time. Compare the current cumulative gain with the best prefix seen so far.",
      advancePass: "Advance pass",
      restartTrace: "Restart",
      currentGain: "Current cumulative gain",
      bestPrefix: "Best prefix",
      quizLabel: "Knowledge check",
      quizTitle: "Six decisions that matter",
      checkAnswers: "Check answers",
      tryAgain: "Try again",
      resourceTitle: "Take the explanation with you",
      resourcesIndex: "05 / RESOURCES",
      resourceLead:
        "Each file belongs to this project. The local website uses no external fonts, media libraries, or tracking scripts.",
      downloadVideo: "Lesson video",
      downloadVideoMeta: "MP4 · 1080p · 03:26 · 64 MB",
      downloadScript: "Bilingual transcript",
      downloadTranscriptMeta: "Markdown · 12 scenes",
      downloadBilingualSubs: "Bilingual subtitles",
      downloadBilingualMeta: "WebVTT · English + 中文",
      downloadEnglishSubs: "English subtitles",
      downloadEnglishMeta: "WebVTT · English",
      sourceLabel: "Content boundary",
      sourceNote:
        "This page and video were created for this project. The linked upstream course inspired the topic scope; its media, slides, quizzes, and wording are not reused.",
      sourcesLabel: "Primary method sources",
      footerLine: "Graph partitioning, explained and tested.",
      backToTop: "Back to top ↑",
      primaryNav: "Primary navigation",
      interfaceLanguage: "Interface language",
      speedGroup: "Playback speed",
      graphTitle: "Interactive weighted six-node graph",
      passTitle: "KL cumulative gain chart",
      passComplete: "Pass complete",
      passChartStart: "START",
      passChartSwap: "SWAP {number}",
      passChartBest: "BEST",
      statusAt: "Video progress",
      moveLabel: "Move {node} from {from} to {to}.",
      bestCandidate:
        "Move {node} from {from} to {to}. The cut would fall from {before} to {after}.",
      noCandidate:
        "No legal single move currently improves the cut under this balance rule.",
      feasibleText:
        "The size gap is {gap}, within the maximum of {limit}.",
      illegalCurrent:
        "The current size gap is {gap}, outside the maximum of {limit}.",
      sideA: "Group A",
      sideB: "Group B",
      passStart: "The running total is 0. Advance to begin the KL pass.",
      passStep:
        "Swap {step}: {sign}{gain}. The running total is {current}. The best prefix remains {best}.",
      passNoAnswers: "Choose one answer for every question before checking.",
      passQuizSummary: "You answered {score} of {total} correctly.",
      correct: "Correct",
      incorrect: "Review",
    },
    zh: {
      title: "KL / FM 分区优化实验室",
      skip: "跳到主要内容",
      brandTitle: "分区优化实验室",
      brandSub: "分区优化 · EDA",
      navLesson: "视频",
      navConcepts: "概念",
      navLab: "移动实验",
      navPractice: "练习",
      heroEyebrow: "图分区 · 局部优化",
      heroTitle: "分区优化实验室",
      heroLead:
        "从一个合法分区出发，用配对收益、平衡约束和最佳前缀历史，做出解释得清的优化决策。",
      watchLesson: "观看教学视频",
      openLab: "进入移动实验",
      factVideo: "视频",
      factLanguage: "讲解语言",
      factEnglish: "英语",
      factCaptions: "字幕",
      factBilingual: "中英双语",
      visualProblem: "问题状态",
      visualLegal: "可行",
      cutLabel: "割边代价",
      balanceLabel: "两侧尺寸",
      visualCaption: "合法分区仍可能藏着一条昂贵的跨区连线。",
      lessonTitle: "逐步看懂一次优化决策",
      videoIndex: "01 / 视频",
      lessonLead:
        "英语讲解、中英双语字幕、章节跳转和播放速度控制。",
      videoUnsupported: "当前浏览器无法播放此 MP4，请使用下方下载链接。",
      videoCaption: "原创课程 · 1080p · 英语解说",
      lessonGoalsLabel: "完成本节后",
      lessonGoalsTitle: "你能解释为什么移动，而不只是报出一个数字。",
      goal1: "计算 KL 配对收益并识别最佳前缀。",
      goal2: "解释 FM 为什么只更新被移动单元的邻居。",
      goal3: "比较两种割边代价前，先应用平衡约束。",
      goal4: "报告局部优化结果，而不把它误称为全局最优。",
      downloadTranscript: "下载课程文字稿",
      speedLabel: "视频播放速度",
      captionLabel: "字幕",
      captionNote:
        "视频内已烧录中英双语字幕，同时提供可加载的 WebVTT 字幕文件。",
      keyboardLabel: "键盘操作",
      keyboardPlay: "播放 / 暂停",
      keyboardSeek: "前进或后退 5 秒",
      chapterHeading: "跳转到章节",
      conceptsTitle: "两种移动方式提供不同的证据",
      conceptsIndex: "02 / 概念",
      conceptsLead:
        "KL 协调处理一对锁定单元；FM 则选择一串合法的单点移动。",
      klType: "Kernighan–Lin 算法",
      klTitle: "计算配对收益，锁定后回溯。",
      klBody:
        "KL 的一对交换可保持两侧尺寸不变。算法在一轮中持续锁定配对，最后回滚到累计收益最高的分区状态。",
      klMove: "移动",
      klMoveValue: "两侧各选一个顶点",
      klScore: "收益",
      klUse: "适用",
      klUseValue: "配对交换能跨越障碍时",
      fmType: "Fiduccia–Mattheyses 算法",
      fmTitle: "选择收益最高的合法单点移动。",
      fmBody:
        "FM 使用收益桶，每次移动一个单元。一次移动只改变其邻居的收益，因此适合在大规模实例上做局部快速更新。",
      fmMove: "移动",
      fmMoveValue: "一个未锁定单元",
      fmScore: "收益",
      fmScoreFormula: "外部边权(v) − 内部边权(v)",
      fmUse: "适用",
      fmUseValue: "需要可扩展的局部优化时",
      compareMove: "比较移动方式",
      sharedRuleLabel: "共同限制",
      sharedRule:
        "若结果违反平衡、锁定、连通性或其他可行性约束，更低的割边代价也不能证明分区更好。",
      labTitle: "在平衡规则下检查一次单元移动",
      labIndex: "03 / 移动实验",
      labLead:
        "点击单元即可移动，割边代价、尺寸差和合法 FM 候选都会根据图结构重新计算。",
      groupA: "A 组",
      groupB: "B 组",
      graphHint: "点击节点，或聚焦节点后按 Enter，即可把它移动到另一侧。",
      liveState: "实时状态",
      reset: "重置",
      maxGapLabel: "两侧尺寸差上限",
      metricCut: "割边代价",
      metricSizes: "尺寸",
      metricGap: "尺寸差",
      feasible: "可行",
      bestMoveLabel: "最佳合法 FM 候选",
      applyBest: "应用最佳移动",
      practiceTitle: "先读懂一轮路径，再检验判断",
      practiceIndex: "04 / 练习",
      practiceLead:
        "练习要求解释状态变化，而不是靠碰运气得到一个最终数字。",
      passLabLabel: "KL 单轮轨迹",
      passLabTitle: "这一轮什么时候到达最佳状态？",
      passLabLead:
        "每次推进一次交换，比较当前累计收益与已经出现过的最佳前缀。",
      advancePass: "推进一轮交换",
      restartTrace: "重新开始",
      currentGain: "当前累计收益",
      bestPrefix: "最佳前缀",
      quizLabel: "知识检查",
      quizTitle: "六个关键判断",
      checkAnswers: "检查答案",
      tryAgain: "再试一次",
      resourceTitle: "把完整讲解带走",
      resourcesIndex: "05 / 资源",
      resourceLead:
        "所有文件均属于本项目。本地网站不依赖外部字体、媒体库或跟踪脚本。",
      downloadVideo: "教学视频",
      downloadVideoMeta: "MP4 · 1080p · 03:26 · 64 MB",
      downloadScript: "中英双语文字稿",
      downloadTranscriptMeta: "Markdown · 12 个场景",
      downloadBilingualSubs: "中英双语字幕",
      downloadBilingualMeta: "WebVTT · 英语 + 中文",
      downloadEnglishSubs: "英文字幕",
      downloadEnglishMeta: "WebVTT · 英语",
      sourceLabel: "内容边界",
      sourceNote:
        "本页面与视频均为本项目原创制作。上游课程仅用于了解选题范围；本项目没有复用其视频、课件、题目或文案。",
      sourcesLabel: "算法原始来源",
      footerLine: "用可视化解释分区，用练习检验判断。",
      backToTop: "返回顶部 ↑",
      primaryNav: "主导航",
      interfaceLanguage: "界面语言",
      speedGroup: "播放速度",
      graphTitle: "可交互的六节点加权图",
      passTitle: "KL 累计收益图",
      passComplete: "本轮结束",
      passChartStart: "起点",
      passChartSwap: "交换 {number}",
      passChartBest: "最佳",
      statusAt: "视频进度",
      moveLabel: "将 {node} 从{from}移动到{to}。",
      bestCandidate:
        "将 {node} 从{from}移动到{to}，割边代价会从 {before} 降到 {after}。",
      noCandidate: "在当前的平衡规则下，没有合法单点移动能进一步降低割边代价。",
      feasibleText: "当前尺寸差为 {gap}，不超过上限 {limit}。",
      illegalCurrent: "当前尺寸差为 {gap}，超过上限 {limit}。",
      sideA: "A 组",
      sideB: "B 组",
      passStart: "当前累计收益为 0。推进一次交换开始这一轮 KL。",
      passStep:
        "第 {step} 次交换的收益为 {sign}{gain}，累计收益变为 {current}。最佳前缀仍为 {best}。",
      passNoAnswers: "请先为每一道题选择一个答案。",
      passQuizSummary: "你答对了 {score} / {total} 题。",
      correct: "正确",
      incorrect: "需复习",
    },
  };

  const safeStorage = {
    get(key, fallback) {
      try {
        return localStorage.getItem(key) ?? fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {}
    },
  };

  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  let language =
    requestedLanguage === "zh" || requestedLanguage === "en"
      ? requestedLanguage
      : safeStorage.get("klfm-language", "en") === "zh"
        ? "zh"
        : "en";
  let labSides = { ...COURSE.graph.initial };
  let labGapLimit = 2;
  let passStep = 0;
  let quizSelections = Array(COURSE.quizzes.length).fill(null);
  let quizChecked = false;

  const video = document.getElementById("lesson-video");
  const status = document.getElementById("video-status");
  const chapterList = document.getElementById("chapter-list");
  const graphSvg = document.getElementById("lab-graph");
  const quizList = document.getElementById("quiz-list");

  const t = (key) => I18N[language][key];
  const fill = (template, values) =>
    template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);

  function formatTime(seconds, precise = false) {
    if (!Number.isFinite(seconds)) return "00:00";
    const total = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(total / 60);
    const remaining = total % 60;
    const basic = `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
    if (!precise) return basic;
    return `${basic}.${String(Math.floor((seconds % 1) * 10))}`;
  }

  function setLanguage(nextLanguage, persist = true) {
    language = nextLanguage === "zh" ? "zh" : "en";
    document.documentElement.lang = language === "zh" ? "zh" : "en";
    document.title = t("title");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (I18N[language][key] !== undefined) {
        node.textContent = I18N[language][key];
      }
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    document.querySelector(".main-nav")?.setAttribute("aria-label", t("primaryNav"));
    document
      .querySelector(".language-switch")
      ?.setAttribute("aria-label", t("interfaceLanguage"));
    document
      .querySelector(".speed-control")
      ?.setAttribute("aria-label", t("speedGroup"));
    graphSvg.setAttribute("aria-label", t("graphTitle"));

    renderChapters();
    renderGraph();
    renderPass();
    renderQuiz();
    updatePlaybackLabel();
    if (persist) safeStorage.set("klfm-language", language);
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        setLanguage(button.dataset.lang);
      } catch {
        window.location.assign(button.getAttribute("href") || `?lang=${button.dataset.lang}`);
      }
    });
  });

  function renderChapters() {
    chapterList.innerHTML = "";
    COURSE.chapters.forEach((chapter, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-button";
      button.dataset.time = String(chapter.time);
      button.innerHTML = `
        <span class="chapter-time">${formatTime(chapter.time)}</span>
        <span class="chapter-title">${language === "zh" ? chapter.zh : chapter.en}</span>
      `;
      button.addEventListener("click", () => {
        if (video) {
          video.currentTime = chapter.time + 0.01;
          video.play().catch(() => {});
        }
      });
      button.setAttribute(
        "aria-label",
        `${formatTime(chapter.time)} ${language === "zh" ? chapter.zh : chapter.en}`,
      );
      button.dataset.chapter = String(index);
      chapterList.appendChild(button);
    });
    updateActiveChapter();
  }

  function updateActiveChapter() {
    if (!video) return;
    const current = video.currentTime;
    let active = 0;
    COURSE.chapters.forEach((chapter, index) => {
      if (current + 0.15 >= chapter.time) active = index;
    });
    chapterList.querySelectorAll(".chapter-button").forEach((button, index) => {
      const isActive = index === active;
      button.classList.toggle("is-active", isActive);
      if (isActive) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }

  const updateVideoStatus = () => {
    if (!video) return;
    status.textContent = `${formatTime(video.currentTime)} / ${formatTime(
      video.duration || COURSE.meta.durationSeconds,
    )}`;
    status.closest(".chapter-head")?.setAttribute("aria-label", t("statusAt"));
    updateActiveChapter();
  };

  video?.addEventListener("loadedmetadata", updateVideoStatus);
  video?.addEventListener("timeupdate", updateVideoStatus);
  updateVideoStatus();

  video?.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      if (video.paused) video.play().catch(() => {});
      else video.pause();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 5);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      video.currentTime = Math.min(video.duration || Infinity, video.currentTime + 5);
    }
  });

  const speedButtons = [...document.querySelectorAll("[data-speed]")];
  let playbackRate = Number(safeStorage.get("klfm-speed", "1"));
  if (![0.75, 1, 1.25, 1.5, 2].includes(playbackRate)) playbackRate = 1;

  function updatePlaybackLabel() {
    speedButtons.forEach((button) => {
      const active = Number(button.dataset.speed) === playbackRate;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute(
        "aria-label",
        `${button.textContent.trim()} ${t("speedLabel")}`,
      );
    });
    if (video) video.playbackRate = playbackRate;
  }

  speedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playbackRate = Number(button.dataset.speed);
      safeStorage.set("klfm-speed", String(playbackRate));
      updatePlaybackLabel();
    });
  });
  video?.addEventListener("loadedmetadata", () => {
    video.playbackRate = playbackRate;
  });

  function sideLabel(side) {
    return side === 1 ? t("sideA") : t("sideB");
  }

  function calculateStats(sides) {
    let cut = 0;
    const crossingEdges = [];
    for (const [from, to, weight] of COURSE.graph.edges) {
      if (sides[from] !== sides[to]) {
        cut += weight;
        crossingEdges.push([from, to, weight]);
      }
    }
    const sizeA = Object.values(sides).filter((side) => side === 1).length;
    const sizeB = Object.values(sides).filter((side) => side === 2).length;
    return {
      cut,
      sizeA,
      sizeB,
      gap: Math.abs(sizeA - sizeB),
      crossingEdges,
    };
  }

  function bestMove(sides, limit) {
    const current = calculateStats(sides).cut;
    const candidates = [];
    for (const node of COURSE.graph.nodes) {
      const next = { ...sides, [node]: sides[node] === 1 ? 2 : 1 };
      const stats = calculateStats(next);
      if (stats.sizeA === 0 || stats.sizeB === 0 || stats.gap > limit) continue;
      candidates.push({
        node,
        from: sides[node],
        to: next[node],
        newCut: stats.cut,
        gain: current - stats.cut,
        sizes: `${stats.sizeA} | ${stats.sizeB}`,
      });
    }
    candidates.sort((a, b) => b.gain - a.gain || a.node.localeCompare(b.node));
    return candidates[0] || null;
  }

  function renderGraph() {
    const stats = calculateStats(labSides);
    const candidate = bestMove(labSides, labGapLimit);
    const nodes = COURSE.graph.nodes;
    const positions = COURSE.graph.positions;
    const edgeMarkup = COURSE.graph.edges
      .map(([from, to, weight]) => {
        const [x1, y1] = positions[from];
        const [x2, y2] = positions[to];
        const crossing = labSides[from] !== labSides[to];
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        return `
          <g aria-hidden="true">
            <line class="lab-edge" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
              stroke="${crossing ? "var(--orange)" : "var(--line-dark)"}"
              stroke-width="${crossing ? Math.max(4, weight) : Math.max(3, weight * 0.7)}"
              ${crossing ? 'stroke-dasharray="12 9"' : ""} />
            <circle cx="${midX}" cy="${midY}" r="19"
              fill="var(--paper)" stroke="${crossing ? "var(--orange)" : "var(--line-dark)"}" stroke-width="2" />
            <text x="${midX}" y="${midY + 6}" text-anchor="middle"
              fill="${crossing ? "var(--orange)" : "var(--muted)"}"
              font-family="Cascadia Mono, Consolas, monospace"
              font-size="17" font-weight="800">${weight}</text>
          </g>`;
      })
      .join("");

    const nodeMarkup = nodes
      .map((node) => {
        const [x, y] = positions[node];
        const fillColor = labSides[node] === 1 ? "var(--green)" : "var(--blue)";
        const destination = labSides[node] === 1 ? 2 : 1;
        const label = fill(t("moveLabel"), {
          node,
          from: sideLabel(labSides[node]),
          to: sideLabel(destination),
        });
        const isCandidate = candidate?.node === node;
        return `
          <g class="lab-node" data-node="${node}" role="button" tabindex="0"
            aria-label="${label}">
            ${isCandidate ? `<circle cx="${x}" cy="${y}" r="59" fill="none" stroke="var(--orange)" stroke-width="5" stroke-dasharray="5 5" />` : ""}
            <circle class="node-body" cx="${x}" cy="${y}" r="46" fill="${fillColor}"
              stroke="var(--white)" stroke-width="5" />
            <text x="${x}" y="${y + 14}">${node}</text>
          </g>`;
      })
      .join("");

    graphSvg.innerHTML = `
      <title id="lab-graph-title">${t("graphTitle")}</title>
      <defs>
        <pattern id="lab-grid" width="70" height="70" patternUnits="userSpaceOnUse">
          <path d="M70 0H0V70" fill="none" stroke="rgba(23,35,31,.08)" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="1120" height="620" fill="url(#lab-grid)" />
      <line x1="560" y1="30" x2="560" y2="590" stroke="var(--ink)"
        stroke-width="2" stroke-dasharray="10 10" opacity=".28" />
      <text x="510" y="42" text-anchor="end" fill="var(--green)"
        font-size="16" font-weight="850" letter-spacing="2">${t("groupA")}</text>
      <text x="610" y="42" text-anchor="start" fill="var(--blue)"
        font-size="16" font-weight="850" letter-spacing="2">${t("groupB")}</text>
      ${edgeMarkup}
      ${nodeMarkup}
    `;

    document.getElementById("lab-cut").textContent = String(stats.cut);
    document.getElementById("lab-sizes").textContent = `${stats.sizeA} | ${stats.sizeB}`;
    document.getElementById("lab-gap").textContent = String(stats.gap);

    const legality = document.getElementById("lab-legality");
    legality.classList.toggle("is-illegal", stats.gap > labGapLimit);
    legality.querySelector("span").textContent =
      stats.gap > labGapLimit ? (language === "zh" ? "不可行" : "Infeasible") : t("feasible");
    document.getElementById("legality-text").textContent =
      stats.gap > labGapLimit
        ? fill(t("illegalCurrent"), { gap: stats.gap, limit: labGapLimit })
        : fill(t("feasibleText"), { gap: stats.gap, limit: labGapLimit });

    const bestNode = document.getElementById("best-node");
    const bestGain = document.getElementById("best-gain");
    const bestNote = document.getElementById("best-move-note");
    const applyButton = document.getElementById("apply-best-move");
    if (candidate && candidate.gain > 0) {
      bestNode.textContent = candidate.node;
      bestGain.textContent = `+${candidate.gain}`;
      bestNote.textContent = fill(t("bestCandidate"), {
        node: candidate.node,
        from: sideLabel(candidate.from),
        to: sideLabel(candidate.to),
        before: stats.cut,
        after: candidate.newCut,
      });
      applyButton.disabled = false;
    } else {
      bestNode.textContent = "—";
      bestGain.textContent = "—";
      bestNote.textContent = t("noCandidate");
      applyButton.disabled = true;
    }
  }

  graphSvg.addEventListener("click", (event) => {
    const group = event.target.closest("[data-node]");
    if (!group) return;
    const node = group.dataset.node;
    labSides[node] = labSides[node] === 1 ? 2 : 1;
    renderGraph();
  });

  graphSvg.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const group = event.target.closest("[data-node]");
    if (!group) return;
    event.preventDefault();
    const node = group.dataset.node;
    labSides[node] = labSides[node] === 1 ? 2 : 1;
    renderGraph();
    graphSvg.querySelector(`[data-node="${node}"]`)?.focus();
  });

  document.getElementById("reset-lab").addEventListener("click", () => {
    labSides = { ...COURSE.graph.initial };
    labGapLimit = 2;
    document.getElementById("balance-gap").value = "2";
    renderGraph();
  });

  document.getElementById("balance-gap").addEventListener("change", (event) => {
    labGapLimit = Number(event.target.value);
    renderGraph();
  });

  document.getElementById("apply-best-move").addEventListener("click", () => {
    const candidate = bestMove(labSides, labGapLimit);
    if (!candidate || candidate.gain <= 0) return;
    labSides[candidate.node] = candidate.to;
    renderGraph();
  });

  function renderPass() {
    const gains = COURSE.klPass.map((item) => item.gain);
    const cumulative = [0];
    gains.forEach((gain) => cumulative.push(cumulative.at(-1) + gain));
    const visibleMax = Math.max(...cumulative.slice(0, passStep + 1));
    const current = cumulative[passStep];
    const bestIndex = cumulative.slice(0, passStep + 1).lastIndexOf(visibleMax);
    document.getElementById("pass-current").textContent = `${
      current > 0 ? "+" : ""
    }${current}`;
    document.getElementById("pass-best").textContent = `${
      visibleMax > 0 ? "+" : ""
    }${visibleMax}`;

    const chart = document.getElementById("pass-chart");
    const width = 880;
    const left = 78;
    const right = 54;
    const top = 44;
    const bottom = 72;
    const plotWidth = width - left - right;
    const plotHeight = 470 - top - bottom;
    const x = (index) => left + (index / gains.length) * plotWidth;
    const minValue = -1;
    const maxValue = Math.max(10, ...cumulative) + 1;
    const y = (value) =>
      top + ((maxValue - value) / (maxValue - minValue)) * plotHeight;
    const path = cumulative
      .map((value, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(value)}`)
      .join(" ");
    const progressPath = cumulative
      .slice(0, passStep + 1)
      .map((value, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(value)}`)
      .join(" ");

    chart.innerHTML = `
      <title id="pass-title">${t("passTitle")}</title>
      <defs>
        <pattern id="pass-grid" width="88" height="62" patternUnits="userSpaceOnUse">
          <path d="M88 0H0V62" fill="none" stroke="rgba(23,35,31,.07)" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="${width}" height="470" fill="url(#pass-grid)" />
      <line x1="${left}" x2="${width - right}" y1="${y(0)}" y2="${y(0)}"
        stroke="var(--line-dark)" stroke-width="2" />
      <path d="${path}" fill="none" stroke="var(--line)" stroke-width="4"
        stroke-dasharray="8 9" />
      <path d="${progressPath}" fill="none" stroke="var(--ink)" stroke-width="7"
        stroke-linejoin="round" stroke-linecap="round" />
      ${cumulative
        .map(
          (value, index) => `
            <g opacity="${index <= passStep ? 1 : 0.35}">
              <circle cx="${x(index)}" cy="${y(value)}" r="${index === bestIndex ? 11 : 8}"
                fill="${index === bestIndex ? "var(--orange)" : "var(--green)"}"
                stroke="var(--white)" stroke-width="4" />
              <text x="${x(index)}" y="${y(value) - 22}" text-anchor="middle"
                font-family="Cascadia Mono, Consolas, monospace"
                font-size="18" font-weight="800"
                fill="${index === bestIndex ? "var(--orange)" : "var(--ink)"}">
                ${value > 0 ? "+" : ""}${value}
              </text>
            </g>`,
        )
        .join("")}
      ${[
        t("passChartStart"),
        ...gains.map((_, index) => fill(t("passChartSwap"), { number: index + 1 })),
      ]
        .map(
          (label, index) => `
            <text x="${x(index)}" y="445" text-anchor="middle"
              font-family="Cascadia Mono, Consolas, monospace"
              font-size="13" font-weight="800"
              letter-spacing=".8" fill="var(--muted)">${label}</text>`,
        )
        .join("")}
      <rect x="${x(bestIndex) - 43}" y="${y(visibleMax) - 57}" width="86" height="26"
        fill="var(--orange)" rx="2" />
      <text x="${x(bestIndex)}" y="${y(visibleMax) - 39}" text-anchor="middle"
        font-size="11" font-weight="850" letter-spacing="1"
        fill="var(--white)">${t("passChartBest")}</text>
    `;

    const narration = document.getElementById("pass-narration");
    if (passStep === 0) {
      narration.textContent = t("passStart");
    } else {
      const gain = gains[passStep - 1];
      narration.textContent = fill(t("passStep"), {
        step: passStep,
        sign: gain > 0 ? "+" : "",
        gain,
        current: `${current > 0 ? "+" : ""}${current}`,
        best: `${visibleMax > 0 ? "+" : ""}${visibleMax}`,
      });
    }
    const nextButton = document.getElementById("pass-next");
    nextButton.disabled = passStep >= gains.length;
    nextButton.textContent =
      passStep >= gains.length ? t("passComplete") : t("advancePass");
  }

  document.getElementById("pass-next").addEventListener("click", () => {
    if (passStep < COURSE.klPass.length) {
      passStep += 1;
      renderPass();
    }
  });
  document.getElementById("pass-reset").addEventListener("click", () => {
    passStep = 0;
    renderPass();
  });

  function renderQuiz() {
    quizList.innerHTML = "";
    COURSE.quizzes.forEach((question, questionIndex) => {
      const block = document.createElement("article");
      block.className = "quiz-question";
      block.dataset.question = String(questionIndex);
      const options = question.options
        .map((option, optionIndex) => {
          const letter = String.fromCharCode(65 + optionIndex);
          const selected = quizSelections[questionIndex] === optionIndex;
          let state = "";
          if (quizChecked) {
            if (optionIndex === question.answer) state = "is-correct";
            else if (selected) state = "is-wrong";
          }
          return `
            <li class="quiz-option ${state}">
              <input type="radio" id="q${questionIndex}-${optionIndex}"
                name="question-${questionIndex}" value="${optionIndex}"
                data-question="${questionIndex}" ${selected ? "checked" : ""} />
              <label for="q${questionIndex}-${optionIndex}">
                <span class="option-letter">${letter}</span>
                <span>${option[language]}</span>
              </label>
            </li>`;
        })
        .join("");
      const explanation =
        language === "zh" ? question.explanationZH : question.explanationEN;
      block.innerHTML = `
        <h4>${question[language]}</h4>
        <ul class="quiz-options">${options}</ul>
        <div class="quiz-explanation">${explanation}</div>
      `;
      block.classList.toggle("is-checked", quizChecked);
      quizList.appendChild(block);
    });
    document.getElementById("quiz-score").textContent = quizChecked
      ? String(
          COURSE.quizzes.reduce(
            (score, question, index) =>
              score + (quizSelections[index] === question.answer ? 1 : 0),
            0,
          ),
        )
      : "0";
  }

  quizList.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const questionIndex = Number(event.target.dataset.question);
    quizSelections[questionIndex] = Number(event.target.value);
  });

  document.getElementById("quiz-check").addEventListener("click", () => {
    const result = document.getElementById("quiz-result");
    if (quizSelections.some((selection) => selection === null)) {
      result.textContent = t("passNoAnswers");
      return;
    }
    quizChecked = true;
    const score = COURSE.quizzes.reduce(
      (total, question, index) =>
        total + (quizSelections[index] === question.answer ? 1 : 0),
      0,
    );
    renderQuiz();
    result.textContent = fill(t("passQuizSummary"), {
      score,
      total: COURSE.quizzes.length,
    });
  });

  document.getElementById("quiz-retry").addEventListener("click", () => {
    quizSelections = Array(COURSE.quizzes.length).fill(null);
    quizChecked = false;
    document.getElementById("quiz-result").textContent = "";
    renderQuiz();
  });

  setLanguage(language, false);
  updatePlaybackLabel();
})();
