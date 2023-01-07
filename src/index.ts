import { useState } from "react";

interface options {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onToggle?: (isOpen: boolean) => void;
}

const useModal = (options?: options) => {
  const [isOpen, setIsOpen] = useState<boolean>(options?.isOpen || false);

  const open = () => {
    options?.onOpen?.();
    setIsOpen(true);
  };

  const close = () => {
    options?.onClose?.();
    setIsOpen(false);
  };

  const toggle = () =>
    setIsOpen((prev) => {
      options?.onToggle?.(!prev);
      return !prev;
    });

  return { isOpen, open, close, toggle };
};

export default useModal;
