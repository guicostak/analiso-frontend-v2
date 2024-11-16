"use client";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/common/store/store"; 

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
