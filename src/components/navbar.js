import React from "react"
import { Link } from "gatsby"

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
]

export default () => (
  <nav class="navbar">
    <div className="container">
      <div className="navbar-container">
        <h1 className="navbar-title">
          <a href="/">Navbar</a>
        </h1>

        <ul className="navbar-links">
          {pages.map(({ name, path }, index) => (
            <li className="navbar-link" key={index}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
)
