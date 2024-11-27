const axios = require('axios');

urls = [
    'https://flow-express-js.onrender.com/',
    'https://flow-socials.onrender.com',
    'https://sequelize-postgres-exercise-22127182.onrender.com/'
];

async function pingUrl(url) {
    try {
        const response = await axios.get(url);
        console.log(`Success: ${url}`);
    } catch (error) {
        console.error(`Error: ${url}`);
    }
}
urls.forEach(url => pingUrl(url));
