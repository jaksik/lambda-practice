import fetch from "node-fetch";

exports.handler = async (event, context) => {
    var obj = {  
        headers: {
          'Authorization': 'Basic dnYwZ3RsZGctMWQ3di1xY2xxOmUydnYtbG1oZzY3NmFrMHox',
        }
    };
  return fetch('https://api.printful.com/products', obj)
    //.then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};