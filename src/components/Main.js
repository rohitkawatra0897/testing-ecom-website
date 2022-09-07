import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in main component", data);

    useEffect(() => {
        dispatch(productList())
    }, [])
    return (
        <div>
            <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
            <div className='product-container'>
                {
                    data.map((item) => <div key={item.id} className='product-item'>

                        <div>User ID : {item.userId} </div>
                        <div>Id : {item.id} </div>
                        <div>Title : {item.title} </div>
                        <div>Completed : {item.body} </div>
                        <div>
                            <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Main;