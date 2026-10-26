# KL & FM partition refinement

English narration with bilingual captions.

## 00:00:00.000 — EDA PARTITIONING / REFINEMENT

**English:** A legal partition is a starting point. Refinement decides which move to trust.

**中文：** 合法分区只是起点，优化算法决定该相信哪一种移动。

KL and FM are refinement methods. They start with a legal partition and search for a better one. This lesson shows what each method moves, why a pass can pass through a worse state, and how to verify the result.

## 00:00:13.000 — 01 / READ THE STARTING CUT

**English:** ABC versus DEF is balanced, but the cut costs ten.

**中文：** ABC 对 DEF 虽然尺寸平衡，但割边代价为 10。

Our starter graph has six cells. A, B, and C are on the left. D, E, and F are on the right. The current cut costs ten. The cut is balanced, but the heavy C D edge shows that the grouping is still expensive.

## 00:00:28.000 — 02 / KL PAIR GAIN

**English:** Pair gain combines both local gains, then removes the edge counted twice.

**中文：** 配对收益合并两个局部收益，再扣掉被重复计算的直连边。

KL changes two cells at once. It swaps one vertex from each side, which preserves exact side sizes. For vertex v, define D as external edge weight minus internal edge weight. A swap gain includes both D values and subtracts twice the edge between the pair.

## 00:00:46.000 — 03 / ONE KL STEP

**English:** D(C)=4, D(F)=−1, so the pair gain is +3 and the cut becomes seven.

**中文：** D(C)=4，D(F)=−1，配对收益为 +3，割边代价降到 7。

Try swapping C with F. D of C is six minus two, or four. D of F is one minus two, or negative one. C and F have no direct edge. The pair gain is four minus one, so three. The cut falls from ten to seven. The new exact partition is A B F versus C D E.

## 00:01:05.000 — 04 / KL PASS MECHANICS

**English:** KL records every cumulative gain, then restores the best prefix of the pass.

**中文：** KL 记录每一步的累计收益，最后回滚到该轮的最佳前缀。

A KL pass considers many pairs. After choosing a pair, it locks both vertices and recomputes gains among unlocked vertices. KL may accept a negative pair to move through a poor region. So it records cumulative gain after every step and rolls back to the best prefix before starting another pass.

## 00:01:24.500 — 05 / WHY ROLLBACK MATTERS

**English:** The path reaches +9 before falling. The best prefix is not the final state.

**中文：** 累计收益一度达到 +9 后回落，最佳状态并不在整轮末尾。

Here, the gains are plus seven, plus two, minus one, and minus five. The cumulative path reaches nine, then retreats. Locking alone does not decide the result. The best prefix does. KL stops when a full pass cannot improve the best cut.

## 00:01:41.500 — 06 / FM SINGLE-MOVE SEARCH

**English:** D has gain +5. Moving it to ABC produces a 4|2 split, allowed by the gap limit.

**中文：** D 的收益为 +5；在尺寸差上限为 2 时，移到 ABC 后可形成 4|2 的合法分区。

FM changes one vertex at a time. That makes a single move cheaper to evaluate, but balance needs an explicit rule. After moving v, only neighbors change their gain, so a priority bucket can supply the next best legal move.

## 00:01:56.500 — 07 / ONE FM MOVE

**English:** FM reduces the cut to five, but changes the side sizes from 3|3 to 4|2.

**中文：** FM 把割边代价降到 5，但侧尺寸也从 3|3 变成 4|2。

With a size-gap limit of two, moving D from the right to the left is legal. It takes the partition from three three to four two. D's gain is eight minus three, or five. The cut falls from ten to five. This is a better cut than the balanced KL swap, but it spends balance.

## 00:02:14.000 — 08 / KL VS FM

**English:** KL coordinates swaps. FM scales single moves. Neither guarantees a global optimum.

**中文：** KL 协调交换，FM 扩展单点移动；两者都只保证局部结果。

KL is useful when paired swaps are natural barriers to the search. FM scales better to large graphs and handles balance through constraints. Neither method guarantees a global optimum. Compare them with the same input, balance rule, stop condition, and cut definition. Better numbers outside the allowed balance do not count.

## 00:02:34.000 — 09 / KEEP THE RESULT FEASIBLE

**English:** Balance, locked cells, connectivity, and the stop rule define the feasible search.

**中文：** 平衡、锁定单元、连通性和停止条件共同定义了可行搜索。

Many false improvements come from ignoring the feasible set. Recompute the cut from the final assignment. Verify every side against the balance rule. Keep locked terminals and other constraints locked. Also, do not call a local minimum global just because your single pass stopped.

## 00:02:51.000 — 10 / VERIFY THE MOVE

**English:** A trustworthy result includes the assignment, cut, balance, gains, and stop point.

**中文：** 可信结果应包含最终分区、割边代价、平衡、收益和停止位置。

A useful report shows the starting cut, every accepted move, the cumulative gain, the best prefix, and the final assignment. Run the same example twice and require the same result. A separate recomputation should match the algorithm's reported cut.

## 00:03:07.000 — 11 / RECAP

**English:** KL coordinates pairs. FM scales single moves. Both need feasible, verified results.

**中文：** KL 协调交换，FM 扩展单点移动；两者都需要可行且经过验证的结果。

KL explores coordinated swaps and rolls back to its best prefix. FM follows a sequence of legal single moves using gain buckets. Use cut and balance together, preserve every constraint, and validate the final assignment. The website below lets you inspect a move and test both methods.
