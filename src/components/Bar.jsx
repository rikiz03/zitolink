import React, { useState } from "react";
import { Link } from "react-scroll";
import socials from "../../assets/socials.png";

export default function Bar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="">
      <nav className="bg-transparent absolute top-0 left-0 right-0 z-10">
        <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center">
            <span className="flex items-center mr-2">
              <img
                src="https://i.postimg.cc/7LbjzNyh/20220627-131245-0000-removebg-preview.png"
                className="h-15 w-20 p-0"
                alt="Zitolink logo"
              />
            </span>

            {/* Desktop Navigation Links */}
            <div className="md:justify-between hidden w-full md:flex md:w-auto md:order-1 md:ml-4">
              <ul className="flex flex-col font-bold p-4 md:p-0 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-sm">
                <li>
                  <Link
                    className="cursor-pointer block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0"
                    aria-current="page"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    ABOUT ME
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer block py-2 pl-3 pr-4 text-white rounded md:p-0"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                  >
                    EXPERIENCE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials Dropdown Trigger */}
          <div className="flex items-center">
            <div className="absolute top-6 z-50 right-8 md:right-12 flex flex-col mt-3">
              <div className="flex items-center justify-end">
                <img
                  className="w-10 h-10 md:w-9 md:h-9 cursor-pointer"
                  onClick={toggleDropdown}
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  src={socials}
                  alt="User dropdown"
                />
              </div>

              {/* Dropdown Menu - Fixed & Working */}
              <div
                id="userDropdown"
                className={`${
                  dropdownVisible
                    ? "block opacity-100 visible translate-y-0"
                    : "hidden opacity-0 invisible -translate-y-2"
                } z-10 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-200 ease-in-out origin-top-right`}
              >
                {/* User Info */}
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div className="font-semibold">Kizito Okeke</div>
                  <div className="truncate text-xs text-gray-500 dark:text-gray-400">
                    zitolink19@gmail.com
                  </div>
                </div>

                {/* Links */}
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  {/* GitHub */}
                  <li>
                    <a
                      href="https://github.com/rikiz03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150"
                    >
                      Github
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li>
                    <a
                      href="https://linkedin.com/in/zitolink?trk=contact-info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150"
                    >
                      Linkedin
                    </a>
                  </li>

                  {/* Twitter */}
                  <li>
                    <a
                      href="https://twitter.com/kizito234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150"
                    >
                      Twitter
                    </a>
                  </li>

                  {/* Say Hi (WhatsApp) - Now Working! */}
                  <li>
                    <a
                      href="https://wa.me/2348119234081" // 🔥 Fixed: No extra spaces
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer block px-4 py-2 font-medium text-green-600 dark:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-green-700 dark:hover:text-green-300 transition-all duration-150"
                    >
                      Say Hi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}