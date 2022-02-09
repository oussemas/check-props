import React from 'react'
import propTypes from 'prop-types'


function Profile({Persons, children}) {
   
  return (
    <div>
        <h1 className=''>{Persons.name}</h1>
        <h2 className=''>{Persons.email}</h2>
        <h3 className=''>{Persons.phone}</h3>
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