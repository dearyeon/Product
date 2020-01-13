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
    console.log(req.query);
});

productRouter.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res.send('Error!! There is no Query String');
    }
    const result = await callApp(req.query);
    return res.status(200).json(result);
});

export default productRouter;
