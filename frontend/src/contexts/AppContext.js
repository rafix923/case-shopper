import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedClient, setSelectClient] = useState(null);
  const [selectedProduct, setSelectProduct] = useState(null);

  return (
    <AppContext.Provider
      value={{
        selectedClient,
        setSelectClient,
        selectedProduct,
        setSelectProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
