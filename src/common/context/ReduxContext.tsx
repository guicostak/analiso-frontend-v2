"use client";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/common/store/store"; 
//import { checkUserSession } from "@/common/store/slices/userSlice"; 

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    //store.dispatch(checkUserSession()); 
  }, []);

  if (!isClient) return null;

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
