import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: #f3f3f3;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 8px 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff;
    }
`;

export const Button = styled.button`
    padding: 10px 16px;
    font-size: 0.9rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
