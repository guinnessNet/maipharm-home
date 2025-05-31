import React, { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import { EachRow } from "../lib/readXlsx";
import ProductDataContext from "../context/Product";
import Camera from "./Camera";
import { getChoseong } from 'es-hangul';
import useStore from "../store/itemsStore";

interface SearchBarProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  barcodeHeader:string;
  productNameHeader:string;
  stockHeader:string;
  priceHeader:string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchString,
  setSearchString,
  barcodeHeader,
  productNameHeader,
  stockHeader,
  priceHeader,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<EachRow[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // const { addItems } = React.useContext(ItemsContext)
  const { addItems } = useStore();

  useEffect(()=>{
    console.log("selectedIndex", selectedIndex)
  },[selectedIndex])


  useEffect(()=>{
    if (!isNaN(Number(searchString))) {
      setIsModalOpen(false);
      return;
    }
    if(searchString.length > 1){
      setIsModalOpen(true);
      handleSearch();
    } else{
      setIsModalOpen(false);
    }
  },[searchString])
  const { productData } = React.useContext(ProductDataContext)

  const handleSearch = () => {
    // 예시: 검색 결과를 하드코딩하거나 실제 데이터로 대체
    const results = productData.filter((item) => {
      // 조건 1: 검색어가 상품명에 포함되어 있는지 확인
      const matchesProductName = item[productNameHeader]
        ?.toString()
        .toLowerCase()
        .includes(searchString.toLowerCase());
  
      // 조건 2: 검색어가 바코드에 포함되어 있는지 확인
      const matchesChoseong = item[productNameHeader] && 
      getChoseong(item[productNameHeader]?.toString())
      .includes(searchString.toLowerCase())

        const matchesBarcode = item[barcodeHeader]
        ?.toString()
        .toLowerCase()
        .includes(searchString.toLowerCase());
  
      // 두 조건 중 하나라도 만족하면 true 반환
      return matchesProductName ||matchesChoseong|| matchesBarcode;
    });
    setSearchResults(results);
    // setIsModalOpen(true);
  };

  const handleSelect = (result: EachRow) => {
    addItems(result);
    // setItems(item: result, amount: 1, discount: 0); // 선택한 값을 items에 추가
    // setProductList((prev) => [...prev, result]); // 선택한 값을 productList에 추가
    // setSearchString(result); // 선택한 값을 입력란에 반영
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.nativeEvent.isComposing) {
      return; // IME 활성화 중에는 이벤트를 무시
    }
    if (!isNaN(Number(e.key))) {
      return; // 숫자가 입력되고 있을 때는 이벤트를 무시
    }  

    // e.preventDefault();
    e.isPropagationStopped();
    if (e.key === "Enter") {
      if(searchResults.length === 0){
        alert("검색 결과가 없습니다.");
        setSearchString("");
        setIsModalOpen(false);
        return;
      }
      handleSelect(searchResults[selectedIndex]); // 선택된 인덱스의 결과 선택
      // inputRef.current?.blur();
      inputRef.current?.focus();
      setSearchString("");
      setIsModalOpen(false);
      setSelectedIndex(0);
    }else if (e.key === "Escape") {
      setSearchString("");
      setIsModalOpen(false);
      inputRef.current?.blur();
      setSelectedIndex(0);
    }else if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => {
        const newIndex = Math.min(prev + 1, searchResults.length - 1);
        console.log("ArrowDown - newIndex:", newIndex); // 상태 업데이트 후 로그 출력
        return newIndex;
      });
    }else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    }
  }

  return (
    <>
    
    <div className="flex items-center mb-4 w-full justify-center">
      <input
        type="text"
        ref = {inputRef}
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-md p-2 w-1/2"
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown} // Enter 키 이벤트 리스너 추가
        value={searchString}
      />
      <button
        className="bg-blue-500 text-white rounded-md p-2 ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
      <Camera setSearchString={setSearchString}/>
    </div>
    <SearchModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      searchResults={searchResults}
      onSelect={handleSelect}
      barcodeHeader={  barcodeHeader}
      productNameHeader={  productNameHeader}
      stockHeader={  stockHeader}
      priceHeader={  priceHeader}
      selectedIndex={selectedIndex}
    />
    </>
  );
};

export default SearchBar;