import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex bg-gray-800 min-h-">
      <div className="flex flex-1 flex-col items-center sm:flex-row sm:items-start max-w-6xl mx-auto my-10 text-white">
        <div className="flex flex-col flex-1 py-2">
          <span className="text-gray-500 text-lg ">Lorem Ipsum</span>
          <Link to="/">
            <span>About us</span>
          </Link>
          <Link to="/">
            <span>Lorem ipsum</span>
          </Link>
          <Link to="/">
            <span>Privacy policy</span>
          </Link>
        </div>
        <div className="flex flex-col flex-1 py-2">
          <span className="text-gray-500 text-lg ">Lorem Ipsum</span>
          <Link to="/">
            <span>Lorem ipsum</span>
          </Link>
          <Link to="/">
            <span>Lorem ipsum</span>
          </Link>
          <Link to="/">
            <span>Lorem ipsum</span>
          </Link>
          <Link to="/">
            <span>Lorem ipsum</span>
          </Link>
        </div>
        <div className="flex flex-col flex-3 py-2">
          {/* Social Media */}
          <div className="ml-auto mr-0 flex flex-col">
            <span className="text-gray-500 text-lg ">Social Media</span>
            <div className="flex flex-row">
              <a href="https://www.github.com/mucahit-sahin">
                <img
                  src="https://img.icons8.com/color/48/000000/github.png"
                  alt="github"
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src="https://img.icons8.com/color/48/000000/instagram-new.png"
                  alt="instagram"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img
                  src="https://img.icons8.com/color/48/000000/twitter.png"
                  alt="twitter"
                />
              </a>
              <a href="https://www.linkedin.com/">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
