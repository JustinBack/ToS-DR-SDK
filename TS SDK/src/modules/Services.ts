import * as https from 'https';
import { Service, Services as ServicePagination } from '../models/Services';

export class Services {

    /**
     * Fetch details of a service using its id
     * @param serviceID The service id
     * @returns Promise<Service>
     */
    static fetch(serviceID: number) {
        return new Promise<Service>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/services/' + serviceID,
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as Service);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }

    /**
     * Fetch all services on the specified page
     * @param Page The Page Number
     * @returns Promise<Service[]>
     */
    static fetchAll(Page: number = 1) {
        return new Promise<ServicePagination>((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/services/?page=' + Page,
                method: 'GET'
            }
            let str = "";

            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {

                    resolve(JSON.parse(str) as ServicePagination);

                });
            })

            req.on('error', error => {
                reject(error);
            })

            req.end();
        });
    }
}