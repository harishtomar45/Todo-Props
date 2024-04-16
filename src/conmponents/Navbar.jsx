import React from 'react'

const Navbar = ({todos}) => {
  return (
    <>
      <nav className="navbar bg-info">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-light">Final Todo</span>
    <span className="navbar-brand mb-0 h1 text-light"> {todos.length} : Taske</span>
  </div>
</nav>
    </>
  )
}

export default Navbar
