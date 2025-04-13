import React, { useEffect, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import useItemsStore, { CartItem } from '../store/itemsStore';
import { IoCloseOutline } from 'react-icons/io5';

interface AmountModalProps {
  cartItem: CartItem;
  setShowAmountModal: React.Dispatch<React.SetStateAction<boolean>>;
  // initialAmount: number;
  // onClose: () => void;
  // onSave: (amount: number) => void;
}

const AmountModal: React.FC<AmountModalProps> = ({cartItem, setShowAmountModal}) => {
  const [amount, setAmount] = useState(cartItem.amount.toString());
  const [isInitialInput, setIsInitialInput] = useState(true);

  const {changeAmountOfItems} = useItemsStore();

  const handleKeyPress = (key: string) => {
    if (amount.length < 5) {
      if(isInitialInput){
        setAmount(key);
        setIsInitialInput(false);
      }else{
        setAmount((prev) => (prev === "0" ? key : prev + key));
      }
    }
  };

  const handleDelete = () => {
    setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const handleClear = () => {
    setAmount("0");
  };

  useEffect(() => {
    changeAmountOfItems(cartItem.item, Number(amount));
  }, [amount]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    // 이벤트가 바깥쪽 div에서 발생했을 때만 모달 닫기
    if (e.target === e.currentTarget) {
      setShowAmountModal(false);
    }
  };
  // const handleSave = () => onSave(Number(amount));

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center"
      onClick={handleClose} // 바깥쪽 div 클릭 이벤트 처리
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className='flex justify-end mb-4'
          onClick={() => setShowAmountModal(false)} // 모달 닫기
        >
          <IoCloseOutline size={30}/>
        </div>
        {/* <h2 className="text-lg font-bold mb-4">수량 수정</h2> */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-2xl font-semibold">{amount}</span>
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
            <FaDeleteLeft size={20}/>
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
        </div>
        {/* <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            취소
          </button>
          </div> */}
          {/* <button
            // onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            저장
          </button> */}
      </div>
    </div>
  );
};

export default AmountModal;