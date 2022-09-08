import { ContatoJsonController } from "./controller/ContatoJsonController";
import { ContatoCsvController } from "./controller/ContatoCsvController";

const contatoController = new ContatoCsvController()
console.log(contatoController.recuperarContatos())


