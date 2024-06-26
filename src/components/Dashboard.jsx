import React, { useContext, useEffect, useState } from 'react'
import { BsFillBarChartFill } from 'react-icons/bs'
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa'
import { ApiContext } from '../context/ApiContext'
import Table from 'react-bootstrap/Table';



const Dashboard = () => {
  const {brand,category,product} = useContext(ApiContext);
  const [orderList, setOrderList] = useState([]);
  console.log(orderList)

  const getOrderList = async () => {
    const url = "https://cybotrix.com/webapi/cart/myorder";
    const getProduct = {
      userid: "3",
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(getProduct),
    };
    const response = await fetch(url, postData);
    const msg = await response.json();
    return msg;
  };

  useEffect(() => {
    getOrderList().then((msg) => {
      setOrderList(msg.reverse());

    });
  }, []);
  return (
    <div className='container' style={{marginTop:"120px"}}>
     <div className="row dashboard  ">
        {/* <h3 className='text-center'>DashBoard</h3> */}
          <div className='col-lg-3 dashboard-container element-1'>
            <div className='dashboard-item '>
              <h5>Brand</h5>
              <p>{brand.length}</p>
            </div>
            <FaChartLine className='dashboard-icon' />
          </div>
          <div className='col-lg-3 dashboard-container element-2 text-center'>
            <div className='dashboard-item'>
              <h5>Category</h5>
              <p>{category.length}</p>
            </div>
            <FaChartBar className='dashboard-icon'/>
          </div>
          <div className='col-lg-3 dashboard-container element-3 text-center'>
           <div className='dashboard-item'>
              <h5>Product</h5>
              <p>{product.length}</p>
           </div>
            <FaChartPie className='dashboard-icon'/>
          </div>
          <div className='col-lg-3 dashboard-container element-4 text-center'>
            <div className='dashboard-item'>
              <h5>Orders</h5>
              <p>{orderList.length}</p>
            </div>
            <BsFillBarChartFill className='dashboard-icon'/>
          </div>
     </div>
     <div className='row'>
      <h4 className='mt-5 fs-3 text-center'>Recent Orders</h4>
     <div className=' overflow-y-scroll' style={{height:"380px"}}>
        {
            orderList.map((orders, index) => {
              return (
                <div className="container" >
                  <div className="row  mt-3" >
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                      <h5><span className="text-muted">Order Id :</span>#{orders[0] && orders[0].orderid}</h5>
                      {/* <button className="btn btn-dark">Download Invoice</button> */}
                    </div>
                    <div className="col-lg-12">
                      {
                       
                            <div  >
                              <Table striped bordered hover variant='secondary'>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    {/* <th>Product Image</th> */}
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                        orders.map((order, index) => {
                                          return (
                                                      <tr>
                                                        <td>{index+1}</td>
                                                      {/* <td></td> */}
                                                      <td className='align-middle'>{order.productname}</td>
                                                      <td className='align-middle'>{order.priceperunit}</td>
                                                      <td className='align-middle'>{order.quantity}</td>
                                                      <td className='align-middle'>{order.total}</td>
                                                      <td className='align-middle'>{order.status}</td>
                                                     </tr>
                                                        )
                                                      })
                                  }
                                </tbody>
                              </Table>
                            </div>
                       
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
     </div>
     </div>
   </div>
  )
}

export default Dashboard
