import { DetailResponse } from '../../interfaces/DetailResponse.interface';
import { ProductDetailResponse } from '../../Common/action/product_detail/ProductDetailResponse.interface';
import { site } from '../../option';

export const detailResponseMapping = (input: DetailResponse): ProductDetailResponse => {
    const id = Number.parseInt(input.data.linkUrl.split('/')[4]);
    return {
        id,
        site_code: '005',
        origin_url: site + id,
        title: input.data.title,
        price: input.data.property.price.amount,
        date: input.data.timeago,
        image: input.data.images.map(value => value.imageUrl),
        detail: input.data.description,
        tags: {
            location: input.data.property.location
                ? input.data.property.location.address
                : undefined,
            delivery: input.data.property.hasDeliveryFee == true ? '배송비있음' : '무료배송',
        },
    };
};
