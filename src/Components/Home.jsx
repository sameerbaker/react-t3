import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
<div className='btns d-flex'>
  <Link to={'/Login'}><button type="button" className="btn btn-primary" >Login</button></Link>
  <Link to={'/Register'}><button type="button" className="btn btn-secondary">Register</button></Link>
</div>
  ) 
}