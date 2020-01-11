/** 사이트 코드
 *  + 'AA' : 중고나라
 *  + 'AB' : 셀잇
 *  + 'AC' : 당근마켓
 *  + 'AD' : 번개장터
 *  + 'AE' : 헬로마켓
 */
export type SiteCode = JoongGo | SellIt | Daangn | BeonGae | Hello;

/** JoonGo : 중고나라 */
type JoongGo = 'AA';
/** SellIt : 셀잇 */
type SellIt = 'AB';
/** Daangn : 당근마켓 */
type Daangn = 'AC';
/** BeonGae : 번개장터 */
type BeonGae = 'AD';
/** Hello : 헬로마켓 */
type Hello = 'AE';
