import Conector from "../../repositories/conector.repository.js";
import { createTableProducts } from "../../tables/products.js";
class Product extends Conector {

    constructor(model) {
        //crea la tabla al instanciar la clase.
        createTableProducts();
        super(model)
    }
    //Luego implementar metodos especificos
}

export default Product;
