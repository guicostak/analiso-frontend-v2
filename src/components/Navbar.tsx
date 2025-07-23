'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTableColumns, faChartLine, faWallet, faChevronLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Logo from './core/Logo';

interface NavbarProps {
  readonly isExpanded: boolean;
  readonly toggleMenu: () => void; 
}

export default function Navbar({ isExpanded, toggleMenu }: NavbarProps) {

  return (
    <> 
      <nav className="bg-secondaryColor h-24 flex items-center pr-10 pl-24 justify-between shadow-md w-full fixed top-0 left-0 z-10">
        <div className='flex flex-row items-center justify-between w-full p-10'>
          <Logo />
          <SearchBar />
        </div>
      </nav>

      <nav
        className={`fixed top-24 pb-28 left-0 h-full justify-between flex flex-col bg-secondaryColor text-white shadow-lg transition-all duration-300 ${isExpanded ? 'w-64' : 'w-24'} z-0`}
      >
        <ul className="space-y-4">
          <button onClick={toggleMenu} className="pl-10 mb-4 py-4 focus:outline-none">
            <FontAwesomeIcon 
              icon={isExpanded ? faChevronLeft : faBars} 
              className="text-primaryColor" 
            />
          </button>
          <li>
            <Link className="flex items-center pl-10 p-2 hover:bg-gray-700 rounded-md transition" href="/dashboard">
              <FontAwesomeIcon icon={faTableColumns} />
              {isExpanded && <span className="ml-4 font-bold">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link className="flex items-center pl-10 p-2 hover:bg-gray-700 rounded-md transition" href="/stocks">
              <FontAwesomeIcon icon={faChartLine} />
              {isExpanded && <span className="ml-4 font-bold">Ações</span>}
            </Link>
          </li>
          <li>
            <Link className="flex items-center pl-10 p-2 hover:bg-gray-700 rounded-md transition" href="/settings">
              <FontAwesomeIcon icon={faWallet} />
              {isExpanded && <span className="ml-4 font-bold">Porfólio</span>}
            </Link>
          </li>
        </ul>

        <button className="flex items-center pl-10 p-2 hover:bg-errorColorHover rounded-md transition w-full">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-errorColor" />
          {isExpanded && <span className="ml-4 font-bold text-errorColor">Sair</span>}
        </button>
      </nav>
    </>
  );
}
