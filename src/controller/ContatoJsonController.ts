import { readFileSync } from 'fs';
import { join } from 'path'
import { Contato } from '../model/Contato'
import { IContatoController } from './IContatoController';

export class ContatoJsonController implements IContatoController {
    
    private _caminhoArquivo: string

    constructor(){
        this._caminhoArquivo = join(__dirname, '../', 'data', 'contatos.json')
    }

    recuperarContatos(): Contato[] {
        const conteudoStr = readFileSync(this._caminhoArquivo, 'utf-8')
        const listaObj: any[] = JSON.parse(conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj.nome,
            obj.telefone,
            obj.email,
            new Date(obj.dataNascimento)
        ))

        return contatos
    }
}