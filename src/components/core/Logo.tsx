'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoMainColor from '@/assets/img/logo_main_color.png'

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 150, height = 40 }: LogoProps) {
  return (
    <Link href="/">
        <Image
          src={logoMainColor}
          alt={"Logo da Analiso em texto azul"}
          width={width}
          height={height}
          priority
          className="object-contain"
        />
    </Link>
  );
}
