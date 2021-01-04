import * as https from 'https';
import { Point, Points as PointsPagination } from '../models/Points';

export class Points {

    /**
     * Fetch details of a specific point
     * @param pointID The id of a point
     * @returns Promise<Point>
     */
    static fetch(pointID: number) {
        return new Promise<Point>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/points/' + pointID,
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as Point);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }
    /**
     * Fetch all points on the specified page
     * @param Page The Page number
     * @returns Promise<Points>
     */
    static fetchAll(Page: number = 1) {
        return new Promise<PointsPagination>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/points/?page=' + Page,
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as PointsPagination);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }
}