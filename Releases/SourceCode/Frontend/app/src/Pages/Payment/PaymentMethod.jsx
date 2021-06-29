import React, {Component} from 'react';
// import { SpaceBar } from "@material-ui/icons";
import "./PaymentMethod.css"

class PaymentMethod extends Component {
    state = {
        nameOnCard: "",
        cardNum: "",
        expDate: "",
        cvv: "",
    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className="PaymentBody">
                <div className="col-50">
                    <h3>Payment</h3>
                    <div className="containerPayment">
                    <form onSubmit={this.handleChange}>
                                <label className="labelPayment">Accepted Cards</label>
                                <div className="icon-container">
                                    <i className="fa fa-cc-visa" id="visa"></i>&nbsp;
                                    <i className="fa fa-cc-amex" id="amex"></i>&nbsp;
                                    <i className="fa fa-cc-mastercard" id="mastercard"></i>&nbsp;
                                    <i className="fa fa-cc-discover" id="discover"></i>
                                </div>
                                <label className="labelPayment">Name on Card *</label>
                                <input
                                    className="PaymentText"
                                    type="text"
                                    id="nameOnCard"
                                    name="nameOnCard"
                                    placeholder="Name on Card"
                                    required
                                    value={this.state.nameOnCard}
                                    onChange={this.handleChange}
                                />
                                <label className="labelPayment">
                                    Credit card number *
                                </label>
                                <input
                                    className="PaymentText"
                                    type="text"
                                    id="cardNum"
                                    name="cardNum"
                                    placeholder="Enter Card Number"
                                    required
                                    value={this.state.cardNum}
                                    onChange={this.handleChange}
                                />
                                <div className="rowPayment">
                                    <div className="col-50">
                                        <label className="labelPayment">Exp Date *</label>
                                        <input
                                            className="PaymentText"
                                            type="text"
                                            placeholder="MM/YY"
                                            id="expDate"
                                            name="expDate"
                                            maxLength="5"
                                            height="100%"
                                            required
                                            value={this.state.expDate}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-50">
                                        <label className="labelPayment">CVV *</label>
                                        <input
                                            className="PaymentText"
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            placeholder="CVV"
                                            maxLength="3"
                                            required
                                            value={this.state.cvv}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>

                        <input
                            type="submit"
                            value="Pay"
                            className="btnPlaceOrder"/>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentMethod;