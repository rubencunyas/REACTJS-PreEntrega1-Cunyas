import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="col-md-4 mb-3 ">
            <div className='card shadow border border-0 rounded-4'>
                <img src={img} alt={name} className="img-fluid rounded-top-4"/>
                <div className='card-body'>
                <h4 className="card-title fs-5">{name}</h4>
                <p className='card-text'>
                    Precio: S/ {price}<br/>
                    Stock disponible: {stock}
                </p>
                <Link to={`/item/${id}`} className='btn btn-outline-danger rounded-5'>Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}
export default Item