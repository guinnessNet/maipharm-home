import React, { useState } from "react";
import Modal from "./Modal";

interface HeadersProps {
  barcodeHeader: string;
  productNameHeader: string;
  stockHeader: string;
  priceHeader: string;
  setBarcodeHeader: React.Dispatch<React.SetStateAction<string>>;
  setProductNameHeader: React.Dispatch<React.SetStateAction<string>>;
  setStockHeader: React.Dispatch<React.SetStateAction<string>>;
  setPriceHeader: React.Dispatch<React.SetStateAction<string>>;
  headers: string[];
}

const Headers: React.FunctionComponent<HeadersProps> = ({
  barcodeHeader,
  productNameHeader,
  stockHeader,
  priceHeader,
  setBarcodeHeader,
  setProductNameHeader,
  setStockHeader,
  setPriceHeader,
  headers
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState<"barcode" | "productName" | "stock" | "price" | null>(null);

  const openModal = (field: "barcode" | "productName" | "stock" | "price") => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleSelect = (header: string) => {
    if (currentField === "barcode") setBarcodeHeader(header);
    if (currentField === "productName") setProductNameHeader(header);
    if (currentField === "stock") setStockHeader(header);
    if (currentField === "price") setPriceHeader(header);
  };

  return (
    <div className="flex flex-row gap-4 w-full bg-gray-100 p-4 rounded-md shadow-md">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        headers={headers}
        onSelect={handleSelect}
      />
      <div
        className="w-5/12 text-center font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
        onClick={() => openModal("productName")}
      >
        <span>상품명</span>
      </div>
      <div
        className="flex-1 text-center font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
        onClick={() => openModal("stock")}
      >
        <span>수량</span>
      </div>
      <div
        className="flex-1 text-center font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
        onClick={() => openModal("price")}
      >
        <span>판매가</span>
      </div>
      <div className="flex-1 text-center font-semibold text-gray-700 p-2 rounded-md">
        <span>Total</span>
      </div>
    </div>
  );
};

export default Headers;