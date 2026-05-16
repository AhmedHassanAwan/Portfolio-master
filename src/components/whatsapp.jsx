import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/923132042072?text=Hello%20Ahmed"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-floating"
    >
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;


