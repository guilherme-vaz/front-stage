import React, { useState } from 'react';
import { useAreaContext } from '../../context/AreaContext';
import { ISubProcess } from '../../interfaces/SubProcess';
import * as C from './style';

interface AddSubProcessFormProps {
    areaId: number;
    processId: number;
}

const AddSubProcessForm: React.FC<AddSubProcessFormProps> = ({ areaId, processId }) => {
    const { addSubProcess } = useAreaContext();
    const [subProcessName, setSubProcessName] = useState('');

    const handleAddSubProcess = () => {
        if (subProcessName.trim()) {
            const newSubProcess: ISubProcess = {
                id: 0,
                name: subProcessName,
                details: '',
                tools: [],
                responsible: [],
                documentation: [],
                status: "Active",
                subProcesses: [],
            };
            addSubProcess(areaId, processId, newSubProcess);
            setSubProcessName('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAddSubProcess();
    };

    return (
        <C.FormContainer onSubmit={handleSubmit}>
            <C.Input
                type="text"
                value={subProcessName}
                onChange={(e) => setSubProcessName(e.target.value)}
                placeholder="Nome do Subprocesso"
            />
            <C.Button type="submit">Adicionar Subprocesso</C.Button>
        </C.FormContainer>
    );
};

export default AddSubProcessForm;
