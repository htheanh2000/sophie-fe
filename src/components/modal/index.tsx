import React, { useState } from "react";

interface IModal {
  children?: React.ReactNode;
}

const Modal = ({ children }: IModal) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 

  const handleBackdropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      //   onClose();
    }
  };

  const handleCloseClick = () => {
    // onClose();
  };



  return (
    <>
      <div className={`absolute w-screen h-screen bg-black/50 top-0 left-0 flex items-center justify-center   `} >
          <div className="bg-white rounded-lg ">
                {children}
          </div>
      </div>
    </>
  );
};

export default Modal;
