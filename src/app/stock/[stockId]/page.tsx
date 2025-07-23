'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import StockIsland from '@/components/stock/StockIsland';

export default function Stock() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const stockData = {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/2023_Ita%C3%BA_Unibanco_Logo.png",
    name: "Itaú",
    ticker: "ITUB4",
    price: "R$ 34,42",
    valorization: 2.12,
    description:
      "O Itaú Unibanco é um banco brasileiro que oferece uma ampla gama de produtos e serviços financeiros, como contas correntes, cartões de crédito, investimentos, empréstimos, seguros e serviços de câmbio",
    stats: [
      { id: "dy", title: "Dividend Yield (D.Y)", value: "13,2%" },
      { id: "pl", title: "Preço/Lucro (P/L)", value: "8,10" },
      { id: "roe", title: "ROE", value: "19,2%" },
    ],
  };

  return (
    <div className="bg-primaryBackground w-full flex flex-col overflow-x-hidden h-screen">
      <Navbar isExpanded={isExpanded} toggleMenu={toggleMenu} />  
      <main
        style={{
          width: isExpanded ? '83.333333%' : '91.666667%',
          marginLeft: isExpanded ? '16rem' : '7rem', 
          transition: 'all 0.3s',
          padding: '6rem 9rem', 
          marginTop: '4rem',
        }}
      >
        <StockIsland stock={stockData} />
      </main>   
    </div>
  );
}
