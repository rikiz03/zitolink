import React from "react";

export default function Experience() {
  return (
    <div className="container grid grid-cols-1 place-content-center my-20">
      <h2 className="font-black mb-10 text-center">EXPERIENCE</h2>
      <div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January, 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Freelance Software Development
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              As a freelance web developer, I typically work on a contract
              basis, and my responsibilies vary depending on the project. Some
              of my tasks include gathering requirements, designing, coding,
              testing, deploying and maintaining websites and web applications.{" "}
            </p>
            <a
              href="github.com/rikiz03"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              My GitHub{" "}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April, 2021 - December, 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Practice projects
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I have built over 11 practice projects, honing practical skills
              and gaining hands-on experience.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September, 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Techfleet
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Tech fleet is a nonprofit from which i am gaining real world
              experience
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
