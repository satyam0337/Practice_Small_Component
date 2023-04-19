import { INC, DEC } from "./actionType";

export const add = () => {
    return {type : INC }
}

export const sub = () => {
    return {type : DEC }
}