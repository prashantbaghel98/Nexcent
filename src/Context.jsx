import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
    console.log('Close');
  };

  const onOpen = () => {
    setShowModal(true);
    console.log('Open');
  };

  return (
    <ModalContext.Provider value={{ showModal, onClose, onOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
