"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAll = exports.fetchService = void 0;
const https = require("https");
function fetchService(serviceID) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'beta.tosdr.org',
            port: 443,
            path: '/api/3/service/' + serviceID,
            method: 'GET'
        };
        let str = "";
        const req = https.request(options, response => {
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been received, so we just print it out here
            response.on('end', () => {
                resolve(JSON.parse(str).parameters);
            });
        });
        req.on('error', error => {
            reject(error);
        });
        req.end();
    });
}
exports.fetchService = fetchService;
function fetchAll() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'beta.tosdr.org',
            port: 443,
            path: '/api/3/all.json',
            method: 'GET'
        };
        let str = "";
        const req = https.request(options, response => {
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been received, so we just print it out here
            response.on('end', () => {
                resolve(JSON.parse(str).parameters);
            });
        });
        req.on('error', error => {
            reject(error);
        });
        req.end();
    });
}
exports.fetchAll = fetchAll;
//# sourceMappingURL=sdk.js.map