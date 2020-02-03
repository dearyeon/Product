import { detailRequestService } from './detailRequest.service';
import { detailResponseMapping } from './detailResponseMapping';
import { DetailResponse } from '../../interfaces/DetailResponse.interface';

export const detailScrapComponent = async (id: Number) => {
    const res = await detailRequestService(id);
    const detail: DetailResponse = JSON.parse(res);
    const mapping_to_form = detailResponseMapping(detail);
    return mapping_to_form;
};
