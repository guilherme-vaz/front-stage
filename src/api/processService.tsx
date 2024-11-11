import { Area } from "../interfaces/Area"
import { api } from "./api"


export async function getAreas() {
    return await api.get("")
}

export async function createArea(data: Area) {
    return await api.post("url", data)
}