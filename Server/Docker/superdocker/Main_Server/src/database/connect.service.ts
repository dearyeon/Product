import * as mysql from 'mysql';
import { mysql_account } from '../mysql_account';
import { ProductListResponse } from '../../Common/action/product_list/ProductListResponse.interface';

const connect = mysql.createConnection(mysql_account);
connect.connect();

export const getData = (keyWord: string) => {
    return new Promise((resolve, reject) => {
        const a = connect.query("select * from product_list where name like ?", ['%' + keyWord + '%'], (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

export const updateData = (keyword: ProductListResponse) => {
    connect.query('insert ignore into product_list(id, site_code, title, price, thumnail) values(?, ?, ?, ?, ?)', [keyword.id, keyword.site_code, keyword.title, keyword.price, keyword.thumbnail], (err, data) => {
        if (err) {
            data = 'Fail';
            throw err;
        }
        data = 'Success';
        return data;
    });
};

export const removeData = () => {};
