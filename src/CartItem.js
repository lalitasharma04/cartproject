import React from 'react';
import './index.css';

class CartItem extends React.Component{
    
// =============================================================================
    // increaseQuantity=()=>{
    //     // this.state.qty+=1;
    //     console.log('this',this.state.qty);

        // set state form 1,use when u dont require prev state
        // this.setState({
        //     qty:this.state.qty+1
        // });
        // this.setState({
        //     qty:this.state.qty+10
        // });
        // this.setState({
        //     qty:this.state.qty+20
        // });//batching process-->in an event handle no matter how many times we call setState 
        //rendering will take place only once,react will take only the last setState
// -----------------------------------------------------------------------------
        // set state form 2,if we require prev state,here in batching all the setState 
        //methods will execute,react stores the setstate method in the queue

        // ****setState call is asynchronous,updation of qty took place,still on printing the state
        //it may show the previous state only
        // this.setState((prevState)=>{
        //     return{
        //         qty:prevState.qty+1
        //     }
        // },()=>{
        //     console.log("this.props",this.props)
        // });
        // this.setState((prevState)=>{
        //     return{
        //         qty:prevState.qty+1
        //     }
        // });
        // this.setState((prevState)=>{
        //     return{
        //         qty:prevState.qty+1
        //     }
        // });
// }

// ===============================================================================
    // decreaseQuantity=()=>{
    //     const {qty}=this.state;
    //     if (qty==0){
    //         return;
    //     }
    //     // this.state.qty+=1;
    //     console.log('this',this.state.qty);
    //     // set state form 1,use when u dont require prev state
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // });
    //     // set state form 2,if we require prev state
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     });
            
            
// ============================================================================
    
    render() {
        // console.log("render");
        const {price,title,qty,img} = this.props.product;
        // console.log("this.props",this.props);
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props;
        return(
            <div className="cart-item"> 
                <div className="left-block">
                    <img alt="" style={ styles.image } /> 
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs: {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" 
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1614972622~hmac=a27a182fc330c0673a746a57213f37f6"
                            onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1614972486~hmac=c74f53a975e3ab6cb866c36e02722171"
                            onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img alt="delete"
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1614972879~hmac=e18e436b22e235a879e114136710ee6c"
                            onClick={()=>onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
            
            
            </div>     
    );
    }
}
const styles={
    image:{
        height: 120,
        width:110,
        borderRadius:4,
        background:'#ccc',
        marginRight:20
    }
}
export default CartItem;
