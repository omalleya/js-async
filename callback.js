
const http = require('https');
const URL = require('url').Url;

console.log('sup');

let options = {
  hostname: 'api.github.com',
  path: '/users/omalleya',
  method: 'GET',
  headers: {
    'user-agent': 'omalleya'
  }
};

http.get(options, (response) => {
    response.setEncoding('utf8');
    let rawData = '';

    response.on('data', (chunk) => { 
        rawData +=chunk; 
    });

    response.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);

            options.path = new URL(parsedData.repos_url).path;
            http.get(options, (response) => {
                response.setEncoding('utf8');
                let rawData = '';

                response.on('data', (chunk) => { 
                    rawData +=chunk; 
                });
                
                response.on('end', () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        console.log(parsedData);
                    } catch (e) {
                        console.error(e.message);
                    }
                });

            });
        } catch (e) {
            console.error(e.message);
        }
    });


});