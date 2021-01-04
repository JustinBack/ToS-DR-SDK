import * as https from 'https';
import { Topic } from '../models/Topics';

export class Topics {

    static fetch(topicID: number) {
        return new Promise<Topic>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/topics/' + topicID,
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as Topic);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }

    static fetchAll() {
        return new Promise<Topic[]>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/topics/',
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as Topic[]);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }
}