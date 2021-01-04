"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topics = void 0;
const https = require("https");
class Topics {
    /**
     * Fetch details of a specific topic
     * @param topicID The topic id
     * @returns Promise<Topic>
     */
    static fetch(topicID) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/topics/' + topicID,
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
    /**
     * Fetches all topics
     * @returns Promise<Topic[]>
     */
    static fetchAll() {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/topics/',
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
exports.Topics = Topics;
//# sourceMappingURL=Topics.js.map