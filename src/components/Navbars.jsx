import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { SiShopify } from "react-icons/si";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';





const Navbars = () => {
  const handleLogout = () => {
    // localStorage.removeItem('user'); // Adjust based on how you're storing authentication data
    localStorage.clear()
    window.location.href = '/login'; // Redirect to login page
  };
  return (
    <Navbar expand="lg" className="bg-black " fixed="top"  >
        <Container>
          <Navbar.Brand href="/" className="text-white fs-2 flex-center gap-2" style={{fontFamily:"Sedgwick Ave Display"}}>
            <SiShopify /> Shopify 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {
            localStorage.getItem('token') ? 
           
               <Navbar.Collapse id="basic-navbar-nav"  >
            <Nav className="ms-auto flex-center gap-3 ">
              <Nav.Link href="/" className=' text-white fs-4 nav-hover' >
                DashBoard
              </Nav.Link>
              <Nav href="#" className='fs-5' >
              <div className="dropdown">
            <a
              className="d-flex align-items-center text-white  fs-4 text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
             Brand
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1" >
              <li>
                <a className="dropdown-item" href="/addbrand">
                  Add Brand
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/brandlist">
                 Brand List 
                </a>
              </li>
            </ul>
                </div>
              </Nav>
              <Nav href="#" className=' gap-1 fs-5 ' >
              <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white fs-4 text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false" >
              Category                   
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1" >
              <li>
                <a className="dropdown-item" href="/addcategory">
                  Add Category
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/categorylist">
                  Category List
                </a>
              </li>
            </ul>
                </div>
              </Nav>
              <Nav href="#" className=' gap-1 fs-5' >
              <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center fs-4  text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false" >
              Product                   
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1" >
              <li>
                <a className="dropdown-item" href="/addproduct">
                  Add Product
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/productlist">
                  Product LIst
                </a>
              </li>
            </ul>
                </div>
              </Nav>
            </Nav>
          </Navbar.Collapse>
             : <></>
          }
         


          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                localStorage.getItem('status') === 'SUCCESS' ? <div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="40"
                        height="40"
                        className="rounded-circle me-2 mx-2"
                      />
                      <strong className="text-white">
                        <h5>
                          {
                            //  userInfo.status === "SUCCESS" ? userInfo.name : "Guest"
                            localStorage.getItem('username') ? localStorage.getItem('username') : "Guest"
                          }
                        </h5>
                      </strong>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark text-small shadow"
                      aria-labelledby="dropdownUser1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={handleLogout}>
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> : <></>
                // <img src={user} alt="" width={40} height={40} />
              }
              {
                localStorage.getItem('status') === 'SUCCESS' ? <></> : 
                <Link to='/login' className='text-decoration-none'>
                    <button className={`btn btn-lg btn-dark text-white flex-center `} ><span className='flex-center '>
                      LOGIN
                    </span>
                    </button>
                </Link>
              }




            </Nav>
          </Navbar.Collapse>
        </Container>
 </Navbar>
  )
}

export default Navbars
