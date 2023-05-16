import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                    <div className="container mt-3">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="pill" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#news">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#about">About</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
      </div>
    )
  }
}
