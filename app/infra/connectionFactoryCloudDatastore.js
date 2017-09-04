//var AWS = require('aws-sdk');
var Datastore = require("@google-cloud/datastore");

function createDatastoreConnection(){
    const projectId = "apt-footing-165019";
    const datastore = Datastore({
        projectId: projectId
    });

    return datastore;
}

module.exports = function(){
    return createDatastoreConnection;
}

