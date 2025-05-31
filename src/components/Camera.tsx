import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Scanner } from '@yudiel/react-qr-scanner';

interface CameraProps {
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

const Camera:React.FC<CameraProps> = ({setSearchString}) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false); // 카메라 열림 상태
  const [scannedData, setScannedData] = useState<string | null>(null); // 스캔된 데이터

  const handleScan = (data: string) => {
    if (data) {
      setScannedData(data); // 스캔된 데이터를 저장
      setSearchString(data); // 부모 컴포넌트에 스캔된 데이터 전달
      setIsCameraOpen(false); // 스캔 후 카메라 닫기
    }
  };

  const requestCameraPermission = async () => {
    try {
      // 카메라 권한 요청
      await navigator.mediaDevices.getUserMedia({ video: true });
      setIsCameraOpen(true); // 권한 요청 성공 시 카메라 열기
    } catch (error) {
      console.error('카메라 권한 요청 실패:', error);
      alert('카메라 권한이 필요합니다. 브라우저 설정에서 권한을 허용해주세요.');
    }
  };

  return (
    <div className="ml-2">
      {/* 카메라 아이콘 */}
      <FaCamera size={40} onClick={requestCameraPermission} className="cursor-pointer" />

      {/* 카메라 모듈 */}
      {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">QR/Barcode 스캔</h2>
            <Scanner
              onScan={(result) => handleScan(result[0].rawValue)}
              components={{zoom: true}}
              constraints={{ facingMode: 'environment' }} // 후면 카메라 사용
                styles={{container:{width: '300px', height: '300px'} }}
                formats={["aztec","code_128","code_39","code_93","codabar", "databar", "databar_expanded", "databar_limited", "data_matrix", "dx_film_edge", "ean_13", "ean_8", "itf", "maxi_code", "micro_qr_code", "pdf417", "qr_code", "rm_qr_code", "upc_a", "upc_e", "linear_codes", "matrix_codes", "any", "unknown"]} // 지원하는 바코드 포맷
            />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setIsCameraOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 스캔된 데이터 표시 */}
      {scannedData && (
        <div className="mt-4">
          <p className="text-green-500 font-bold">스캔된 데이터: {scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default Camera;