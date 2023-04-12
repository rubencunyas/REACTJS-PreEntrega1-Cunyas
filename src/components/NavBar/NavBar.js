import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <div class="col">
                        <a class="navbar-brand" href="#">Pedidos GO!</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="col collapse navbar-collapse" id="navbarContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Entradas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Platos de fondo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bebidas frías</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <CartWidget />
                    </div>

                </div>
            </nav>
            
        </nav>


    )
}

export default NavBar