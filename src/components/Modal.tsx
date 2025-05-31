import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  headers: string[];
  onSelect: (header: string) => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({ isOpen, onClose, headers, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">헤더 선택</h2>
        <ul>
          {headers.map((header, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => {
                onSelect(header);
                onClose();
              }}
            >
              {header}
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;