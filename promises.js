
var axios = require('axios');

console.log('sup');

let repos_url = '';

axios.get('https://api.github.com/users/omalleya')
    .then((res) => {
        console.log(res.data);
        repos_url = res.data.repos_url;
        return axios.get(repos_url);
    })
    .then((res) => {
        console.log(res);
    });