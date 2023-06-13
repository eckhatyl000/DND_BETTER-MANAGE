module.exports = {
    apps: [
        {
            name: 'DND_BETTER-MANAGE',
            script: 'server.js', // The entry point of your application
            instances: 'max',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                SECRET_KEY: 'your-secret-key',
                SESSION_SECRET: 'your-session-secret',
                MONGODB_URL: 'mongodb://Eckhatyl000:TeeGee%231@docdb-2023-06-08-20-30-05.cluster-cknlngax0gto.us-west-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=us-west-2-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
                MONGODB_CA_FILE: '/home/ec2-user/us-west-2-bundle.pem',
            },
        },
    ],
};
