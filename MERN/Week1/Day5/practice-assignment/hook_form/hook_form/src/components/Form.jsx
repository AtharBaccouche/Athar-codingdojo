import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname,setLastname]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <p className="title">Login Form</p>
        <form className="App" onSubmit={ createUser }>
            <div >
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div  >
                <label>Email Adress: </label> 
                <input type="email"  onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
                
            </div>
            
            <input type="submit" value="Submit" style={{ backgroundColor: "#a1eafb" }}    />
            <p>Your Form Data</p>

            <p>First Name:{firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email :{email}</p>
            <p> Password:{password}</p>
            <p>Confirm Password:{confirmpassword}</p>
        </form>
        </>
        


    );
};
    
export default UserForm;