// import logo from './logo.svg';
import './App.css';

import Profile from './profile/Profile';

const display = () => {
  alert("Hello")
}

function App() {
  let Persons = {
    name:"Oussema",
    email:"oussema@yahoo.fr",
    phone:23564}

   
    
  
  return (



    <div className="App">
      
      {/* <button onClick={() => alert('hello '+Persons.name) }   >Click Me</button> */}
      <Profile Persons={Persons} display={display} >
        <img src='./hello.jpg' />
      </Profile>
      
    </div>
  );
}

export default App;
