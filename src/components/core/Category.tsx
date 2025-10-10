'use client';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CategoryProps {
  readonly categoryLabel: string;
  readonly categoryIcon: IconProp;
  readonly categoryColor: string;
}

export default function Category({
  categoryLabel,
  categoryIcon,
  categoryColor,
}: CategoryProps) {
  return (
    <div className="flex flex-row items-center gap-2" style={{ color: categoryColor }}>
      <FontAwesomeIcon icon={categoryIcon} className="text-sm" />
      <span className="text-sm font-medium">{categoryLabel}</span>
    </div>
  );
}
