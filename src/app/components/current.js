import React from 'react'

export default function Current() {
  return (
    <>
    <h1 className='text-center m-3'>Home page</h1>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Front-end</h3>
          <ul>
            <li>home page</li>
            <li>All Product page</li>
            <li>single Product page</li>
            <li>cart page</li>
            <li>checkout page</li>
            <li>signup page</li>
            <li>signin page</li>
            <li>customer dashboard page</li>
            <ul>
              <li>all orders page</li>
              <li>Profile page</li>
            </ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Back-end</h3>
          <ul>
            <li>Dashboard</li>
            <li>Categorys</li>
            <li>Sub-Categorys</li>
            <li>Child-Sub-Categorys</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Users</li>
            <li>Report</li>
            <li>Setting</li>
          </ul>
        </div>
      </div>
    </div>
    <hr />

    <img
      className='img-fluid mx-auto d-block'
      src="https://mir-s3-cdn-cf.behance.net/user/276/bdcce8131957143.5a7945fa3b02f.png"
      alt="unlock logo"
    />
  </>
  )
}
