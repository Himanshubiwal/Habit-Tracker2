const app = require('./src/app');
const dotenv = require('dotenv');
const connectDB = require('./src/db/db')
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

connectDB();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
