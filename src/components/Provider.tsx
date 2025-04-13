import React, { ReactNode, useState } from 'react';
import { EachRow } from '../lib/readXlsx';
import ProductDataContext from '../context/Product';
// Provider 컴포넌트
export const ProductProvider = ({ children }:{children:ReactNode}) => {
  const [productData, setProductData] = useState<EachRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]); // 헤더 상태 추가

  return (
    <ProductDataContext.Provider value={{ productData, setProductData,headers, setHeaders }}>
      {children}
    </ProductDataContext.Provider>
  );
};
