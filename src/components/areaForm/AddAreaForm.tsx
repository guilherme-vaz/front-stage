import React, { useState } from 'react';
import * as C from './style'

interface AddAreaFormProps {
    onAddArea: (areaName: string) => void;
}

const AddAreaForm: React.FC<AddAreaFormProps> = ({ onAddArea }) => {
    const [areaName, setAreaName] = useState('');

    const handleAdd = () => {
        if (areaName.trim()) {
            onAddArea(areaName);
            setAreaName(''); 
        }
    };

    return (
        <C.FormContainer>
            <C.Title>Adicionar Nova Área</C.Title>
            <C.Input
                type="text"
                value={areaName}
                onChange={(e) => setAreaName(e.target.value)}
                placeholder="Nome da Área"
            />
            <C.Button onClick={handleAdd}>Adicionar</C.Button>
        </C.FormContainer>
    );
};

export default AddAreaForm;
