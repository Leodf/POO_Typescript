import { readFileSync } from 'fs';
import { join } from 'path'
import { Contato } from '../model/Contato'
import { IContatoController } from './IContatoController';

export abstract class ContatoController {
    
    protected _conteudoStr: string

    constructor(nomeArquivo: string){
        const caminhoArquivo = join(__dirname, '../', 'data', nomeArquivo)
        this._conteudoStr = readFileSync(caminhoArquivo, 'utf-8')
    }

    abstract recuperarContatos(): Contato[]

}