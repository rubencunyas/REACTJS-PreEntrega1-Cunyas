const products = [
    {id:'1', name: 'Ceviche de pescado', price: 35, category: 'marino', img:'http://localhost:3000/Images/product-ceviche-pescado.jpg', stock: 25, description: 'Delicioso ceviche de pescado fresco'},
    {id:'2', name: 'Ají de gallina', price: 28, category: 'criollo', img:'http://localhost:3000/Images/product-aji-gallina.jpg', stock: 20, description: 'Hecho con gallina de corral'},
    {id:'3', name: 'Lomo saltado', price: 36, category: 'oriental', img:'http://localhost:3000/Images/product-lomo-saltado.jpg', stock: 30, description: 'El verdadero sabor del lomo oriental'},
    {id:'4', name: 'Arroz con mariscos', price: 35, category: 'marino', img:'http://localhost:3000/Images/product-arroz-mariscos.jpg', stock: 25, description: 'Delicioso ceviche de pescado fresco'},
    {id:'5', name: 'Carapulcra', price: 28, category: 'criollo', img:'http://localhost:3000/Images/product-carapulcra.jpg', stock: 20, description: 'Hecho con gallina de corral'},
    {id:'6', name: 'Pollo Chijaukay', price: 36, category: 'oriental', img:'http://localhost:3000/Images/product-chijaukay.jpg', stock: 30, description: 'El verdadero sabor del lomo oriental'}
]

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === productId
                ))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };
  