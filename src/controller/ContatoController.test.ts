import { ContatoCsvController } from "./ContatoCsvController"
import { ContatoJsonController } from "./ContatoJsonController"
import { IContatoController } from "./IContatoController"

describe('Testa os DAOs de Contato', () => {

    test('Deve recuperar todos os contatos dos repositórios', ()=> {
        let contatoController: IContatoController = new ContatoJsonController()
        let contatos = contatoController.recuperarContatos()
        expect(contatos.length).toBe(10)

        contatoController = new ContatoCsvController()
        contatos = contatoController.recuperarContatos()
        expect(contatos.length).toBe(10)
    })
})