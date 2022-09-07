import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    console.warn(amount)
    return (<div>
        <Link to="/" >Go to Products Link</Link>
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tbody>
                    <tr>
                        <td>User Id</td>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Body</td>

                    </tr>
                    {
                        cartData.map((item) => <tr key={item.key}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
                <div className="adjust-price"><span>Tax</span><span>000</span></div>
                <div className="adjust-price"><span>Total</span><span>{amount - (amount / 10)}</span></div>
            </div>
        </div>
    </div>)
}

export default Cart;