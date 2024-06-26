import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ReactPaginate from 'react-paginate';
import { ApiContext } from "../context/ApiContext";

const BrandList = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [keyword, setKeyword] = useState("");
    const {brand , deleteBrand} = useContext(ApiContext)
    const PER_PAGE = 12;
    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(brand.length / PER_PAGE);
  return (
    <div style={{marginTop:"100px"}} className="d-flex justify-content-center align-items-center flex-column">
   <div className="w-25">
        <input
           type="text"
           className="form-control  border border-black "
           placeholder="Search...."
           onChange={(e) => setKeyword(e.target.value)}
           value={keyword}
         />
   </div>
 <table className="table table-striped table-bordered mt-4" >
   <thead className="text-center fw-bold">
     <tr className="text-center">
       <td>Product Id</td>
       <td>Product Name</td>
       <td>Product Details</td>
       <td>Action</td>
     </tr>
   </thead>
   <tbody>
     {brand
     .slice(offset, offset + PER_PAGE)
     .map((item, index) => {
       if (
           item.brandname.toLowerCase().match(keyword.toLowerCase()) ||
           item.details.toString().match(keyword)
         )
       return (
         <tr key={index} className="text-center">
           <td>{item.brandid}</td>
           <td>{item.brandname}</td>
           <td>{item.details}</td>
           <td>
               <FaEdit className="text-primary mx-2"/> 
               <MdDelete  className="text-danger" onClick={deleteBrand.bind(this, item.brandid)}/></td>
         </tr>
       );
     })}
   </tbody>
 </table>
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

export default BrandList
