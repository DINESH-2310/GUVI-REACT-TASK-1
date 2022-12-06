import React from 'react'

function Item({product,addToCart}) {
    return  <div className="col-lg-3">

                <div class="card" style={{width:'18 rem'}}>
                    <img  src={product.img}/>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <h5>FLAVIOURS:{product.FLAVIOURS}</h5>
                        <h10>Rating:⭐⭐⭐⭐</h10>
                        <h5>Rs:{product.price}</h5>


                        <button onClick={()=> addToCart(product)} href="#" class="btn btn-primary" >ADD TO CARD</button>
                    </div>
                </div>
            </div>
    
}

export default Item;