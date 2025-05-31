import React, { useEffect, useState } from 'react';
import AmountBtn from './AmountBtn';
import { RiDeleteBin2Line } from 'react-icons/ri';
import useItemsStore, { CartItem } from '../store/itemsStore';
import AmountModal from './AmountModal';
import PriceModal from './PriceModal';

interface SalesProductLineProps {
  cartItem: CartItem;
  index: number;
  // setTotalPrice: React.Dispatch<React.SetStateAction<number[]>>;
  // setProductList: React.Dispatch<React.SetStateAction<EachRow[]>>;
}


//TODO: CSS 정리 
const SalesProductLine: React.FC<SalesProductLineProps> = ({ cartItem, index}) => {
  // const [amount, setAmount] = useState<number>(1);
  const [showAmountModal, setShowAmountModal] = useState<boolean>(false);
  const [showPriceModal, setShowPriceModal] = useState<boolean>(false);
  const [onDelete, setOnDelete] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | null>(null); // 드래그 시작 위치 저장
  const [dragged, setDragged] = useState<boolean>(false); // 드래그 여부 확인
  const [isDiscount, setIsDiscount] = useState<boolean>(false);

  const {changeAmountOfItems ,removeItems} = useItemsStore();
  // useEffect(() => {
  //   setTotalPrice((prev) => {
  //     const newTotalPrice = [...prev];
  //     newTotalPrice[index] = amount * (item['판매가'] as number);
  //     return newTotalPrice;
  //   });
  // }, [amount]);

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX); // 드래그 시작 위치 저장
    setDragged(false); // 드래그 초기화
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX !== null) {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const distance = clientX - startX;

      if (distance < -50) {
        setOnDelete(true); // 50px 이상 왼쪽으로 드래그하면 onDelete 활성화
        setDragged(true);
      } else {
        setOnDelete(false); // 50px 미만이면 onDelete 비활성화
      }
    }
  };

  const amountIncrease = () => {
    changeAmountOfItems(cartItem.item, cartItem.amount + 1);
  }
  const amountDecrease = () => {
    if (cartItem.amount > 1) {
      changeAmountOfItems(cartItem.item, cartItem.amount - 1);
    }
  }
  const handleDragEnd = () => {
    if(onDelete){
      removeItems(cartItem.item); // 드래그 종료 시 onDelete가 활성화되면 아이템 삭제
    }
    setStartX(null); // 드래그 시작 위치 초기화
    setOnDelete(false); // onDelete 초기화
    setDragged(false); // 드래그 상태 초기화
  };

  return (
    <>
    {showAmountModal && (<AmountModal cartItem={cartItem} setShowAmountModal={setShowAmountModal}/>)}
    {showPriceModal && (<PriceModal cartItem={cartItem} setShowPriceModal={setShowPriceModal}/>)}
    <div
      className={`relative p-4 bg-white shadow-lg rounded-lg mb-4 transform transition-transform duration-300 ${
      onDelete ? '-translate-x-16' : ''
      }`}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="flex items-center justify-between select-none">
        <span className="w-1/12 font-bold text-gray-700 text-center">{index + 1}</span>
        <div className="w-4/12 text-gray-800 font-medium truncate flex flex-row items-center">
          <span className="truncate">{cartItem.item['상품명'] as string}</span>
        </div>
        <div className="flex items-center space-x-2 w-3/12">
          <AmountBtn action="plus" func={amountIncrease} />
          <span className="text-gray-700 font-semibold w-8 text-center"  onClick={()=>{setShowAmountModal(true)}}>{cartItem.amount}</span>
          <AmountBtn action="minus" func={amountDecrease} />
        </div>
        <div className="w-2/12 text-gray-700 text-right"
          onClick={() => {
            setShowPriceModal(true);}}
          >
          {(cartItem.discount>0) && (
            <div className="line-through text-gray-500 mr-2">
              {(cartItem.item['판매가'] as number)?.toLocaleString()}원
            </div>
          )}
          {(cartItem.item['판매가'] as number - cartItem.discount)?.toLocaleString()}원
        </div>
        <div className="w-2/12 text-gray-800 font-bold text-right">
          {(cartItem.amount * (cartItem.item['판매가'] as number - cartItem.discount)).toLocaleString()}원
        </div>
        <RiDeleteBin2Line
          size={25}
          className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-200"
          onClick={() => {
          removeItems(cartItem.item);
          }}
        />
      </div>
      {onDelete && (
      <div className="absolute top-0 left-0 w-full h-full bg-red-600 text-white flex items-center justify-center rounded-lg shadow-md">
        <span className="font-bold text-lg">삭제 중...</span>
      </div>
      )}
    </div>
    </>
  );
};

export default SalesProductLine;