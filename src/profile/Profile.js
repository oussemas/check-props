import React from 'react'
import propTypes from 'prop-types'



function Profile({Persons, children ,display}) {
   
  return (
    <div>
        <h1 className='user'>{Persons.name}</h1>
        <h2 className='user'>{Persons.email}</h2>
        <h3 className='user'>{Persons.phone}</h3>
        <button onClick={display}>Click me</button>
        {children}
        
    </div>
  )
}
Profile.defaultProps = {
    name: "Foulen",
    email: "foulen@gmail.com",
    phone: "my age",
    
}

Profile.propTypes = {
    name: propTypes.string,
    email: propTypes.string,
    phone: propTypes.number,
    
    
}

export default Profile