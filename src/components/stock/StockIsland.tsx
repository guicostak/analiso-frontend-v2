"use client";

import React from "react";
import Botao from "../core/Botao";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import StockValorization from "./StockValorization";
import Island from "@/components/core/Island";
import StockInfoColumn from "./StockInfoColumn";

interface StockStat {
  id: string;
  title: string;
  value: string;
}

interface StockIslandProps {
  stock: {
    logoUrl: string;
    name: string;
    ticker: string;
    price: string;
    valorization: number;
    description: string;
    stats: StockStat[];
  };
}

const StockIsland: React.FC<StockIslandProps> = ({ stock }) => {
  const { logoUrl, name, ticker, price, valorization, description, stats } =
    stock;

  return (
    <Island className={`h-96 px-12 flex-col`}>
      <header className="flex flex-row items-start justify-start">
        <img alt={`${name} logo`} className="w-16 rounded-xl" src={logoUrl} />
        <div className="flex flex-col">
          <h1 className="font-extrabold text-3xl ml-4">
            {name} ({ticker})
          </h1>
          <div className="flex flex-row mt-2 items-center justify-center">
            <h2 className="font-bold text-2xl ml-4 mr-4">{price}</h2>
            <StockValorization valor={valorization} />
          </div>
        </div>
        <Botao className="bg-primaryColor text-secondaryColor py-1 w-56 ml-8">
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Adicionar ao portfólio
        </Botao>
        <Botao className="bg-secondaryColor border-2 border-primaryColor text-primaryColor py-1 ml-3 relative group">
          <FontAwesomeIcon icon={regularHeart} />
          <span className="absolute top-full left-full transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primaryColor text-secondaryColor text-xs rounded px-2 py-1 w-40">
            Adicionar aos favoritos
          </span>
        </Botao>
      </header>
      <main className="mt-10 flex flex-col gap-8">
        <p>{description}</p>
        <section className="flex flex-row">
          {stats.map((stat) => (
            <StockInfoColumn
              key={stat.id}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </section>
      </main>
    </Island>
  );
};

export default StockIsland;
