import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ReactPaginate from 'react-paginate';
import { ApiContext } from '../context/ApiContext';

const CategoryList = () => {
    const {category,deleteCategory} = useContext(ApiContext)
    const [currentPage, setCurrentPage] = useState(0);
    const [keyword, setKeyword] = useState("");

    const PER_PAGE = 12;
    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(category.length / PER_PAGE);

   


  return (
    <div style={{marginTop:'120px'}} className="d-flex justify-content-center align-items-center flex-column">
    <div className='w-25'>
      <input
          type="text"
          className="form-control  border border-black m-4"
          placeholder="Search...."
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
       
    </div>
    <Table striped bordered hover variant='light'>
  <thead>
    <tr>
      <th>Category ID</th>
      <th>Category Name</th>
      <th>Category Details</th>
      <th>Active</th>
      <th>URL</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
     category
     .slice(offset, offset + PER_PAGE)
     .map((category,index)=>{
        if (
            category.categoryname.toLowerCase().match(keyword.toLowerCase()) ||
            category.categorydetails.toLowerCase().match(keyword.toLowerCase()) ||
            category.active.toLowerCase().match(keyword.toLowerCase()) ||
            category.url.toLowerCase().match(keyword.toLowerCase())
          )
        return(
            <tr key={index}>
                <td>{category.catid}</td>
                <td>{category.categoryname}</td>
                <td>{category.categorydetails}</td>
                <td>{category.active}</td>
                <td>{category.url}</td>
                <td>
                <FaEdit className="text-primary mx-2"/> 
                <MdDelete  className="text-danger" onClick={deleteCategory.bind(this, category.catid)}/>
                </td>
            </tr>
        ) 
     })
   }
  </tbody>
</Table>
<div className="mb-4 mt-4">
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination  justify-content-center"}
      pageClassName={"page-item "}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active primary"}
    />
  </div>
</div>
  )
}

export default CategoryList
