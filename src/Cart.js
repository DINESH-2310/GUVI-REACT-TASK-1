import React from 'react'

function Cart({cartList,removeCart}) {
  return ( <ol class="list-group list-group-numbered">
  {cartList.map((item) => {
    return(
       <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{item.price}</div>
        Content for list item 
      </div>
      <button  onClick={()=> removeCart(item)} class="badge bg-primary rounded-pill" >Remove</button>
    </li>
    );
  }
  )
}
</ol>
);
}

      export default Cart