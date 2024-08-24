var dbconfig = {
    development: {
        server: '192.168.56.101',
        database:'team5_web_labDB',
        user:'sa',
        password:'Aa445566',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.56.101'  // SQL Server instance name
        }
    },
    production: {
        server: '192.168.56.101',
        database:'team5_web_labDB',
        user:'sa',
        password:'Aa445566',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.56.101'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
