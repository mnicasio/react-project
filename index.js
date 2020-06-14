const writeToFile = require('./my_modules/write-to-file');
const axios = require('axios');

let data = axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
    let resData = res.data;
    writeToFile(JSON.stringify(resData, null, 4));
});