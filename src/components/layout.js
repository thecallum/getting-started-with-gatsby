import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

import "../css/main.css"

export default ({ children }) => (
  <>
    <Navbar />

    <main className="main">{children}</main>

    <Footer />
  </>
)
