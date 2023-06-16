import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Kizito Okeke ⓒ {year} | all rights reserved</p>
    </footer>
  );
}

export default Footer;
