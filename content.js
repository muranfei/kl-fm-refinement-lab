window.COURSE = {
  meta: {
    titleEN: "KL / FM Refinement Lab",
    titleZH: "KL / FM 分区优化实验室",
    durationSeconds: 205.5,
    sceneCount: 12,
  },
  chapters: [
    {
      time: 0,
      en: "A legal cut can be expensive",
      zh: "合法切分也可能很昂贵",
    },
    {
      time: 13,
      en: "KL pair gain",
      zh: "KL 配对收益",
    },
    {
      time: 28,
      en: "Worked KL swap",
      zh: "KL 交换实例",
    },
    {
      time: 46,
      en: "KL pass mechanics",
      zh: "KL 单轮机制",
    },
    {
      time: 65,
      en: "Best-prefix rollback",
      zh: "最佳前缀回滚",
    },
    {
      time: 84.5,
      en: "FM single-move search",
      zh: "FM 单点移动搜索",
    },
    {
      time: 101.5,
      en: "Worked FM move",
      zh: "FM 移动实例",
    },
    {
      time: 116.5,
      en: "KL versus FM",
      zh: "KL 与 FM 对比",
    },
    {
      time: 134,
      en: "Feasible constraints",
      zh: "可行约束",
    },
    {
      time: 154,
      en: "Verify the move",
      zh: "验证移动结果",
    },
    {
      time: 171,
      en: "Reproducible evidence",
      zh: "可复现的证据",
    },
    {
      time: 187,
      en: "Recap and practice",
      zh: "总结与练习",
    },
  ],
  graph: {
    nodes: ["A", "B", "C", "D", "E", "F"],
    edges: [
      ["A", "B", 4],
      ["B", "C", 2],
      ["C", "D", 6],
      ["D", "E", 3],
      ["E", "F", 2],
      ["F", "A", 1],
      ["A", "D", 2],
      ["B", "E", 1],
    ],
    initial: { A: 1, B: 1, C: 1, D: 2, E: 2, F: 2 },
    positions: {
      A: [208, 323],
      B: [335, 155],
      C: [340, 494],
      D: [662, 423],
      E: [775, 230],
      F: [900, 112],
    },
  },
  klPass: [
    { gain: 7, en: "Swap 1", zh: "交换 1" },
    { gain: 2, en: "Swap 2", zh: "交换 2" },
    { gain: -1, en: "Swap 3", zh: "交换 3" },
    { gain: -5, en: "Swap 4", zh: "交换 4" },
  ],
  quizzes: [
    {
      en: "For a proposed KL swap, D(a)=3, D(b)=-1, and w(a,b)=1. What is the pair gain?",
      zh: "对一个候选 KL 交换，D(a)=3、D(b)=-1，且 w(a,b)=1。配对收益是多少？",
      options: [
        { en: "0", zh: "0" },
        { en: "2", zh: "2" },
        { en: "4", zh: "4" },
        { en: "-2", zh: "-2" },
      ],
      answer: 0,
      explanationEN:
        "Use g(a,b)=D(a)+D(b)-2w(a,b): 3-1-2=0. The swap does not lower the cut.",
      explanationZH:
        "使用 g(a,b)=D(a)+D(b)-2w(a,b)：3-1-2=0，因此这次交换不会降低割边代价。",
    },
    {
      en: "Why does a KL pass lock both vertices after choosing a pair?",
      zh: "KL 在一轮中选择一对顶点后，为什么要锁定它们？",
      options: [
        {
          en: "To prevent the same vertex from being used twice in one pass.",
          zh: "防止同一顶点在同一轮中被重复使用。",
        },
        {
          en: "To guarantee that the first swap is globally optimal.",
          zh: "保证第一次交换全局最优。",
        },
        {
          en: "To remove all edges incident to the pair from the cut.",
          zh: "从割集中删除这对顶点的所有关联边。",
        },
        {
          en: "To make every remaining gain positive.",
          zh: "让所有剩余收益都变为正值。",
        },
      ],
      answer: 0,
      explanationEN:
        "Locking makes one pass a sequence of distinct swaps. The pass can include negative gains and is evaluated as a whole.",
      explanationZH:
        "锁定让同一轮由互不重复的交换组成。该轮允许出现负收益，最后按整条前缀路径评估。",
    },
    {
      en: "Cumulative gains after a KL pass are +7, +9, +8, +3. Which state should the pass retain?",
      zh: "一轮 KL 的累计收益为 +7、+9、+8、+3。应当保留哪个状态？",
      options: [
        { en: "After swap 1", zh: "交换 1 后" },
        { en: "After swap 2", zh: "交换 2 后" },
        { en: "After swap 4", zh: "交换 4 后" },
        {
          en: "The average of all four states",
          zh: "四个状态的平均值",
        },
      ],
      answer: 1,
      explanationEN:
        "KL records cumulative gain and restores the best prefix. Here the maximum is +9 after the second swap.",
      explanationZH:
        "KL 记录累计收益并回滚到最佳前缀。这里的最大值是第二次交换后的 +9。",
    },
    {
      en: "After moving vertex v, which FM gains must be updated?",
      zh: "移动顶点 v 之后，FM 需要更新哪些顶点的收益？",
      options: [
        {
          en: "Only vertices adjacent to v.",
          zh: "只更新与 v 相邻的顶点。",
        },
        {
          en: "Every vertex in the graph.",
          zh: "图中所有顶点。",
        },
        {
          en: "Only locked vertices.",
          zh: "只更新锁定顶点。",
        },
        {
          en: "No gains; only the total cut changes.",
          zh: "不用更新，只有总割边代价改变。",
        },
      ],
      answer: 0,
      explanationEN:
        "A move changes edge states only for v and its neighbors. This localized update is what makes FM efficient.",
      explanationZH:
        "移动只改变 v 及其邻居的边状态，这种局部更新使 FM 更高效。",
    },
    {
      en: "KL reaches cut 7 with sizes 3|3. FM reaches cut 5 with sizes 4|2. The allowed size gap is 0. What can you claim?",
      zh: "KL 得到割边代价 7、尺寸 3|3；FM 得到代价 5、尺寸 4|2。尺寸差上限为 0。可以得出什么结论？",
      options: [
        {
          en: "The FM result is infeasible under this rule.",
          zh: "在这条约束下，FM 结果不可行。",
        },
        {
          en: "FM proves a global optimum.",
          zh: "FM 证明了全局最优。",
        },
        {
          en: "Balance does not matter when the cut is lower.",
          zh: "割边代价更低时，平衡不重要。",
        },
        {
          en: "The two cuts are directly comparable.",
          zh: "两个结果可以直接比较。",
        },
      ],
      answer: 0,
      explanationEN:
        "A size gap of 2 violates the allowed gap of 0. Its lower cut lies outside the feasible set.",
      explanationZH:
        "尺寸差 2 超过了允许值 0。更低的割边代价位于可行集合之外。",
    },
    {
      en: "FM stops after no legal move improves its recorded best prefix. What has it established?",
      zh: "FM 在没有合法移动能改进已记录的最佳前缀时停止。它证明了什么？",
      options: [
        {
          en: "A local stopping condition, not a global optimum.",
          zh: "只是一个局部停止条件，并不是全局最优。",
        },
        {
          en: "The globally optimal partition.",
          zh: "全局最优分区。",
        },
        {
          en: "That every possible pair swap has been tested.",
          zh: "所有可能的对交换都已测试。",
        },
        {
          en: "That balance is automatically satisfied.",
          zh: "平衡条件会自动满足。",
        },
      ],
      answer: 0,
      explanationEN:
        "Both KL and FM are local refinement heuristics. Their stopping point depends on the initial partition, move set, constraints, and order.",
      explanationZH:
        "KL 和 FM 都是局部优化启发式算法。停止结果取决于初始分区、移动集合、约束和顺序。",
    },
  ],
};
