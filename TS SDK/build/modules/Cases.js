"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cases = void 0;
const https = __importStar(require("https"));
class Cases {
    /**
     * Fetch details of a specific case
     * @param caseID The ID of a case
     * @returns Promise<Case>
     */
    static fetch(caseID) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/cases/' + caseID,
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
     * Fetch all cases (SLOW)
     * @returns Promise<Case[]>
     */
    static fetchAll() {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'edit.tosdr.org',
                port: 443,
                path: '/api/v1/cases/',
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
exports.Cases = Cases;
//# sourceMappingURL=Cases.js.map