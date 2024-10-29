import React from 'react'

function BankPayments () {
  return (
    <section area-label="Bank and payments" className="bank-payments">
    <div className="container">
      <div className="upper-money-transfer">
        <div className="upper-money-transfer-text">
        <h2 className="h3">Make your money <br/> transfer simple and clear</h2>
          <ul className="transfer-check">
            <li className="check-mark"><i className="fa-regular fa-circle-check"></i>Banking transactions are free for you</li>
            <li className="check-mark"><i className="fa-regular fa-circle-check"></i>No monthly cash commission</li>
            <li className="check-mark"><i className="fa-regular fa-circle-check"></i>Manage payments and transactions online</li>
          </ul>
            <button className="btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <img className="money-manage" src="src/assets/images/money-manage.svg" alt="Currency displayed on a graph"/>
      </div>
      
    </div>
    
    
    <div className="container">
        <div className="lower-money-transfer">
          <img className="receive-contacts" src="src\assets\images\money-receive.svg" alt="Phone contacts with a visa card"/>
    
          <div className="lower-money-transfer-text">
            <h2 className="h3">Receive payment from</h2>
            <h2 className="h3">international bank details</h2>
              <div className="icon-text-container">
                <div className="group1">
                <img className="icon-payments" src="src/assets/images/icon-card.svg" alt=""/>            
                <p className="underline">Manage your payments online. <br/> </p>
                <p className="underline">Mollis congue egestas <br/> </p>
                <p className="underline">egestas fermentum fames.</p>
                </div>
                <div className="group2">
                <img className="icon-payments" src="src/assets/images/icon-wallet.svg" alt=""/>
                <p className="underline">A elementur and imperdiet enim, <br/> </p>
                <p className="underline">pretium etiam facilisi aenean <br/> </p>
                <p className="underline">quam mauris.</p>
                </div>
              </div>  
    
                <button className="btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i></button>
              
          </div> 
        </div>
    </div>
    </section>
  )
}

export default BankPayments