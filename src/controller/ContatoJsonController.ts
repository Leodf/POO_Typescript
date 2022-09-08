import { Contato } from '../model/Contato'
import { ContatoController } from './ContatoController';

export class ContatoJsonController extends ContatoController {
    
    constructor(){
        super('contatos.json')
    }

    recuperarContatos(): Contato[] {
        const listaObj: any[] = JSON.parse(this._conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj.nome,
            obj.telefone,
            obj.email,
            new Date(obj.dataNascimento)
        ))

        return contatos
    }
}