import React, { useState } from  'react';
const MovieForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    
    const handleTitle = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setFirstnameError("Title must be 3 characters or longer!");
        } else {
            setFirstnameError("");
        }
    }
    
    {/* rest of component removed for brevity */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>: Firstname</label>
                <input type="text" onChange={ handleTitle } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    );
};
export default MovieForm;