import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import data from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modalRoot');

export default function Modal({ onClose, pic }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        return onClose();
      }
    };

    const handleClickAway = e => {
      if (e.target.className.includes('Modal_overlay')) {
        return onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickAway);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickAway);
    };
  });

  return createPortal(
    <div className={data.overlay}>
      <div className={data.modal}>
        <img src={pic} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pic: PropTypes.string.isRequired,
};
