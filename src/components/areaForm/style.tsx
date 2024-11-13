import styled from "styled-components";

export const FormContainer = styled.div`
    border-radius: 8px;
    padding: 15px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.h3`
    text-align: center;
    color: #333;
    font-size: 1.5rem;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff;
    }
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;