const tosdr = require('../TS SDK/');


tosdr.fetchService(182).then((service) => {
    console.log(service.name);
})
tosdr.fetchAll().then((services) => {
    console.log(services.version);
})
