import { useState, useCallback } from "react";

type TModalHook = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModal = (): TModalHook => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
