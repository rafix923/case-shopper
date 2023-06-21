import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url, headers) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [varCheck, setVarCheck] = useState(false);
  const [visebleButtonClient, setVisibleButtonClient] = useState(true);
  const [AddProductToList, setAddProductToList] = useState([]);
  const [visibleButtonProduct, setVisibleButtonProduct] = useState(true);

  useEffect(() => {
    console.log("Ok!");
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
    visebleButtonClient,
    setVisibleButtonClient,
    AddProductToList,
    setAddProductToList,
    visibleButtonProduct,
    setVisibleButtonProduct,
  ];
};
