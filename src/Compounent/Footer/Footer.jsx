import React from 'react'

import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div>
         <footer className="position-relative">
        <div className="custom-bg-dark">
          <div className="container">
          </div>
        </div>
        <div style={{ backgroundColor: " #0090f8" }}>
          <div className="container">
            <div className="d-flex justify-content-between column-gap-5 flex-wrap align-items-center py-3 row-gap-3">
              <span
                className="text-light m-0 fw-lighter"
                style={{ fontSize: "13px" }}
              >
                All Rights Reserved by{" "}
                <strong>
                  <a href="#" className="text-decoration-none text-light">
                    weldost.com
                  </a>
                </strong>{" "}
                &copy;2024
              </span>
              <ul className="socialmedia">
                <li>
                  <a
                    href="https://www.instagram.com/weldost/profilecard/?igsh=MTd5cXJza3h1bGJt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram className="fs-3  text-white hover:text-black" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551065162435"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare className="fs-3  text-white hover:text-black" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/weldost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram className="fs-3  text-white hover:text-black" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/WeldostGlobal?t=EyXF4wqT6zvBnd2QWzPV2w&s=07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter className="fs-3  text-white hover:text-black" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@weldost.travel?_t=8qP8qXBrfZQ&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTikTok className="fs-3  text-white hover:text-black" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer