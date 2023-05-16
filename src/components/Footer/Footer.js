import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="mt-5 p-4 bg-dark text-white text-center">
            <div className="style">
              Copyright © 2020
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

