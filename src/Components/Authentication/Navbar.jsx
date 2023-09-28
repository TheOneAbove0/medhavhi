import React from 'react'

export default function Navbar() {
  return (
    <div class="pt-6 px-5 lg:px-10 sticky top-0 bg-white z-50 flex justify-between items-center">
            <div class="w-44">
              <a href="/">
                <img
                  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedhavi-logo.911704b2.png&w=256&q=75"
                  alt="company-logo"
                />
              </a>
            </div>
            <div class="px-5 py-4 shadow rounded-lg flex items-center gap-2 cursor-pointer border border-stroke/[0.01] hover:border-stroke/20 animation">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 22H5c-2 0-3-1-3-3v-8c0-2 1-3 3-3h5v11c0 2 1 3 3 3ZM10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M14 8v5"
                  stroke="#37B76C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18 8v5"
                  stroke="#2BB8D6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 17h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6 13v4"
                  stroke="#EA526F"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 19V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-6c-2 0-3-1-3-3Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Create a School</span>
            </div>
          </div>
  )
}
