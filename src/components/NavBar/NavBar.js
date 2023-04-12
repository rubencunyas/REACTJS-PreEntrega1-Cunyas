import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav>
            <h3>Pedidos de restaurante</h3>
            <div>
                <button>Entradas</button>
                <button>Platos de fondo</button>
                <button>Bebidas frías</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar