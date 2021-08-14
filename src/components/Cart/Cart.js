import React, { useContext } from 'react'
import cartContext from "../../context/cartContext";
import Footer from '../Footer/Footer';
import './Cart.css';
import { NavLink } from "react-router-dom"
import firebase from 'firebase/app'
import { getFirestore } from '../../factory/firebase';

function Cart() {

    const finishBuy = () => {

        const name = document.querySelector("#fname")
        const phone = document.querySelector("#phone")
        const mail = document.querySelector("#mail")
        const message = document.querySelector("#message")

        if (name.value === "") {
            message.innerHTML = "Please complete the name input"
            message.style.color="red"
        } else if (mail.value === "") {
            message.innerHTML = "Please complete the mail input"
            message.style.color="red"
        } else if (phone.value === "") {
            message.innerHTML = "Please complete the phone input"
            message.style.color="red"
        } else {
            const buyer = {
                name: name.value,
                mail: mail.value,
                phone: phone.value
            }
    
            const db = getFirestore();
            const order = db.collection('orders');
            const newOrder = {
                buyer: buyer,
                items: comprados,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: {totalPrice}
            }
            order.add(newOrder).then(({ id }) => {
                message.innerHTML = ""
                console.log("Su orden N°" + id + " ha sido enviada");
                message.innerHTML += "Su orden codigo " + id + " ha sido enviada"
                message.style.color="green"
                name.value = ""
                mail.value= ""
                phone.value= ""
            }).catch(err => {
                console.log(err);
            })
        }
      }        

    const {comprados, deleteProduct} = useContext(cartContext)
    
    let totalPrice = 0
    comprados.forEach(compra => {
        totalPrice += compra.productAmount*compra.productPrice
    });

    return (
        <div className="cartConteiner">
            {comprados.length < 1 ?
            <div className="buyMessage">
            <p>ESTAMOS ESPERANDO TU COMPRA :D</p>
            <NavLink activeClassName="selected" exact to="/"><img src="./pumperLogo.png" alt='Logo Pumper'></img></NavLink>
            </div> : 
            <div className="buyScreen">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>    
                            <th scope="col">Product</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Unit price</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>                      
                        {comprados.map((compra) => (
                            <tr key={compra.productId}>
                                <th scope="row"><button onClick={()=>deleteProduct(compra.productName)}>DELETE</button></th>
                                <th scope="row">{compra.productName}</th>
                                <td>{compra.productAmount} u.</td>
                                <td>$ {compra.productPrice}</td>
                                <td>$ {compra.productPrice * compra.productAmount}</td>
                            </tr>))}
                            <tr>
                                <th scope="row">-</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$ {totalPrice}</td>
                            </tr>
                    </tbody>
                </table>
                <div className="buyerData">
                    <fieldset>
                            <legend>Billing data:</legend>
                            <div className="field">
                                <label>Name:</label><br></br>
                                <input type="text" id="fname" name="fname"></input><br></br>
                            </div>
                            <div className="field">
                                <label>Email:</label><br></br>
                                <input type="mail" id="mail" name="mail"></input><br></br>
                            </div>
                            <div className="field">
                                <label>Phone:</label><br></br>
                                <input type="number" id="phone" name="phone"></input><br></br>
                            </div>
                            <div className="field">
                                <button onClick={()=>finishBuy()}>TERMINAR COMPRA</button>
                            </div>
                            <div className="field">
                                <p id="message"></p>
                            </div>                            
                    </fieldset>  
                </div>  
            </div>
        }
        <Footer/>
        </div>
    )
}

export default Cart

