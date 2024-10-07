import React from 'react'

const Contact = ({ handleLogout }) => {
  return (
    <div>
     <h1>Contact page</h1>
     <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Contact
