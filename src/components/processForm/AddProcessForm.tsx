import { useState } from 'react';
import { useAreaContext } from '../../context/AreaContext';
import { IProcess } from '../../interfaces/Process';
import * as C from './style'

interface AddProcessFormProps {
    areaId: number;
}

const AddProcessForm: React.FC<AddProcessFormProps> = ({ areaId }) => {
    const { addProcess } = useAreaContext();
    const [processName, setProcessName] = useState('');
    const [details, setDetails] = useState('');
    const [tools, setTools] = useState<string[]>([]);
    const [responsible, setResponsible] = useState<string[]>([]);
    const [documentation, setDocumentation] = useState<string[]>([]);

    const handleAddField = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
        if (value.trim()) {
            setter(prev => [...prev, value]);
        }
    };

    const handleAddProcess = () => {
        if (processName.trim()) {
            const newProcess: IProcess = {
                id: 0,
                name: processName,
                details,
                tools,
                responsible,
                documentation,
                subProcesses: [],
            };
            addProcess(areaId, newProcess);
            setProcessName('');
            setDetails('');
            setTools([]);
            setResponsible([]);
            setDocumentation([]);
        }
    };

    return (
        <C.FormContainer>
            <C.Label>Título do processo</C.Label>
            <C.Input
                type="text"
                value={processName}
                onChange={(e) => setProcessName(e.target.value)}
                placeholder="Nome do Processo"
            />

            <C.FieldContainer>
                <C.Label>Ferramentas utilizadas</C.Label>
                <C.Input
                    type="text"
                    placeholder="Digite a ferramenta e pressione Enter"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddField(setTools, e.currentTarget.value);
                            e.currentTarget.value = '';
                        }
                    }}
                />
                <p>Ferramentas: {tools.join(', ')}</p>
                <C.InfoText>Pressione Enter para adicionar uma ferramenta à lista.</C.InfoText>
            </C.FieldContainer>

            <C.FieldContainer>
                <C.Label>Responsáveis</C.Label>
                <C.Input
                    type="text"
                    placeholder="Digite o responsável e pressione Enter"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddField(setResponsible, e.currentTarget.value);
                            e.currentTarget.value = '';
                        }
                    }}
                />
                <p>Responsáveis: {responsible.join(', ')}</p>
                <C.InfoText>Pressione Enter para adicionar um responsável à lista.</C.InfoText>
            </C.FieldContainer>

            <C.FieldContainer>
                <C.Label>Documentação</C.Label>
                <C.Input
                    type="text"
                    placeholder="Digite a documentação e pressione Enter"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddField(setDocumentation, e.currentTarget.value);
                            e.currentTarget.value = '';
                        }
                    }}
                />
                <p>Documentação: {documentation.join(', ')}</p>
                <C.InfoText>Pressione Enter para adicionar um item de documentação.</C.InfoText>
            </C.FieldContainer>

            <C.Button onClick={handleAddProcess}>Adicionar Processo</C.Button>
        </C.FormContainer>
    );
};

export default AddProcessForm;