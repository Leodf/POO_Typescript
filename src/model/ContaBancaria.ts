
export class ContaBancaria {
    
    private _saldo: number
    private _numero: string
    private _agencia: string

    constructor(numero?: any, agencia?: any){
        this._saldo = 0
        this.numero = this._validarNumero(numero) ? numero : '00000-0'
        this.agencia = this._validarAgencia(agencia) ? agencia : '0000-0'
    }

    get numero(){
        return this._numero
    }

    set numero(valor: string) {
        if(this._validarNumero(valor)){
            this._numero = valor
        } else {
            console.log('Formato de número inválido')
        }
    }

    get agencia(){
        return this._agencia
    }

    set agencia(valor: string) {
        if(!this._validarAgencia(valor)) {
            console.log('Formato de número inválido')
        } else {
            this._agencia = valor
        }
    }

    consultar(): number {
        return this._saldo
    }

    depositar(valor: number): boolean {
        this._saldo += valor
        console.log(`valor de R$ ${valor} depositado com sucesso!!`)
        return true
    }

    sacar(valor: number): boolean {
        if(valor >= 0 && valor <= this._saldo){
            this._saldo -= valor
            console.log(`valor de R$ ${valor} sacado com sucesso!!`)
            return true
        }

        console.log(`saque recusado!!`)
        return false
    }

    private _validarNumero(numero: string): boolean {
        const regex = /^\d{5}-\d{1}$/
        if(!regex.test(numero)) {
            return false
        }

        this._numero = numero
        return true
    }

    private _validarAgencia(numero: string): boolean {
        const regex = /^\d{4}-\d{1}$/
        if(!regex.test(numero)) {
            return false
        }

        this._agencia = numero
        return true
    }
}