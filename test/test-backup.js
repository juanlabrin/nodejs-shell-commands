var mongoBackupShell = require('../mongo-backup-shell/mongo-backup-shell');

mongoBackupShell.backupDB(
    {
        db: 'databaseName', // required
        // access: {
        //     host: '127.0.0.1', // required
        //     user: 'admin', // required
        //     pass: '123', // required
        //     authDB: 'admin', // required
        //     port: '27017' // required
        // }, // optional
        filename: 'fileName', // optional     
        compress: true // optional compress --gzip archive
    }
);