import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StripeCheckout from "react-stripe-checkout";

const IndexPage = () => {

  const token = async () => {
    let call
    call = await fetch("/.netlify/functions/createOrder", {
      method: 'POST',
      body: JSON.stringify({
        order: {
          currency: 'usd'
        },
        token: {
          card: {
            number: '4242424242424242',
            exp_month: 12,
            exp_year: 2020,
            cvc: '123'
          }
        },
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
        items: [
          {
            type: 'sku',
            parent: 'sku_FgJVldqsyrIzqQ',
            quantity: 2,
          },
        ],
      })
    })
    .then(call => call.json())
    .then(console.log)
  }

token();
  
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
