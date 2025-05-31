import { create } from 'zustand'
import { EachRow } from '../lib/readXlsx';

export interface CartItem {
  item: EachRow,
  amount: number,
  discount:number
}

interface ItemsStore{
  cart : CartItem[];
  addItems: (item: EachRow) => void;
  removeItems: (item: EachRow) => void;
  changeAmountOfItems : (item: EachRow, amount:number) => void;
  changeDiscountOfItems : (item: EachRow, discount:number) => void;
  totalDiscount: number; // 전체 가격에서 할인을 때릴때
  setTotalDiscount: (discount: number) => void; // 헤더 설정 함수 추가
}

const useItemsStore = create<ItemsStore>((set) => ({
  cart: [],
  addItems: (item) => set((state) => {
    // 중복 항목 확인
    const isDuplicate = state.cart.some((cartItem) => cartItem.item === item);

    if (isDuplicate) {
      console.warn('이미 장바구니에 추가된 항목입니다:', item);
      // 중복된 항목이 있을 경우, 해당 항목의 수량을 증가시킵니다.
      const updatedItems = state.cart.map((cartItem) => {
        if (cartItem.item === item) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { cart: updatedItems };     
      // return state; // 기존 상태를 그대로 반환
    }

    // 새로운 항목 추가
    return {
      cart: [...state.cart, { item, amount: 1, discount: 0 }],
    };
  }),
  removeItems: (item) => set((state) => ({ cart: state.cart.filter((i) => i.item !== item) })),
  changeAmountOfItems: (item, amount) => set((start)=>{
    const index = start.cart.findIndex((i) => i.item === item);
    if (index !== -1) {
      const updatedItems = [...start.cart];
      updatedItems[index].amount = amount;
      return { cart: updatedItems };
    }
    return start;
  }),
  changeDiscountOfItems: (item, discount) => set((start)=>{
    const index = start.cart.findIndex((i) => i.item === item);
    if (index !== -1) {
      const updatedItems = [...start.cart];
      updatedItems[index].discount = discount;
      return { cart: updatedItems };
    }
    return start;
  }),
  totalDiscount: 0,
  setTotalDiscount: (discount) => set(() => ({ totalDiscount: discount })),
}))


export default useItemsStore;