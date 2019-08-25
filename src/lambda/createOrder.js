const stripe = require('stripe')('sk_test_DiIrhluODliOuo2J5EAxaGxj00DdFVPCoZ');

module.exports.handler = async (event, context, callback) => {
  console.log("event: ", event.body)
  console.log("queryStringParameters", event.queryStringParameters)
  stripe.orders.create({
    currency: 'usd',
    email: 'jenny.rosen@example.com',
    items: [
      {
        type: 'sku',
        parent: 'sku_FgJVldqsyrIzqQ',
        quantity: 2,
      },
    ],
    shipping: {
      name: 'Jenny Rosen',
      address: {
        line1: '1234 Main Street',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94111',
        country: 'US',
      },
    },
  });

  stripe.tokens.create({
    card: {
      number: '4242424242424242',
      exp_month: 12,
      exp_year: 2020,
      cvc: '123'
    }
  }, function(err, token) {
      console.log("Token")
      // asynchronously called

      stripe.orders.pay('or_1FBOODHLQDCw6eFcn9DC2RDC', {
          source: token.id, // obtained with Stripe.js
      }, function(err, order) {
          // asynchronously called
        }
      );

      callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: JSON.stringify({
          token: token,
          msg: "Hello, World! " + Math.round(Math.random() * 10),
        }),
      })  
    }
  );   
}