exports.backupDB = function(args){
    console.log('Mongo Backup Shell');
    const { spawn } = require('child_process');    
    let options = [];

    if (Object.entries(args).length === 0 || args.db === '' || args.db === undefined){
        console.log('Database name is required!, Proccess exit.');
        process.exit(1);
    }

    if (Object.entries(args).length > 1){
        if(args.access != undefined){
            if(Object.entries(args.access).length === 0 || Object.entries(args.access).length < 5 || args.access === ''){
                console.log('All access parameters are required!, Proccess exit.');
                process.exit(1);
            }
            Object.keys(args.access).forEach(key => {
                if(args.access[key] === ''){
                    console.log(key, 'is required!, Proccess exit.');
                    process.exit(1);
                }                
            });
            options.push(`--host=${args.access.host}`);
            options.push(`--port=${args.access.port}`);
            options.push(`--user=${args.access.user}`);
            options.push(`--password=${args.access.pass}`);
            options.push(`--authenticationDatabase=${args.access.authDB}`);
        }
        if(args.filename != undefined || args.filename != ''){
            options.push(`--archive=${args.filename}`);
        }
        if(args.compress){
            options.push(`--gzip`);
        }
        options.push(`--db=${args.db}`);
    } else {
        options.push(`--db=${args.db}`);
    }
    
    const mongodump = spawn('mongodump', options);

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
