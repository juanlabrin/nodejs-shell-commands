// Command: mongodump --archive=dump/demoMetalurgica.20210430.gz --gzip --db=demoMetalurgica
exports.backupDB = function(args){

    console.log('Mongo Backup Shell');
    console.log(args);

    const { spawn } = require('child_process');
    const mongodump = spawn('mongodump', ['--archive=./backup/', '--gzip', '--db='+args.db]);

    mongodump.on('exit', function(code, signal){
        if(code){
            console.log('Backup process exited with code ', code);
        } else if(signal) {
            console.log('Backup process was killed with singal ', signal);
        } else {
            console.log('Successfully backedup the database');
        }
    });

}
