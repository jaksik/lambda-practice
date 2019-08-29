import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

    postData('https://api.printful.com/products', {answer: 42})
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));

    function postData(url = '', data = {}) {
        var obj = {  
            headers: {
              'Authorization': 'Basic dnYwZ3RsZGctMWQ3di1xY2xxOmUydnYtbG1oZzY3NmFrMHox',
              'Access-Control-Allow-Origin': '*',
            }
        };
        
        return fetch('https://api.printful.com/products', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
           // body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        // .then(response => response.json())
        .then(console.log)
     
    }

  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <form>
          <input type="text"/>
          <button type="submit">Pay</button>
          
      </form>
      <Link to="/page-2/">Go to page 2</Link>
      
    </Layout>
  )
}

export default IndexPage
