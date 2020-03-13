import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        I'd love to talk, please feel free to send an email to{" "}
        <strong>waltmarinho@gmail.com</strong>
      </p>
      <p>
        Also follow me on instagram{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/walttsm"
        >
          @walttsm
        </a>
        !
      </p>
    </Layout>
  )
}

export default ContactPage
