import * as https from 'https';
import { Case } from '../models/Cases';

export class Cases {

    static fetch(caseID: number) {
        return new Promise<Case>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/cases/' + caseID,
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as Case);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }

    static fetchAll() {
        return new Promise<Case[]>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/cases/',
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as Case[]);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }
}