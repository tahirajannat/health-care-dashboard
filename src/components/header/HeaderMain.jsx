import React from 'react'
import MainMenu from './MainMenu'
import { GoHome } from "react-icons/go";
import {
  FiMessageSquare,
  FiMoreVertical,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdCreditCard } from "react-icons/md";
import HeaderRight from './HeaderRight';
import HeaderLogo from './HeaderLogo';

export default function HeaderMain() {
  return (
    <div class="container mx-auto my-4">
      <nav class="bg-white rounded-full">
        <div class="grid grid-cols-12 h-[4.5rem] items-center rounded-full px-4 sm:px-6 lg:px-8">
            <div class="col-span-3 flex items-center text-left justify-start">
             <HeaderLogo/>
            </div>
            <div class="col-span-5 hidden md:block">
             <MainMenu/>
            </div>
            <div class="col-span-4 text-right hidden md:block">
             <HeaderRight/>
             </div>
          </div>
      </nav>
    </div>
  )
}

