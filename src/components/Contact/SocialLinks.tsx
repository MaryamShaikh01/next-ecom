import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
     <div className='flex items-center gap-x-3 py-10'>
                <span className='text-sm font-medium text-[var(--text-secondary)]'>Follow us :</span>
                <ul className='flex gap-x-1  '>
                    <li className='bg-[#3B5998] p-3 rounded-lg flex items-center'><Link href="https://www.facebook.com/" target='_blank'><IoLogoFacebook className='text-white bg-[#3B5998] text-2xl' /></Link></li>
                    <li className='bg-[#1DA1F2] p-3 rounded-lg flex items-center'><Link href="https://x.com/" target='_blank'><FaTwitter className='text-white bg-[#1DA1F2] text-2xl' /></Link></li>
                    <li className='bg-[#262626] p-3 rounded-lg flex items-center'><Link href="https://www.instagram.com/" target='_blank'><FaInstagram className='text-white  text-2xl' /></Link></li>
                    <li className='bg-[#0077B5] p-3 rounded-lg flex items-center'><Link href="https://www.linkedin.com/" target='_blank'><FaLinkedin className='text-white  text-2xl' /></Link></li>

                </ul>
            </div>
    </>
  )
}

export default SocialLinks