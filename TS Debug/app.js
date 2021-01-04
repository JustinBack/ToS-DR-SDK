const ToSDR = require('tosdr-sdk');

ToSDR.Services.fetch(182).then((service) => {
    console.log("Service:", service);
});

