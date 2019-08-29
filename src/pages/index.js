import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

    function postData() {
        fetch("https://api.print.io/api/v/5/source/api/shippingprices/?recipeid=f255af6f-9614-4fe2-aa8b-1b77b936d9d6", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": {
    "Items": [
      {
        "SKU": "PhoneCase-GalaxyNote2-Matte",
        "Quantity": 1
      },
      {
        "SKU": "PhoneCase-Glossy-GalaxyNote3",
        "Quantity": 2
      }
    ],
    "ShipToPostalCode": "115301",
    "ShipToState": "PA",
    "LanguageCode": "en",
    "CurrencyCode": "USD",
    "ShipToCountry": "US"
  }
})
          .then(response => response.json())
          .then(console.log)
          .catch(err => {
            console.log(err);
          });
    }

    postData();

  
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
