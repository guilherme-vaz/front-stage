import styled from 'styled-components';

export const AreaListWrapper = styled.div`
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;

export const AreaContainer = styled.div`
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const AreaTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #007bff;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid #007bff;
`;

export const ProcessContainer = styled.div`
    background-color: #f1f1f1;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
`;

export const ProcessTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
`;

export const SubProcessContainer = styled.div`
    margin-top: 10px;
    padding-left: 20px;
`;

export const SubProcessTitle = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #666;
`;

export const DetailsContainer = styled.div`
    font-size: 0.9rem;
    color: #666;
    margin-top: 10px;
`;

export const InfoTitle = styled.p`
    font-weight: 600;
    color: #444;
`;

export const List = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const SmallButton = styled(Button)`
    padding: 6px 8px;
    font-size: 0.9rem;
    font-weight: bold;
    background-color: #28a745;

    &:hover {
        background-color: #218838;
    }
`;