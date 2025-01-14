import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-custom1 text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-[50px] text-pink-600 font-serif cursor-pointer">
            KK
          </h1>
        </Link>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          click
            ? "absolute top-0 left-0 w-full h-screen bg-custom1 flex flex-col justify-center items-center md:hidden z-10"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/krisztofer-kerekes-373261144/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Kerekesss"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="https://drive.google.com/file/d/15ISj6XWH5UgVbxrq8DPxJ9fcDgKXV0K0/view?usp=drive_link"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1LhpkT4qO6EEOuMcqvJF5KguSwHdFUiJs/view?usp=sharing"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Social Icons Mobile */}
      <div className="fixed bottom-0 w-full flex xl:hidden justify-center left-0">
        <div className=" xl:flex">
          <ul className="flex">
            <li className="w-[50px] h-[35px] flex    bg-blue-600">
              <a
                href="https://www.linkedin.com/in/krisztofer-kerekes-373261144/"
                target="_blank"
                className="flex justify-center items-center w-full "
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className="w-[50px] h-[35px] flex justify-between items-center   bg-[#333333]">
              <a
                href="https://github.com/Kerekesss"
                target="_blank"
                className="flex justify-center items-center w-full "
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li className="w-[50px] h-[35px] flex justify-between items-center   bg-[#6fc2b0]">
              <a
                href="https://drive.google.com/file/d/15ISj6XWH5UgVbxrq8DPxJ9fcDgKXV0K0/view?usp=drive_link"
                target="_blank"
                className="flex justify-center items-center w-full "
              >
                <HiOutlineMail size={20} />
              </a>
            </li>
            <li className="w-[50px] h-[35px] flex justify-between items-center   bg-[#565f69]">
              <a
                href="https://drive.google.com/file/d/1LhpkT4qO6EEOuMcqvJF5KguSwHdFUiJs/view?usp=sharing"
                target="_blank"
                className="flex justify-center items-center w-full "
              >
                <BsFillPersonLinesFill size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
