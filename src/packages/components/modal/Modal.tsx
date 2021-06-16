import React, { useRef, useState, useEffect } from 'react';

import { Portal } from '../portal';
import { ModalProps } from './interfaces';
import { Styled } from './styled';

const scrollDisable = () => {
  document.body.style.overflow = 'hidden';
};

const scrollAllow = () => {
  document.body.style.overflow = 'visible';
};

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  handleModalClose,
  stateClass,
  delay,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  useEffect(() => {
    scrollDisable();

    return () => {
      scrollAllow();
    };
  });

  const isModalTarget = (event: React.MouseEvent) =>
    event.target === modalRef.current ||
    modalRef.current?.contains(event.target as Node);

  const closeModal: React.MouseEventHandler = (event) => {
    if (!isModalTarget(event)) {
      handleModalClose();
    }

    event.stopPropagation();
  };

  const toggleButtonLight: React.MouseEventHandler = (event) => {
    if (!isModalTarget(event)) {
      setIsButtonHighlighted(true);
    } else {
      setIsButtonHighlighted(false);
    }
  };

  return (
    <Portal>
      <Styled.ModalWrapper
        onClick={closeModal}
        onMouseOver={toggleButtonLight}
        className={stateClass}
        delay={delay}
      >
        <Styled.CloseButton colorToggle={isButtonHighlighted}>
          &times;
        </Styled.CloseButton>
        <Styled.Modal
          delay={delay}
          className={`${className} ${stateClass}`}
          ref={modalRef}
        >
          {children}
        </Styled.Modal>
      </Styled.ModalWrapper>
    </Portal>
  );
};
