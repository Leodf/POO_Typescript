import { parse } from 'csv-parse/lib/sync'
import { Contato } from '../model/Contato'
import { ContatoController } from './ContatoController';

export class ContatoCsvController extends ContatoController {
    
    constructor(){
        super('contatos.csv')
    }
    
    recuperarContatos(): Contato[] {
        const listaObj: any[] = parse(this._conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj[0],
            obj[1],
            obj[2],
            new Date(obj[3])
        ))
        
        return contatos
    }
}