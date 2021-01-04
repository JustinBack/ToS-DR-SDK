const tosdr = require("../build/sdk");

if (typeof tosdr.Services == "undefined") {
    throw Error("Failed to load class Services");
}

if (typeof tosdr.Services.fetchAll == "undefined") {
    throw Error("Failed to load function fetchAll");
}
if (typeof tosdr.Services.fetch == "undefined") {
    throw Error("Failed to load function fetch");
}


tosdr.Services.fetch(182)
    .then((service) => {
        if (typeof service.id == "undefined") {
            throw Error("Expected service id 182, got undefined");
        }
        if (typeof service.name == "undefined") {
            throw Error("Expected service name Facebook, got undefined");
        }
    }).catch((err) => {
        throw Error(err.message);
    });



tosdr.Services.fetchAll()
    .then((services) => {
        if (typeof services.services.length == "undefined") {
            throw Error("Expected service count, got undefined");
        }
    }).catch((err) => {
        throw Error(err.message);
    });