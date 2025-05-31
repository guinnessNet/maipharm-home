import React from 'react'
// import readXlsx, {ProductDataContext} from '../lib/readXlsx'
import { useNavigate } from 'react-router-dom'
import ProductDataContext from '../context/Product'
import readXlsx from '../lib/readXlsx'
import useHeaderStore from '../store/headerStore'
import HeaderInfo from '../components/HeaderInfo'

function Upload() {
  const { productData, setProductData, setHeaders } = React.useContext(ProductDataContext)
  const [localHeaders, setLocalHeaders] = React.useState<string[]>([])
  // const [uploaded, setUploaded] = useState(false)
  // const [fileContent, setFileContent] = useState<ArrayBuffer | null>(null)
  // const [isCachedData, setIsCachedData] = useState(false);
  const navigate = useNavigate()

  const {barcodeHeader, productNameHeader, stockHeader, priceHeader, purchasePriceHeader} = useHeaderStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const content = e.target?.result as ArrayBuffer
        // setFileContent(content) // React 상태에 저장
        console.log('파일 내용:', content)
        // readXlsx 함수 호출
        try {
          const result = await readXlsx(content)
          console.log('readXlsx 결과:', result)
          setProductData(result.data) // 상태에 저장
          setHeaders(result.headers) // 헤더도 상태에 저장
          setLocalHeaders(result.headers) // 헤더도 상태에 저장
          localStorage.setItem('uploadedFile', JSON.stringify(result.data)) // 로컬 스토리지에 캐싱
          localStorage.setItem('headers', JSON.stringify(result.headers)) // 헤더도 로컬 스토리지에 캐싱
          // 필요에 따라 결과를 상태로 저장하거나 추가 작업 수행
        } catch (error) {
          console.error('readXlsx 처리 중 오류:', error)
        }
      }
      reader.readAsArrayBuffer(file) // 파일 내용을 텍스트로 읽음
      navigate('/pos')
    }
  }

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
        setLocalHeaders(JSON.parse(headers)) // 로컬 스토리지에서 불러온 헤더
      }
      window.alert('로컬 스토리지에서 파일을 불러왔습니다.')
      navigate('/pos')
      // window.location.href = '/home'
      // window.location.href = '/'
      // console.log('@@@',cachedData)
      // cachedData = content
      // setFileContent(arrayBuffer)
    } else{
      window.alert('로컬 스토리지에 저장된 파일이 없습니다.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">파일 업로드 및 캐싱</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      />
      <button
        onClick={loadCachedFile}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        로컬스토리지 불러오기
      </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-6">
        <HeaderInfo title={"바코드"} selectedHeader={barcodeHeader}/>
        <HeaderInfo title={"제품명"} selectedHeader={productNameHeader}/>
        <HeaderInfo title={"현재고수량"} selectedHeader={stockHeader}/>
        <HeaderInfo title={"판매가"} selectedHeader={priceHeader}/>
        <HeaderInfo title={"매입가"} selectedHeader={purchasePriceHeader}/>
        </div>
      <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">파일 내용:</h2>
      {productData ? (
        productData.map((row, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-2 last:border-none"
        >
          {Object.entries(row).map(([key, value]) => (
          <div key={key} className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">{key}:</span> {value?.toString()}
          </div>
          ))}
        </div>
        ))
      ) : (
        <p className="text-gray-500">파일을 업로드하거나 캐싱된 파일을 불러오세요.</p>
      )}
      </div>
    </div>
  )
}


export default Upload