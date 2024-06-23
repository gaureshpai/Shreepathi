'use client'
import Link from "next/link";
import Image from "next/image";
import "../public/styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-sidebar">
      <nav className="navbar">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center p-4">
          <a href="/" className="titleb">
            <Image
              src="/logo.png"
              alt="Shreepathi Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            Shreepathi
          </a>
          <div className="buttons-container-main mt-4 sm:mt-0 sm:ml-auto">
            <div className="button-container">
              <a href="https://github.com/shree2307" target="_blank" rel="noopener noreferrer" className="buttons" title="GitHub">
                <img src="github.png" alt="github" />
              </a>
            </div>
            <div className="button-container">
              <a href="https://linkedin.com/in/shreepathi7" target="_blank" rel="noopener noreferrer" className="buttons" title="LinkedIn">
                <img src="linkedin.png" alt="linkedin" />
              </a>
            </div>
            <div className="button-container">
              <a href="https://www.instagram.com/mr_shree__acharya_/" target="_blank" rel="noopener noreferrer" className="buttons" title="Instagram">
                <img src="insta.png" alt="instagram" />
              </a>
            </div>
            <div className="button-container">
              <a href="tel:+919686310381" className="buttons" title="Phone">
                <img src="call.png" alt="phone" />
              </a>
            </div>
            <div className="button-container">
              <a href="Mailto:shreepathishree7@gmail.com" target="_blank" rel="noopener noreferrer" className="buttons" title="Mailto">
                <img src="/mailto.png" alt="mailto" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <aside className="sidebar">
        <ul>
          <li><a href="#about" title="About"><img src="/about.png" alt="about" className="" /></a></li>
          <li><a href="#education" title="Education"><img src="/education.png" alt="education" className="" /></a></li>
          <li><a href="#certificates" title="Certificates"><img src="/cert.png" alt="certificates" className="" /></a></li>
          <li><a href="#skills" title="Skills"><img src="/skills.png" alt="skills" className="" /></a></li>
          <li><a href="#contact" title="Contact"><img src="/contact.png" alt="contact" className="" /></a></li>
        </ul>
      </aside>
    </div>
  );
}
