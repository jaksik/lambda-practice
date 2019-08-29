// function errorResponse(err, callback) {
//   const response = {
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     },
//     statusCode: 500,
//     body: JSON.stringify({
//       error: err
//     })
//   }

//   if (typeof callback === 'function') {
//     callback(null, response)
//   }
// }

// export function handler(event, context, callback) {
//   console.log("queryStringParameters", event.queryStringParameters)

//   try {
//     fetch("https://www.googleapis.com/books/v1/volumes?q=colorado", {
//       //     method: 'GET',
//       //     mode: 'no-cors',
//       //   //   body: JSON.stringify({
//       //   //     order: {
//       //   //       currency: 'usd'
//       //   //     },
//       //   //   })
      
//       }).then(response => response.json()) // parses JSON response into native JavaScript objects 
//         .then(console.log)
//   } catch (e) {
//     errorResponse(e, callback)
// }
// }