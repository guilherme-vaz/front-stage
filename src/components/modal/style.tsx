import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: fadeIn 0.3s forwards;

    @keyframes fadeIn {
        to { opacity: 1; }
    }
`;

export const ModalContent = styled.div`
    background: #fff;
    width: 90%;
    max-width: 500px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    transform: scale(0.9);
    animation: scaleUp 0.3s forwards;

    @keyframes scaleUp {
        to { transform: scale(1); }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #ff5a5f;
    }
`;
