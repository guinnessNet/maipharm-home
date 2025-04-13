import React from "react";
import { EachRow } from "../lib/readXlsx";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: EachRow[];
  onSelect: (result: EachRow) => void;
  barcodeHeader:string
  productNameHeader:string
  stockHeader:string
  priceHeader:string
  selectedIndex: number;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  searchResults,
  onSelect,
  barcodeHeader,
  productNameHeader,
  stockHeader,
  priceHeader,
  selectedIndex,
}) => {
  if (!isOpen) return null;
  // console.log(productNameHeader)

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-3/4 fixed z-50">
        <h2 className="text-sm mb-4">검색 결과</h2>
        <ul>
          {searchResults.map((result, index) => {
            return (
            <li
              key={index}
              className={`cursor-pointer p-2 hover:bg-gray-200 text-sm` + (selectedIndex === index ? " bg-gray-500" : "")}
              onClick={() => {
                onSelect(result);
                onClose();
              }}
            >
                <div className="flex justify-between">
                <span className="w-1/12 font-bold">{index + 1}.</span>
                {/* <span className="w-3/12">{result[barcodeHeader] as string}</span> */}
                <span className="w-4/12">{result[productNameHeader] as string}</span>
                <span className="w-2/12">{result[stockHeader]?.toString()}</span>
                <span className="w-2/12">{result[priceHeader]?.toString()}</span>
                </div>
              {/* {result[barcodeHeader] as string} - {result[productNameHeader] as string} - {result[stockHeader]?.toString()} - {result[priceHeader]?.toString()} */}
            </li>
          )})}
        </ul>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    // </div>
  );
};

export default SearchModal;