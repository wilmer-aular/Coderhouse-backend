import Conector from "../../repositories/conector.repository.js";
import { createTableMessages } from "../../tables/messages.js";

export class Message extends Conector {

    constructor(model) {
        //crea la tabla al instanciar la clase.
        createTableMessages();
        super(model);
    }
    //Luego implementar metodos especificos
}

export default Message;
