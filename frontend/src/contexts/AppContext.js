import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <AppContext.Provider
      value={{
        selectedClient,
        setSelectedClient,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
