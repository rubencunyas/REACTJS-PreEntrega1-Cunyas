import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className='Counter'>
            <div className='d-flex justify-content-start mb-3 p-2 border rounded-4'>
                <button className='btn btn-outline-danger' onClick={decrement}>-</button>
                <h4 className='mx-4'>{quantity}</h4>
                <button className='btn btn-outline-danger' onClick={increment}>+</button>
            </div>
            <div>
                <button className='btn btn-danger rounded-5' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount