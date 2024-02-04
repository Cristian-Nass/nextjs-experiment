import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "salmon",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
          paddingTop: "18px",
          color: "white",
          fontSize: "18px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <li>
          <Link href='/' style={{ textDecoration: "none", color: "#fff" }}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/about' style={{ textDecoration: "none" }}>
            <p>About Us</p>
          </Link>
        </li>
        {/* <li>
          <Link href='/gallery' style={{ textDecoration: "none" }}>
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link href='/services' style={{ textDecoration: "none" }}>
            <p>Services</p>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
