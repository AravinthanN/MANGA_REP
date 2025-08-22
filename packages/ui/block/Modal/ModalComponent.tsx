'use client';

import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  // Create portal so it's attached to <body> (outside any scroll container)
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-md shadow-xl max-w-2xl w-[90%] md:w-auto p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-lg font-bold hover:text-red-500"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
