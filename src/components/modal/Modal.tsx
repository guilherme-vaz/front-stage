import React from 'react';
import * as C from './style'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <C.ModalOverlay>
            <C.ModalContent>
                <C.CloseButton onClick={onClose}>&times;</C.CloseButton>
                {children}
            </C.ModalContent>
        </C.ModalOverlay>
    );
};

export default Modal;
