class ProductManager{
    constructor(){
        this.products = [];
        this.productId= 0;

    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log(`Todos los campos son obligatorios`)
        }

    const existProduct = this.products.find(product => product.code === code);

    if(existProduct){
        return console.log("El producto ya existe")
    }

    const producto = {
        id: this.productId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };

    this.products.push(producto);
    this.productId++;
        
    }
    

    getProducts(){

        return this.products;
    }

    getProductId(id){
        const product = this.products.find(product => product.id === id);
        if(product){
            return product;
        } else {
            console.log(`Producto no encontrado`)
        }
    }


}

const productManager = new ProductManager();
productManager.addProduct("Papa ", "Descripción del producto", 1500, "imagen2.jpg", "001", 50);

console.log(productManager.getProducts());


productManager.addProduct("Papa ", "Descripción del producto 2", 1500, "imagen2.jpg", "001", 50);
