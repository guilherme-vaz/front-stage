import { IProcess } from "../interfaces/Process"
import { api } from "./api"


export async function getProcess() {
    return await api.get("/processes")
}

export async function createProcess(data: IProcess) {
    return await api.post("/processes", data)
}