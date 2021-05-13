import React, { Component } from "react";

export default class UserFooter extends Component {
  render() {
    {
      /* Footer */
    }
    return (
      <footer
        className="bg-light text-center text-lg-start"
        style={{
          bottom: "0px",
          position: "fixed",
          left: "0",
          width: "100%",
          bottom: "0",
        }}
      >
        <a
          className="text-center p-3"
          href="https://www.facebook.com/Bits-UP-LLC-114431510741369"
        >
          © 2021 Copyright:
          <a className="text-dark">BitsUp LLC V-0.0.1-5</a>
        </a>
        {/* Copyright */}
      </footer>
    );
  }
}
