const ToSDR = require('../TS SDK/sdk.js');

ToSDR.Services.fetch(182).then((service) => {
    console.log("Service:", service.name);
})
ToSDR.Services.fetchAll().then((services) => {
    console.log("Services:", services.meta.total_pages);
})

ToSDR.Cases.fetch(182).then((caseinfo) => {
    console.log("Case:", caseinfo.title);
})
ToSDR.Cases.fetchAll().then((cases) => {
    console.log("Cases:", cases.length);
})

ToSDR.Topics.fetch(40).then((topic) => {
    console.log("Topic:", topic.title);
})
ToSDR.Topics.fetchAll().then((topics) => {
    console.log("Topics:", topics.length);
})

ToSDR.Points.fetch(4513).then((point) => {
    console.log("Point:", point.analysis);
})
ToSDR.Points.fetchAll().then((points) => {
    console.log("Points:", points.meta.total_pages);
})
