"use client";

import React, { useState, useMemo } from "react";
import Botao from "../core/Botao";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import StockValorization from "./StockValorization";
import Island from "@/components/core/Island";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

interface Serie {
  key: string;
  name: string;
  color: string;
  dataKey: string;
}

const INDICADORES: Serie[] = [
  { key: "preco", name: "Preço", color: "#3B82F6", dataKey: "preco" },
  { key: "dy", name: "DY", color: "#10B981", dataKey: "dy" },
  { key: "pl", name: "P/L", color: "#F59E0B", dataKey: "pl" },
  { key: "dividendos", name: "Dividendos", color: "#EF4444", dataKey: "dividendos" },
];

const StockIsland: React.FC<StockIslandProps> = ({ stock }) => {
  const { logoUrl, name, ticker, price, valorization } = stock;

  const [periodo, setPeriodo] = useState<"1D" | "1M" | "1A" | "5A">("1M");
  const [series, setSeries] = useState<Serie[]>([INDICADORES[0]]);
  const [chartData, setChartData] = useState<any[]>([
    { dia: "Seg", preco: 110, dy: 3.2, pl: 15, dividendos: 0.5 },
    { dia: "Ter", preco: 115, dy: 3.5, pl: 16, dividendos: 0.6 },
    { dia: "Qua", preco: 117, dy: 3.7, pl: 14, dividendos: 0.4 },
  ]);

  const addSerie = (serie: Serie) => {
    if (series.find((s) => s.key === serie.key)) return;
    setSeries([...series, serie]);

    setChartData((prev) =>
      prev.map((item) => ({
        ...item,
        [serie.dataKey]: item[serie.dataKey] ?? 0,
      }))
    );
  };

  const removeSerie = (key: string) => {
    setSeries(series.filter((s) => s.key !== key));
  };

  const dataPorPeriodo = useMemo(() => {
    switch (periodo) {
      case "1D":
        return [
          { hora: "09:00", preco: 112, dy: 3.1, pl: 14, dividendos: 0.5 },
          { hora: "10:00", preco: 114, dy: 3.2, pl: 15, dividendos: 0.6 },
          { hora: "11:00", preco: 111, dy: 3.0, pl: 14, dividendos: 0.4 },
          { hora: "12:00", preco: 115, dy: 3.3, pl: 16, dividendos: 0.6 },
          { hora: "13:00", preco: 118, dy: 3.4, pl: 17, dividendos: 0.7 },
        ];
      case "1M":
        return [
          { dia: "01/10", preco: 110, dy: 3.2, pl: 15, dividendos: 0.5 },
          { dia: "05/10", preco: 112, dy: 3.3, pl: 15, dividendos: 0.6 },
          { dia: "10/10", preco: 115, dy: 3.5, pl: 16, dividendos: 0.6 },
          { dia: "15/10", preco: 113, dy: 3.4, pl: 15, dividendos: 0.5 },
          { dia: "20/10", preco: 117, dy: 3.6, pl: 16, dividendos: 0.7 },
        ];
      case "1A":
        return [
          { mes: "Jan", preco: 90, dy: 2.8, pl: 13, dividendos: 0.4 },
          { mes: "Mar", preco: 100, dy: 3.0, pl: 14, dividendos: 0.5 },
          { mes: "Mai", preco: 108, dy: 3.2, pl: 15, dividendos: 0.6 },
          { mes: "Jul", preco: 112, dy: 3.3, pl: 15, dividendos: 0.6 },
          { mes: "Set", preco: 120, dy: 3.5, pl: 16, dividendos: 0.7 },
          { mes: "Out", preco: 118, dy: 3.4, pl: 16, dividendos: 0.6 },
        ];
      case "5A":
        return [
          { ano: "2020", preco: 60, dy: 2.5, pl: 12, dividendos: 0.3 },
          { ano: "2021", preco: 85, dy: 2.8, pl: 13, dividendos: 0.4 },
          { ano: "2022", preco: 100, dy: 3.0, pl: 14, dividendos: 0.5 },
          { ano: "2023", preco: 115, dy: 3.3, pl: 15, dividendos: 0.6 },
          { ano: "2024", preco: 130, dy: 3.5, pl: 16, dividendos: 0.7 },
        ];
    }
  }, [periodo]);

  const chaveX = Object.keys(dataPorPeriodo[0])[0];

  React.useEffect(() => {
    setChartData(dataPorPeriodo);
  }, [dataPorPeriodo]);

  return (
    <Island className="h-[550px] px-12 flex-col">
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
        <div className="bg-mainColor p-4 rounded-2xl shadow-inner">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">
              Evolução indicadores ({periodo})
            </h2>

            <div className="flex gap-2">
              {["1D", "1M", "1A", "5A"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriodo(p as any)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    periodo === p
                      ? "bg-primaryColor text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            {INDICADORES.map((ind) => {
              const ativo = !!series.find((s) => s.key === ind.key);
              return (
                <button
                  key={ind.key}
                  onClick={() =>
                    ativo ? removeSerie(ind.key) : addSerie(ind)
                  }
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    ativo
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : `bg-[${ind.color}] text-white hover:opacity-80`
                  }`}
                >
                  {ativo ? `Remover ${ind.name}` : `+ ${ind.name}`}
                </button>
              );
            })}
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey={chaveX} tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                {series.map((s) => (
                  <Line
                    key={s.key}
                    type="monotone"
                    dataKey={s.dataKey}
                    name={s.name}
                    stroke={s.color}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </Island>
  );
};

export default StockIsland;
