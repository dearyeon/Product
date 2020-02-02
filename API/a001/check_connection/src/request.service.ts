import * as request from 'request-promise';
import { APISite } from '../../option';

export const requestService = () => {
    return request.get(APISite, (error: any, response: any) => {
        if (error) {
            return {
                isSuccess: false,
                error,
            };
        }
        if (response.statusCode !== 200) {
            return {
                isSuccess: false,
                error,
            };
        }
        return {
            isSuccess: true,
        };
    });
};
