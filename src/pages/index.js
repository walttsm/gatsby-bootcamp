import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Index" />
      <h1>Welcome!</h1>
      <h2>
        I'm Walter, I'm a Computer science student from Londrina and I'm
        currently studying Gatsby for a college project.
      </h2>
      <p>
        Want to talk, or have a job offer?{" "}
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
