import { readFileSync } from 'fs';
import { join } from 'path'
import { parse } from 'csv-parse/lib/sync'
import { Contato } from '../model/Contato'
import { IContatoController } from './IContatoController';

export class ContatoCsvController implements IContatoController {
    
    private _caminhoArquivo: string

    constructor(){
        this._caminhoArquivo = join(__dirname, '../', 'data', 'contatos.csv')
    }
    
    recuperarContatos(): Contato[] {
        const conteudoStr = readFileSync(this._caminhoArquivo, 'utf-8')
        const listaObj: any[] = parse(conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj[0],
            obj[1],
            obj[2],
            new Date(obj[3])
        ))
        
        return contatos
    }
}