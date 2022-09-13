import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({history}) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address, city}))
    // history.push('/payment')
    history.push("/placeorder")
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input 
            type="text" 
            placeholder="Enter address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}/>

          <input 
            type="text" 
            placeholder="Enter city" 
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}/>

          <button type="submit"> Continue </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
