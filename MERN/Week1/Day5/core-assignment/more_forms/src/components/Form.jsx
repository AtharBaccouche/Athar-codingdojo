import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname,setLastname]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    
    
    return(
        <form  onSubmit={ createUser }>
            <div >
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div  >
                <label>Email : </label> 
                <input type="text"  onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
                
            </div>
            
            <input type="submit" value="Create User" />
            <p>Your Form Data</p>

            <p>First Name:{firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email :{email}</p>
            <p> Password:{password}</p>
            <p>Confirm Password:{confirmpassword}</p>
        </form>
        


    );
};
    
export default UserForm;