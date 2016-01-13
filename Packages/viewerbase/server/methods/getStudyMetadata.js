Meteor.methods({
    /**
     * Retrieves Study metadata given a Study Instance UID
     * This Meteor method is available from both the client and the server
     */
    GetStudyMetadata: function(studyInstanceUid) {
        log.info('GetStudyMetadata(%s)', studyInstanceUid);

        if (!Meteor.settings.dicomWeb) {
            throw 'No properly configured server was available over DICOMWeb';
        }

        // Get the server data. This is user-defined in the
        // config.json files used to run the Meteor server
        var server = Meteor.settings.dicomWeb.endpoints[0];

        return Services.WADO.RetrieveMetadata(server, studyInstanceUid);
    }
});
