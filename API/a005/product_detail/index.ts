import { detailScrapComponent } from './src/detailScrap.component';
import { ProductDetailRequest, ProductDetailResponse } from '../Common/action';

export const index = async (keyword: ProductDetailRequest) => {
    return detailScrapComponent(Number.parseInt(keyword.id)).then(value => value);
};
