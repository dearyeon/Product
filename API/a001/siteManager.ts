import * as request from 'request-promise';

interface parserFrame {
    list: {
        name: string;
        location: string;
        pid: string;
    }[];
}

async function BunjangList(q: string, page: number) {
    const list_headers = {
        url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
        qs: {
            q,
            stat_uid: '10649087',
            version: '4',
            page,
        },
    };
    const response = await request.get(list_headers);
    const parser: parserFrame = JSON.parse(response);
    console.log(parser.list[0]);
}

async function BunjangDetail(pid: string) {
    const detail_headers = {
        url: `https://api.bunjang.co.kr/api/1/product/${pid}/detail_info.json`,
        qs: {
            stat_uid: '10649087',
            version: '4',
        },
    };
    const response = await request.get(detail_headers);
    const parser = JSON.parse(response);
    console.dir(parser, { depth: 5 });
}

//BunjangList('모니터', 5);
BunjangDetail('97378657');
