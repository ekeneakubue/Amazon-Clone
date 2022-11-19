import React from 'react'
import './Checkout.css'
import Subtotal from '../../Components/Subtotal/Subtotal'
import { useStateValue } from '../../Components/StateProvider'
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct'


export default function Checkout() {
    const [{basket}, dispatch]= useStateValue()

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='checkout__left col-xl-8 col-xs-12'>
                    <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    />                    
                </div>
                <div className='checkout__right col-xl-4 col-xs-12'>
                    <Subtotal />
                </div>
            </div>
                
                

            <div className='row'>
                <h2 className='checkout__title col-xl-12 col-xs-12'>
                    Your shopping basket
                </h2>
                
                <div className='col-xl-4 col-xs-12'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                {/*checkOutProduct*/}
            </div>
                
        </div>
    )
}
