import { Contato } from "../model/Contato";

export interface IContatoController {
    recuperarContatos(): Contato[]
}