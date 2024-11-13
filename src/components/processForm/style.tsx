import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px; /* Maior espaço entre os campos */
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
`;

export const Input = styled.input`
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    color: #333;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
    }

    &::placeholder {
        color: #888;
    }
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
`;

export const InfoText = styled.p`
    font-size: 0.9rem;
    color: #666;
    margin-top: 4px;
    line-height: 1.4;
    font-style: italic;
`;


export const Button = styled.button`
    padding: 14px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0056b3;
        transform: scale(1.05); /* Efeito de foco suave */
    }

    &:active {
        background-color: #004085;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

