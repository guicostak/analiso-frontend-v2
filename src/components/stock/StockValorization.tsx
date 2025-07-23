'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface StockValorizationProps {
  valor: number;
}

const StockValorization: React.FC<StockValorizationProps> = ({ valor }) => {
  const isPositive = valor > 0;
  const color = isPositive ? 'bg-green-500' : 'bg-errorColor';
  const icon = isPositive ? faArrowUp : faArrowDown;

  return (
    <div className={`flex items-center text-xs px-2 w-20 h-6 rounded-lg text-secondaryColor ${color}`}>
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span className="font-semibold">{valor > 0 ? `R$ ${valor.toFixed(2)}` : `R$ ${Math.abs(valor).toFixed(2)}`}</span>
    </div>
  );
};

export default StockValorization;
