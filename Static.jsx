import React from 'react';

function Static() {
  return (
    <div style={{height:'650px',width:'1200px',border:'1px solid black',display:'flex',backgroundColor:'lightgrey'}}>
      <div className='Vone' style={{width:'20%',height:'650px',backgroundColor:'lightblue',border:'1px solid lightblue'}}>
        <div style={{display:'flex'}} >
            <img style={{height:'40px',width:'40px',position:'relative',left:'32px',top:'15px',borderRadius:'50px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAAPoQtZCmMthIrnq4LW48gQFtCMRmdwm-SEXch-35nhPO9skoPeCor5ocDNv2dwA-yI&usqp=CAU'/>
            <h3 style={{color:'white',position:'relative',left:'35px'}}>Dashboard</h3>
        </div>
        <div>
            <div style={{position:'relative',top:'30px',height:'40px',width:'',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:'blueviolet'}}>
              <img style={{height:'25px',width:'25px',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px'}} src='/Images/dash.png' />
              <h4 style={{position:'relative',left:'20px',bottom:'10px'}}>Dashboard</h4>
            </div>
            <div style={{position:'relative',top:'40px',height:'40px',width:'',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:''}}>
              <img style={{height:'25px',width:'25px',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px'}} src='/Images/product.png' />
              <h4 style={{position:'relative',left:'20px',bottom:'10px'}}>Product</h4>
            </div>
            <div style={{position:'relative',top:'50px',height:'40px',width:'',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:''}}>
              <img style={{height:'25px',width:'25px',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px'}} src='/Images/customer.jfif' />
              <h4 style={{position:'relative',left:'20px',bottom:'10px'}}>Customers</h4>
            </div>
            <div style={{position:'relative',top:'60px',height:'40px',width:'',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:''}}>
              <img style={{height:'25px',width:'25px',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px'}} src='/Images/income.png' />
              <h4 style={{position:'relative',left:'20px',bottom:'10px'}}>Income</h4>
            </div>
            <div style={{position:'relative',top:'70px',height:'40px',width:'',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:''}}>
              <img style={{height:'25px',width:'25px',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px'}} src='/Images/promote.jfif' />
              <h4 style={{position:'relative',left:'20px',bottom:'10px'}}>Promote</h4>
            </div>
            <div style={{position:'relative',top:'80px',height:'40px',width:'',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:''}}>
              <img style={{height:'25px',width:'25px',paddingLeft:'10px',paddingTop:'10px',borderRadius:'10px'}} src='/Images/help.jfif' />
              <h4 style={{position:'relative',left:'20px',bottom:'10px'}}>Help</h4>
            </div>
        </div>
      </div>
      <div>
        <div style={{display:'flex'}}>
        <h4 style={{paddingLeft:'35px'}}>Hello Shahruk 👋</h4>
        <input style={{width:'140px',height:'20px',position:'relative',left:'600px',top:'10px'}} type='text' placeholder='search' />
        </div>
        <div style={{display:'flex'}}>
          <div style={{width:'200px',height:'90px',backgroundColor:'white',paddingTop:'10px',marginLeft:'30px',display:'flex',border:'1px solid white',borderRadius:'10px'}}>
            <img style={{height:'70px',width:'70px',border:'1px solid white',borderRadius:'100px'}} src='/Images/Earning.jfif' />
            <div>
              Earnings <br />
              <span>$198k</span> <br />
              <span style={{ color: 'green' }}>37.8% </span>this month
            </div>
          </div>
          <div style={{width:'200px',height:'90px',backgroundColor:'white',paddingTop:'10px',marginLeft:'30px',display:'flex',border:'1px solid white',borderRadius:'10px'}}>
            <img style={{height:'70px',width:'70px',border:'1px solid white',borderRadius:'100px'}} src='\Images\order.png'/>
            <div>
              Orders <br />
              <span>$2.4k</span> <br />
              <span style={{ color: 'red' }}>2% </span>this month
            </div>
          </div>
          <div style={{width:'200px',height:'90px',backgroundColor:'white',paddingTop:'10px',marginLeft:'30px',display:'flex',border:'1px solid white',borderRadius:'10px'}}>
            <img style={{height:'70px',width:'70px',border:'1px solid white',borderRadius:'100px'}} src='\Images\Balance.png' />
            <div>
              Balance <br />
              <span>$2.4k</span> <br />
              <span style={{ color: 'red' }}>2% </span>this month
            </div>
          </div>
          <div style={{width:'200px',height:'90px',backgroundColor:'white',paddingTop:'10px',marginLeft:'30px',display:'flex',border:'1px solid white',borderRadius:'10px'}}>
            <img style={{height:'70px',width:'70px',border:'1px solid white',borderRadius:'100px'}} src='\Images\sales.png'/>
            <div>
              Total sales <br />
              <span>$89k</span> <br />
              <span style={{ color: 'green' }}>11% </span>this month
            </div>
          </div>
        </div>
        <div>
          <img  style={{height:'280px',width:'550px',paddingLeft:'30px',paddingTop:'20px',border:'1px solid lightblue',borderRadius:'10px'}} src='/Images/Graph.png' />
          {/* created graph in canva.com website both graph and chart */}
          <img style={{height:'280px',width:'270px',marginLeft:'80px',border:'1px solid white',borderRadius:'10px'}} src='/Images/Pie.png' />
        </div>
        <div style={{height:'175px',border:'1px solid white',borderRadius:'10px',backgroundColor:'white',marginLeft:'25px'}} >
          <h5 style={{marginLeft:'30px'}}>Product Sell</h5>
          <input style={{width:'100px',position:'relative',left:'550px',bottom:'40px',backgroundColor:'white'}} type="text" placeholder="Search"  />
          <select style={{width:'120px',position:'relative',left:'610px',bottom:'40px',backgroundColor:'white'}} ><option value="Last 30 Days">Last 30 Days</option></select>
          <div style={{display:'flex',position:'relative',bottom:'60px'}}>
            <h6 style={{paddingLeft:'30px'}}>Product Name</h6>
            <h6 style={{paddingLeft:'480px'}}>Stock</h6>
            <h6 style={{paddingLeft:'70px'}}>Price</h6>
            <h6 style={{paddingLeft:'90px'}}>Total Sales</h6>
          </div>
          <div style={{display:'flex'}}>
            <img style={{height:'40px',width:'50px',position:'relative',left:'30px',bottom:'80px',borderRadius:'10px'}} src='/Images/3d.jfif'/>
            <h4 style={{position:'relative',left:'40px',bottom:'95px'}}>Abstract 3d</h4>
            <p style={{position:'relative',left:'420px',bottom:'90px'}}>32 in stock</p>
            <h4 style={{position:'relative',left:'460px',bottom:'95px'}}>$ 45.99</h4>
            <p style={{position:'relative',left:'550px',bottom:'92px'}}>20</p>
          </div>
          <div style={{display:'flex',position:"relative",bottom:'20px'}}>
            <img style={{height:'40px',width:'50px',position:'relative',left:'30px',bottom:'80px',borderRadius:'10px'}} src='/Images/sarphens.jfif'/>
            <h4 style={{position:'relative',left:'40px',bottom:'95px'}}>Sarphens illustration</h4>
            <p style={{position:'relative',left:'350px',bottom:'90px'}}>32 in stock</p>
            <h4 style={{position:'relative',left:'390px',bottom:'95px'}}>$ 45.99</h4>
            <p style={{position:'relative',left:'480px',bottom:'92px'}}>20</p>
          </div>
          <div style={{display:'flex',position:'relative',bottom:'200px',right:'260px',height:'50px',width:'200px',display:'flex',border:'1px solid lightblue',borderRadius:'10px',backgroundColor:'blueviolet'}}>
            <img style={{height:'40px',width:'40px',position:'relative',top:'5px',left:'5px',borderRadius:'10px'}} src='/Images/baswa.jpeg'/>
            <div style={{position:'relative',bottom:'30px',left:'25px'}}>
              <h4 style={{position:'relative',top:'10px'}}>Baswaraj</h4>
              <p style={{position:'relative',bottom:'10px'}}>Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Static
