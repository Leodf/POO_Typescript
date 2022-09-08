import { writeFileSync } from 'fs'
import { join } from 'path'
import { faker } from '@faker-js/faker'

faker.setLocale('pt_BR')

const contatos = []
let linhasCSV = ''
const numeroContatos = 10
for(let i = 0; i < numeroContatos; i++){
    const obj = {
        nome: faker.name.fullName(),
        telefone: faker.phone.number(),
        email: faker.internet.email(),
        dataNascimento: faker.date.past()
    }

    contatos.push(obj)
    const linha = `${obj.nome},${obj.telefone},${obj.email},${obj.dataNascimento}`
    linhasCSV += linha + '\n'
}

const caminhoDiretorioArquivos = join(__dirname, 'data')
const strJson = JSON.stringify(contatos)
const caminhoArquivoJSON = join(caminhoDiretorioArquivos, 'contatos.json')
writeFileSync(caminhoArquivoJSON, strJson)

const caminhoArquivoCSV = join(caminhoDiretorioArquivos, 'contatos.csv')
writeFileSync(caminhoArquivoCSV, linhasCSV)
console.log('Arquivos gravados')