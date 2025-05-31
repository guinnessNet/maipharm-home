import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Headers from '../components/Headers'
import SalesProductLine from '../components/SalesProductLine'
import ProductDataContext from '../context/Product'
import useItemsStore from '../store/itemsStore'


//TODO: header 지정해둔 헤더로 적용되도록 설정.
//TODO: 헤더 지정에 대한 내용을 로컬스토리지에 저장하도록
const Home = () => {
  const {  setProductData, headers, setHeaders } = React.useContext(ProductDataContext)
  const [searchString, setSearchString] = React.useState<string>('') // 검색창에 입력한 값
  const [barcodeHeader, setBarcodeHeader] = React.useState<string>('바코드') // 헤더변경
  const [productNameHeader, setProductNameHeader] = React.useState<string>('상품명') // 헤더변경
  const [stockHeader, setStockHeader] = React.useState<string>('현재고수량') // 헤더변경
  const [priceHeader, setPriceHeader] = React.useState<string>('판매가') // 헤더변경
  // const [productList, setProductList] = React.useState<EachRow[]>([]) // 엑셀파일에서 읽어온 데이터
  const [totalPrice, setTotalPrice] = React.useState<number>(0) // 총 가격
  const navigate = useNavigate()

  const { cart } = useItemsStore()

  const loadCachedFile = async () => {
    const cachedContent = localStorage.getItem('uploadedFile')
    if (cachedContent) {
      // const content = new TextEncoder().encode(cachedContent).buffer as ArrayBuffer
      // const data = await readXlsx(content)
      const data = JSON.parse(cachedContent) // 로컬 스토리지에서 불러온 데이터
      // console.log('로컬 스토리지에서 불러온 데이터:', data)
      setProductData(data)
      const headers = localStorage.getItem('headers')
      if (headers) {
        setHeaders(JSON.parse(headers)) // 로컬 스토리지에서 불러온 헤더
      }
    } else{
      navigate('/upload')
    }
  }

  useEffect(() => {
    loadCachedFile()
  }, [])

  const isPriceValid = (price: unknown): price is number => {
    return typeof price === 'number' && !isNaN(Number(price));
  };

  useEffect(() => {
    const eachItemsPriceTimesAmount = cart.map((each) => {
      const price = each.item[priceHeader as keyof typeof each.item]
      const amount = each.amount
      const discount = each.discount
      if (isPriceValid(price)) {
        const priceNumber = Number(price)
        const totalPrice = (priceNumber-discount) * amount
        return totalPrice
      } else{
        return 0
      }
    })
    const totalPrice = eachItemsPriceTimesAmount.reduce((acc, curr, index, array) => {
      // console.log("index", index,"acc",acc, "curr", curr, "array", array)
      return acc + curr
    }, 0)

    const totalWonPrice = eachItemsPriceTimesAmount.reduce((acc, curr, index, array) => {
      const wonPrice = cart[index].item["매입가"]
      const amount = cart[index].amount
      if (isPriceValid(wonPrice)) {
        const priceNumber = Number(wonPrice)
        const totalPrice = (priceNumber) * amount
        return acc + totalPrice
      } else{
        return acc + 0
      }
    }, 0)

    console.log("totalWonPrice", totalWonPrice)

    // console.log("totalPRice", totalPrice)

    setTotalPrice(totalPrice?totalPrice:0)
    // console.log('productList', productList)
    }, [cart])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className='flex justify-between items-center mb-6'>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">PharmSquare Simple POS</h1>
          <Link to={'/upload'}>다시업로드</Link>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow mb-6">
          <span className="font-bold text-lg text-gray-700">총 가격</span>
          <span className="text-xl font-semibold text-gray-800">
            {totalPrice.toLocaleString()} 원
          </span>
        </div>
        <div className="mb-6 w-full">
          <SearchBar
            searchString={searchString}
            setSearchString={setSearchString}
            barcodeHeader={barcodeHeader}
            productNameHeader={productNameHeader}
            stockHeader={stockHeader}
            priceHeader={priceHeader}
          />
        </div>


        <div className="mb-6">
          <Headers
            barcodeHeader={barcodeHeader}
            productNameHeader={productNameHeader}
            stockHeader={stockHeader}
            priceHeader={priceHeader}
            setBarcodeHeader={setBarcodeHeader}
            setProductNameHeader={setProductNameHeader}
            setStockHeader={setStockHeader}
            setPriceHeader={setPriceHeader}
            headers={headers}
          />
        </div>


        <div className="mb-6">
          {cart.map((cartItem, index) => (
            <SalesProductLine
              cartItem={cartItem}
              index={index}
              key={index}
              // setTotalPrice={setTotalPrice}
              // setProductList={setProductList}
            />
          ))}
        </div>


      </div>
    </div>
  )
}

export default Home