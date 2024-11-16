'use client';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="border border-primaryColor rounded-md w-80 px-2 py-1 text-sm"> 
      <FontAwesomeIcon className="text-primaryColor cursor-pointer" icon={faSearch} /> 
      <input 
        className="bg-secondaryColor w-64 ml-3 outline-none text-primaryColor placeholder-primaryColor" 
        placeholder="Buscar ações..." 
        maxLength={32} 
        type="text" 
      />
    </div>
  );
}
