import { post } from 'request';
import { PRODUCT_URL } from '../utils/secrets';
import { BadRequest } from '../utils/exceptions';

export function findCorridorsName(token: string, ids: Array<number>): any {
    return new Promise((resolve, reject) => {
        post(PRODUCT_URL, { headers: { 'Authorization': token }, body: { ids }, json: true }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                reject(new BadRequest('Unable to request to product service'));
            }
        });
    });
}