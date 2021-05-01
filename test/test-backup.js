var mongoBackupShell = require('../mongo-backup-shell/mongo-backup-shell');
mongoBackupShell.backupDB(
    {
        db: 'demoMetalurgica',
        user: 'Admin',
        pass: '123'
    }
);