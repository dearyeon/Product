import { CategoryCode } from '../../category/Category.type';

export interface ProductListRequest {
    /** 검색 단어 */
    search_word: string;
    /** 카테고리 검색 여부 */
    is_category: boolean;
    /** 카테고리 코드 */
    catgory_code?: CategoryCode;
    /** 가격순 여부 */
    orderPrice: boolean;
    /** 날짜순 여부 */
    orderDate: boolean;
}
