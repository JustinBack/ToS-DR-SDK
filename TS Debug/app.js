const ToSDR = require('../TS SDK/build/sdk.js');

ToSDR.Services.fetch(182).then((service) => {
    console.log("Service:", service);
})