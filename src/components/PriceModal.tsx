import React, { useEffect, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import useItemsStore, { CartItem } from '../store/itemsStore';
import { IoCloseOutline } from 'react-icons/io5';

interface AmountModalProps {
  cartItem: CartItem;
  setShowPriceModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AmountModal: React.FC<AmountModalProps> = ({ cartItem, setShowPriceModal }) => {
  const [inputNumber, setInputNumber] = useState<string>("0");
  const [isInitialInput, setIsInitialInput] = useState(true);


  const { changeDiscountOfItems } = useItemsStore();

  const handleKeyPress = (key: string) => {
    if (inputNumber.length < 5) {
      if (isInitialInput) {
        setInputNumber(key);
        setIsInitialInput(false);
      } else {
        setInputNumber((prev) => (prev === "0" ? key : prev + key));
      }
    }
  };

  const handleDelete = () => {
    setInputNumber((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const handleClear = () => {
    setInputNumber("0");
  };

  // const applyDiscount = () => {
  //   const numericAmount = Number(inputNumber);
  //   if (!isNaN(numericAmount)) {
  //     const discountedAmount = numericAmount * 0.7; // 30% discount
  //     setInputNumber(discountedAmount.toFixed(2)); // Keep two decimal places
  //   }
  // };

  // // useEffect(() => {
  // //   changeAmountOfItems(cartItem.item, Number(inputNumber));
  // // }, [inputNumber]);

  const applyPrice = () =>{
    const numericAmount = Number(inputNumber);
    if (!isNaN(numericAmount)) {
      changeDiscountOfItems(cartItem.item, Number(cartItem.item["판매가"]) - numericAmount);
    }
  }
  const applyDiscount = () =>{
    const numericAmount = Number(inputNumber);
    if (!isNaN(numericAmount)) {
      changeDiscountOfItems(cartItem.item, numericAmount);
    }
  }
  const applyDiscountPercent = () =>{
    const numericAmount = Number(inputNumber);
    if (!isNaN(numericAmount)) {
      if(numericAmount > 100){
        alert("100% 이상은 할인할 수 없습니다.");
        return;
      }
      changeDiscountOfItems(cartItem.item, Number(cartItem.item["판매가"]) * (numericAmount / 100));
    }
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowPriceModal(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div
          className="flex justify-end mb-4"
          onClick={() => setShowPriceModal(false)}
        >
          <IoCloseOutline size={30} />
        </div>

        <div className="flex items-center justify-center mb-6">
          <span className="text-2xl font-semibold">{inputNumber}</span>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num.toString())}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 justify-center items-center flex"
          >
            <FaDeleteLeft size={20} />
          </button>
          <button
            onClick={() => handleKeyPress("0")}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            0
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            CLR
          </button>
          <button
            onClick={applyPrice}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 col-span-1"
          >
            적용
          </button>
          <button
            onClick={applyDiscount}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 col-span-1"
          >
            할인
          </button>
          <button
            onClick={applyDiscountPercent}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 col-span-1"
          >
            %할인
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold">원래가격 : {cartItem.item['판매가'] as string}</span>
          <span className="text-2xl font-semibold">최종가격 : {Number(cartItem.item['판매가']) - cartItem.discount}</span>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
