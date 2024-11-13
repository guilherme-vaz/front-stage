import React, { useState } from 'react';
import { useAreaContext } from '../../context/AreaContext';
import AddProcessForm from '../processForm/AddProcessForm';
import AddSubProcessForm from '../subProcessForm/AddSubProcessForm';
import Modal from '../modal/Modal';
import AddAreaForm from '../areaForm/AddAreaForm';
import * as C from './style'

const AreaList: React.FC = () => {
    const { areas, addArea } = useAreaContext();
    const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);
    const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
    const [isSubProcessModalOpen, setIsSubProcessModalOpen] = useState(false);
    const [selectedAreaId, setSelectedAreaId] = useState<number | null>(null);
    const [selectedProcessId, setSelectedProcessId] = useState<number | null>(null);

    const handleAddArea = (areaName: string) => {
        addArea(areaName);
        setIsAreaModalOpen(false);
    };

    const handleOpenProcessModal = (areaId: number) => {
        setSelectedAreaId(areaId);
        setIsProcessModalOpen(true);
    };

    const handleOpenSubProcessModal = (areaId: number, processId: number) => {
        setSelectedAreaId(areaId);
        setSelectedProcessId(processId);
        setIsSubProcessModalOpen(true);
    };

    return (
        <C.AreaListWrapper>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <C.Title>Áreas</C.Title>
                <C.SmallButton onClick={() => setIsAreaModalOpen(true)}>+ Adicionar Área</C.SmallButton>
            </div>

            {/* Modal para adicionar nova área */}
            <Modal isOpen={isAreaModalOpen} onClose={() => setIsAreaModalOpen(false)}>
                <AddAreaForm onAddArea={handleAddArea} />
            </Modal>

            {/* Modal para adicionar processo */}
            <Modal isOpen={isProcessModalOpen} onClose={() => setIsProcessModalOpen(false)}>
                {selectedAreaId !== null && <AddProcessForm areaId={selectedAreaId} />}
            </Modal>

            {/* Modal para adicionar subprocesso */}
            <Modal isOpen={isSubProcessModalOpen} onClose={() => setIsSubProcessModalOpen(false)}>
                {selectedAreaId !== null && selectedProcessId !== null && (
                    <AddSubProcessForm areaId={selectedAreaId} processId={selectedProcessId} />
                )}
            </Modal>

            {areas.length > 0 ? (
                <div>
                    {areas.map(area => (
                        <C.AreaContainer key={area.id}>
                            <C.AreaTitle>{area.name}</C.AreaTitle>
                            <C.Button onClick={() => handleOpenProcessModal(area.id)}>Adicionar Processo</C.Button>

                            {area.processes.map(process => (
                                <C.ProcessContainer key={process.id}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <C.Title>{process.name}</C.Title>
                                        <C.SmallButton onClick={() => handleOpenSubProcessModal(area.id, process.id)}>
                                            + Add Subprocesso
                                        </C.SmallButton>
                                    </div>

                                    <C.SubProcessContainer>
                                        <C.InfoTitle>Subprocessos:</C.InfoTitle>
                                        {process.subProcesses.map(subProcess => (
                                            <C.SubProcessTitle key={subProcess.id}>{subProcess.name}</C.SubProcessTitle>
                                        ))}
                                    </C.SubProcessContainer>

                                    <C.DetailsContainer>
                                        <C.InfoTitle>Responsáveis:</C.InfoTitle>
                                        <C.List>
                                            {process.responsible.map((responsible, index) => (
                                                <li key={index}>{responsible}</li>
                                            ))}
                                        </C.List>
                                    </C.DetailsContainer>

                                    <C.DetailsContainer>
                                        <C.InfoTitle>Ferramentas:</C.InfoTitle>
                                        <C.List>
                                            {process.tools.map((tool, index) => (
                                                <li key={index}>{tool}</li>
                                            ))}
                                        </C.List>
                                    </C.DetailsContainer>

                                    <C.DetailsContainer>
                                        <C.InfoTitle>Documentação:</C.InfoTitle>
                                        <C.List>
                                            {process.documentation.map((doc, index) => (
                                                <li key={index}>{doc}</li>
                                            ))}
                                        </C.List>
                                    </C.DetailsContainer>

                                </C.ProcessContainer>
                            ))}
                        </C.AreaContainer>
                    ))}
                </div>
            ) : (
                <p>Nenhuma área encontrada</p>
            )}
        </C.AreaListWrapper>
    );
};

export default AreaList;
