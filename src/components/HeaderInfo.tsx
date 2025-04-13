import React from 'react'
import Modal from './Modal';
import ProductDataContext from '../context/Product';
import useHeaderStore from '../store/headerStore';

interface HeaderInfoProps {
  title: "바코드"|"제품명"|"현재고수량"|"판매가"|"매입가";
  selectedHeader: string;

}

const HeaderInfo = ({title, selectedHeader}:HeaderInfoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { headers } = React.useContext(ProductDataContext)
  const { setBarcodeHeader, setProductNameHeader, setStockHeader, setPriceHeader, setPurchasePriceHeader} = useHeaderStore();

  const handleHeaderChange = (header: string) => {
    switch (title) {
      case "바코드":
        setBarcodeHeader(header);
        break;
      case "제품명":
        setProductNameHeader(header);
        break;
      case "현재고수량":
        setStockHeader(header);
        break;
      case "판매가":
        setPriceHeader(header);
        break;
      case "매입가":
        setPurchasePriceHeader(header);
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} headers={headers} onSelect={handleHeaderChange} />
      <div className="text-center font-bold text-gray-800 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition duration-200">
      <span className="text-lg">{title}</span>
      </div>
      <div className="w-full text-center font-medium text-gray-600 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition duration-200"
      onClick={()=>setIsOpen(true)}>
        <span className="text-base">{selectedHeader}</span>
      </div>
    </div>
  )
}

export default HeaderInfo