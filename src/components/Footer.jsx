import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
      <p class="footer">Created by Tom Bricknell, {currentYear}</p>
    );
}

export default Footer;