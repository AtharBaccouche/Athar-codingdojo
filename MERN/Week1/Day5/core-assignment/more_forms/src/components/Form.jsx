import React, { useState } from  'react';
    
    
function UserForm(){
    const initialValues={ firstname:"", lastname:"", email:"", password:"",confirmpassword:""};
    const [formValues,setFormValues]=useState(initialValues)
    const [formErrors,setFormErrors]=useState({})
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const handelChange =(e) =>{
        const {name, value}= e.target;
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    };



    const createUser = (e) => {
        e.preventDefault();
        setFormErrors(Validate(formValues));
        setHasBeenSubmitted(true)
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const Validate=(values) =>{
        const errors={};
        if(!values.firstname){
            errors.firstname= "Firstname is required!";
        }
        else if (values.firstname.length <2){
            errors.firstname="Fistname must be at least 2 characters ";
        }
        if(!values.lastname){
            errors.lastname= "lastname is required!";
        }
        else if(values.lastname.length< 2){
            errors.lastname= "lastname must be at least 2 characters";
        }
        if(!values.email){
            errors.email= "Email is required!";
        }
        else if(values.email.length<5) {
            errors.email="Email must be at least 2 characters";
        }
        if(!values.password){
            errors.password= "Password is required!";
        }
        else if (values.password.length<8){
            errors.password="Password must be at least 8 characters"
        }
        if(!values.confirmpassword){
            errors.confirmpassword= "Confirm Password is required!";
        } 
        else if (values.confirmpassword!==values.password){
            errors.confirmpassword= " Passwords must match!";
        }

        return errors;

    };
    
    
    return(
        <form  onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div >
                <label>First Name: </label> 
                <input type="text" name="firstname" onChange={ handelChange }  value={formValues.firstname}/>
            </div>
            <p>{formErrors.firstname}</p>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastname" onChange={ handelChange  } value={formValues.lastname}/>
            </div>
            <p>{formErrors.lastname}</p>
            <div>
                <label>Email : </label> 
                <input type="text" name="email" onChange={ handelChange  }  value={formValues.email}/>
            </div>
            <p>{formErrors.email}</p>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ handelChange  }  value={formValues.password}/>
            </div>
            <p>{formErrors.password}</p>
            <div>
                <label>Confirm Password: </label>
                <input type="text"  name= "confirmpassword" onChange={ handelChange  } value={formValues.confirmpassword}/>
            </div>
            <p>{formErrors.confirmpassword}</p>
            
            <input type="submit" value="Create User" />
            <pre>{JSON.stringify(formValues, undefined,2)} </pre>

            
        </form>
        


    );
}
export default UserForm;