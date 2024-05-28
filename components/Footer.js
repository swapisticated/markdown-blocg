import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="pt-32 bg-gray-100">
      <div className="flow ">
        <h1>
          Lets create something together <span>Email me</span>
        </h1>
        <h1>
          Lets create something together <span>Email me</span>
        </h1>
        <h1>
          Lets create something together <span>Email me</span>
        </h1>
      </div>
      <footer class="footer bg-gray-100">
  <div class="container mx-auto px-4 py-8 flex flex-wrap justify-between">
    <div class="w-full md:w-1/2 lg:w-1/3">
      <a href="#" class="text-check-green text-xl font-bold hover:text-check-green-dark">Adios</a>
      <p class="text-gray-500 text-base mt-4">
         Passionate about creating meaningful and impactful experiences. 
      </p>
      <div class="social-links flex space-x-4 mt-4">
        <a href="#" class="text-gray-500 hover:text-gray-700">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
      <h3 class="text-gray-900 text-base font-bold uppercase">Services</h3>
      <ul class="list-none mt-4 space-y-2">
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">Branding</a>
        </li>
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">Web Design</a>
        </li>
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">App Design</a>
        </li>
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">Marketing</a>
        </li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
      <h3 class="text-gray-900 text-base font-bold uppercase">Contact</h3>
      <ul class="list-none mt-4 space-y-2">
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">About Us</a>
        </li>
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">Careers</a>
        </li>
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">Press Center</a>
        </li>
        <li>
          <a href="#" class="text-gray-500 hover:text-gray-700 text-base">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>

</footer>

      <div class="p-2 mt-8 text-center bg-gray-100 text-gray-500 text-base">
        Made with 💛
      </div>
    </footer>
  );
}
