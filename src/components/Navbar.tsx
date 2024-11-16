'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTableColumns, faChartLine, faWallet, faBackward, faChevronLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Logo from './Logo';

interface NavbarProps {
  isOnAuthPage?: boolean;
}

export default function Navbar({ isOnAuthPage = false }: NavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <nav className="bg-secondaryColor h-24 flex items-center pr-10 pl-20 justify-between shadow-md w-full fixed top-0 left-0 z-10">
        <div className='flex flex-row items-center justify-between w-full'>
          <Logo />
          <SearchBar />
        </div>
      </nav>

      <nav
        className={`fixed top-24 pb-28 left-0 h-full justify-between flex flex-col bg-secondaryColor text-white shadow-lg transition-width duration-300 ${isExpanded ? 'w-64' : 'w-16'} z-0`}
      >
        <ul className="space-y-4">
          <button onClick={toggleMenu} className="pl-5 mb-4 py-4 focus:outline-none">
            <FontAwesomeIcon 
              icon={isExpanded ? faChevronLeft : faBars} 
              className="text-primaryColor" 
            />
          </button>
          <li>
            <Link className="flex items-center pl-5 p-2 hover:bg-gray-700 rounded-md transition" href="/dashboard">
              <FontAwesomeIcon icon={faTableColumns} />
              {isExpanded && <span className="ml-4 font-bold">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link className="flex items-center pl-5 p-2 hover:bg-gray-700 rounded-md transition" href="/stocks">
              <FontAwesomeIcon icon={faChartLine} className="text-white" />
              {isExpanded && <span className="ml-4 font-bold">Ações</span>}
            </Link>
          </li>
          <li>
            <Link className="flex items-center pl-5 p-2 hover:bg-gray-700 rounded-md transition" href="/settings">
              <FontAwesomeIcon icon={faWallet} className="text-white" />
              {isExpanded && <span className="ml-4">Porfólio</span>}
            </Link>
          </li>
        </ul>
        <button className="flex items-center pl-5 p-2 hover:bg-errorColor rounded-md transition w-full">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-white" />
          {isExpanded && <span className="ml-4 font-bold">Sair</span>}
        </button>
      </nav>
    </>
  );
}
