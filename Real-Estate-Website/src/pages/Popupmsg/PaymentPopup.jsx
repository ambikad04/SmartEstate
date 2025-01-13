import React from "react";
import { Link } from "react-router-dom";

const PaymentPopup = () => {
    return(
        <div className="containers">
            <div className="popup">
                <img src="./404-tick.png" alt="" />
                <h2>Thank You!</h2>
                <p>Payment details has been sucessfully submitted. Thanks!</p>
                <Link to='/'><button type="submit">OK</button></Link>
            </div>
        </div>
    )
}

export default PaymentPopup;