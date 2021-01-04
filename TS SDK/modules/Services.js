"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const https = require("https");
class Services {
    static fetch(serviceID) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/services/' + serviceID,
                method: 'GET'
            };
            let str = "";
            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });
                //the whole response has been received, so we just print it out here
                response.on('end', () => {
                    resolve(JSON.parse(str));
                });
            });
            req.on('error', error => {
                reject(error);
            });
            req.end();
        });
    }
    static fetchAll(Page = 1) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/services/?page=' + Page,
                method: 'GET'
            };
            let str = "";
            const req = https.request(options, response => {
                response.on('data', function (chunk) {
                    str += chunk;
                });
                //the whole response has been received, so we just print it out here
                response.on('end', () => {
                    resolve(JSON.parse(str));
                });
            });
            req.on('error', error => {
                reject(error);
            });
            req.end();
        });
    }
}
exports.Services = Services;
//# sourceMappingURL=Services.js.map