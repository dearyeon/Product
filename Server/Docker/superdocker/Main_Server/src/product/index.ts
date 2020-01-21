import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { callApp } from './callApp.service';

const productRouter = Router();

productRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res
            .status(200)
            .sendFile(path.join(__dirname, '../../views/product/productBase.html'));
    }
});

productRouter.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title || typeof req.query.title !== 'string') {
        return res.send('Error!! There is no Query String');
    }
    //const result = await callApp({ search_word: req.query.title });
    const db_result = await getData(req.query.title);
    if(Object(db_result).length < 20) {
        const result = await callApp({ search_word: req.query.title });
        for (var i = 0; i < result.length; i++) {
            updateData(result[0][i]);
        }
        return res.status(200).json(result);
    }
    return res.status(200).json(db_result);
});

export default productRouter;
