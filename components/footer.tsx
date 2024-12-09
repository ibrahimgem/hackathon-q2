import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/Logo.svg'

export default function Footer() {
    return (
      <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-sm">
            <a href="javascript:void(0)">
              <Image src={logo} alt="logo" className="w-36" />
            </a>
            <div className="mt-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
          </div>
  
          <div className="flex flex-wrap gap-16">
            <div className="min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base">About</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">How it works</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Featured</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Partnership</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Business Relation</a></li>
              </ul>
            </div>
  
            <div className="min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base">Community</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Events</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Blog</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Podcast</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Invite a friend</a></li>
              </ul>
            </div>
  
            <div className="min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base">Socials</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Discord</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Instagram</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Twitter</a></li>
                <li><a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <hr className="mt-10 mb-6 border-gray-300" />
  
        <div className="flex flex-wrap justify-between max-md:flex-col gap-4">
          <p className="text-gray-600 text-sm">©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-6">
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Privacy & Policy</a>
            <a href="javascript:void(0)" className="hover:text-gray-800 text-gray-600 text-sm">Terms & Condition</a>
          </div>
        </div>
      </footer>
    );
  }