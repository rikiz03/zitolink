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
          <div className="flex items-center">
            <span className="flex items-center mr-2">
              <img
                src="https://i.postimg.cc/7LbjzNyh/20220627-131245-0000-removebg-preview.png"
                className="h-15 w-20 p-0"
                alt="Zitolink logo"
              />
            </span>
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

          <div className="flex items-center">
            <div className="absolute top-6 z-50 right-8 md:right-12 flex flex-col mt-3">
              <div className="flex items-center justify-end">
                <img
                  className="w-10 h-10 cursor-pointer"
                  onClick={toggleDropdown}
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  src={socials}
                  alt="User dropdown"
                />
              </div>
              {/* Dropdown menu  */}
              <div
                id="userDropdown"
                className={`${
                  dropdownVisible
                    ? "block transition-all duration-500 fade-in-out"
                    : "hidden"
                } z-10 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Kizito Okeke</div>
                  <div className="font-medium truncate">
                    zitolink19@gmail.com
                  </div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <a
                      href="https://github.com/rikiz03"
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/zitolink?trk=contact-info"
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/kizito234"
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
                <div className="">
                  <a
                    href="https://wa.me/2348119234081"
                    className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Say Hi
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

// <div className="flex flex-col fixed z-50 right-12">
//               <button
//                 type="button"
//                 className="flex mr-3 rounded-full md:mr-0 focus:ring transition duration-150 ease-in-out"
//                 id="user-menu-button"
//                 aria-expanded="false"
//                 onClick={toggleDropdown}
//               >
//                 <span className="sr-only">Open user menu</span>
//                 <img
//                   className="flex w-8 h-8 rounded-full p-1"
//                   src="https://i.postimg.cc/68dW7dH8/social-media-1.png"
//                   alt="Socials/Contacts"
//                 />
//               </button>

//               {/* Dropdown menu */}
//               <div
//                 className={`${
//                   dropdownVisible ? "block" : "hidden"
//                 } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
//                 id="user-dropdown"
//               >
//                 <div className="px-4 pt-3">
//                   <span className="block text-sm text-gray-900 dark:text-white">
//                     Kizito Okeke
//                   </span>
//                   <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
//                     Zitolink19@gmail.com
//                   </span>
//                 </div>
//                 <ul className="py-2" aria-labelledby="user-menu-button">
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       GitHub
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Linkedin
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Whatsapp
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Twitter
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
