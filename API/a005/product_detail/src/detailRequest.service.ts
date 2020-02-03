import request from 'request-promise';
import { detailAPIsite } from '../../option';

export const detailRequestService = async (id: Number) => {
    const option = {
        uri: detailAPIsite + id,
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        },
    };
    const res = await request(option);
    return res;
};
