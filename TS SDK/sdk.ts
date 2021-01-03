import * as https from 'https';
import { Service } from './models/getService';
import { All } from './models/allServices';

export function fetchService(serviceID: number) {
    return new Promise<Service>((resolve, reject) => {
        const options = {
            hostname: 'beta.tosdr.org',
            port: 443,
            path: '/api/3/service/' + serviceID,
            method: 'GET'
        }
        let str = "";

        const req = https.request(options, response => {
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been received, so we just print it out here
            response.on('end', () => {

                resolve(JSON.parse(str).parameters as Service);

            });
        })

        req.on('error', error => {
            reject(error);
        })

        req.end();
    });
}


export function fetchAll() {
    return new Promise<All>((resolve, reject) => {
        const options = {
            hostname: 'beta.tosdr.org',
            port: 443,
            path: '/api/3/all.json',
            method: 'GET'
        }
        let str = "";

        const req = https.request(options, response => {
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been received, so we just print it out here
            response.on('end', () => {

                resolve(JSON.parse(str).parameters as All);

            });
        })

        req.on('error', error => {
            reject(error);
        })

        req.end();
    });
}