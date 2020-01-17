import { scrapComponent } from './src/scrap.component';

export const index = async (keyword: string) => {
    return scrapComponent(keyword).then(value => value);
};
