import { SiteCode } from '../../site_code';

export interface ProductDetailResponse {
    /** id */
    id: string;
    /** 제목 */
    title: string;
    /** 가격 */
    price: number;
    /** 이미지 url 배열 */
    image?: string[];
    /** 해당 사이트 */
    origin_url: string;
    /** 사이트 코드 */
    site_code: SiteCode;
    /** 등록일  YYYY-MM-DD */
    date?: string;
    /** 판매자 이름 */
    seller?: string;
    /** 상태 코드 */
    status?: string;
    /** 내용 */
    detail: string;
}
