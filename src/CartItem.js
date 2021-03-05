import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }
    render() {
        const {price,title,qty,img} = this.state;
        return(
            <div className="cart-item"> 
                <div className="left-block">
                    <img style={ styles.image } /> 
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs: {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1614972622~hmac=a27a182fc330c0673a746a57213f37f6"/>
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1614972486~hmac=c74f53a975e3ab6cb866c36e02722171"/>
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1614972879~hmac=e18e436b22e235a879e114136710ee6c"/>

                    </div>
                </div>
            
            
            </div>     
    );
    }
}
const styles={
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;
