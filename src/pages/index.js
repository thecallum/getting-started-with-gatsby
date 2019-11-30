import React from "react"
import "../css/main.css"

export default () => (
  <>
    <nav class="navbar">
      <div className="container">
        <div className="navbar-container">
          <h1 className="navbar-title">
            <a href="/">Navbar</a>
          </h1>
        </div>
      </div>
    </nav>

    <main className="main">
      <div className="content">
        <div className="container">
          <h1>Hello world</h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            praesentium dolore quidem laudantium quae! Consequuntur ducimus
            facilis cumque nemo eligendi! Quibusdam itaque officia repudiandae
            qui laboriosam, rerum minus tempora voluptates.
          </p>
        </div>
      </div>

      <div className="backdrop">
        <div className="backdrop-content">
          <div className="content">
            <div className="container">
              <h2>Lorem Ipsum</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde quasi a dolorem hic labore molestias sapiente? Ducimus,
                mollitia necessitatibus. Reiciendis delectus dignissimos animi
                voluptas ratione, adipisci beatae incidunt molestias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <h2>Lorem Ipsum</h2>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            praesentium dolore quidem laudantium quae! Consequuntur ducimus
            facilis cumque nemo eligendi! Quibusdam itaque officia repudiandae
            qui laboriosam, rerum minus tempora voluptates.
          </p>
        </div>
      </div>
    </main>

    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <h3 class="footer-title">Footer</h3>
        </div>
      </div>
    </footer>
  </>
)
