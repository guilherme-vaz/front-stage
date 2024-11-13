import { IArea } from "../interfaces/Area"
import { api } from "./api"


export async function getAreas() {
    return await api.get("/areas")
}

export async function createArea(data: IArea) {
    return await api.post("/areas", data)
}