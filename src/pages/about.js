import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>
        I'm 23 years old and currently live in Londrina, Paraná, Brazil.
        Currently my objectives are to graduate and move to Canada.
      </p>
      <h2>Hobbies:</h2>
      <ul>
        <li>Sports, mainly Bodybuilding and automobilism.</li>
        <li>Cars and bikes</li>
        <li>Games and technology</li>
      </ul>
      <p>
        Want to talk about some of my hobbies?{" "}
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
