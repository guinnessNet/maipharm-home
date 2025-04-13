import { create } from 'zustand'
// import { EachRow } from '../lib/readXlsx';


interface HeaderStore{
  barcodeHeader:string;
  setBarcodeHeader: (header:string) => void;
  productNameHeader:string;
  setProductNameHeader: (header:string) => void;
  stockHeader:string;
  setStockHeader: (header:string) => void;
  priceHeader:string;
  setPriceHeader: (header:string) => void;
  purchasePriceHeader:string;
  setPurchasePriceHeader: (header:string) => void;
}

const useHeaderStore = create<HeaderStore>((set) => ({
  barcodeHeader: '바코드',
  setBarcodeHeader: (header) => set({ barcodeHeader: header }),
  productNameHeader: '상품명',
  setProductNameHeader: (header) => set({ productNameHeader: header }),
  stockHeader: '현재고수량',
  setStockHeader: (header) => set({ stockHeader: header }),
  priceHeader: '판매가',
  setPriceHeader: (header) => set({ priceHeader: header }),
  purchasePriceHeader: '매입가',
  setPurchasePriceHeader: (header) => set({ purchasePriceHeader: header }),
}))


export default useHeaderStore;