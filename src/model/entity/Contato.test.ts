import { Contato } from './Contato'

describe('Testa o modelo de Contato', () => {
    test('Deve criar um novo objeto de contato com os atributos válidos', () => {
        const contato = new Contato(
            'Leonardo de Faveri',
            '+55 (11) 95242-7722',
            'faver_i@hotmail.com',
            new Date('1992-5-17')
        )
        expect(contato.nome).toBe('Leonardo de Faveri')
        expect(contato.telefone).toBe('+55 (11) 95242-7722')
        expect(contato.email).toBe('faver_i@hotmail.com')
        expect(contato.dataNascimento).toStrictEqual(new Date('1992-5-17'))
    })
})