import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <main className="container">
            <article className="row">
            <div className="col-md-6">
                <img src={img} alt={name} className="img-fluid rounded-4" />
            </div>
            <div className="col-md-6">
                <h2 className="text-s">{name}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        
                        <div className="fw-bold">Categoría</div>
                        {category}
                        
                        
                    </li>
                    <li className="list-group-item">
                        
                        <div className="fw-bold">Descripción</div>
                        {description}
                        
                        
                    </li>
                    <li className="list-group-item">
                        
                        <div className="fw-bold">Precio</div>
                        S/ {price}
                        
                        
                    </li>
                </ul>

                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada' ,quantity)}/>
                </footer>
            </div>
        </article>

        </main>

        
    )
}

export default ItemDetail