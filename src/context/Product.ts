import React from "react";
import { EachRow } from "../lib/readXlsx";

const ProductDataContext = React.createContext<{
  productData: EachRow[];
  setProductData: (data: EachRow[]) => void;
  headers: string[]; // 헤더 추가
  setHeaders: (headers: string[]) => void; // 헤더 설정 함수 추가
}>({
  productData: [],
  setProductData: () => {},
  headers: [],
  setHeaders: () => {},
});

export default ProductDataContext;