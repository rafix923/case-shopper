import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url, headers) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [varCheck, setVarCheck] = useState(false);
  const [visibleButtonClient, setVisibleButtonClient] = useState(true);
  const [visibleButtonProduct, setVisibleButtonProduct] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [varCheck]);
  return [
    data,
    isLoading,
    error,
    varCheck,
    setVarCheck,
    visibleButtonClient,
    setVisibleButtonClient,
    visibleButtonProduct,
    setVisibleButtonProduct,
  ];
};
