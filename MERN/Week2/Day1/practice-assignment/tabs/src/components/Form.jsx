import React from 'react'
import { useState } from 'react'
//import { useNavigate} from "react-router-dom";
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const[type, setType]=useState('people')
    const[id,setId]=useState(1)
    //const navigate = useNavigate();
    const history = useHistory();

    const HandelSubmit=(e)=>{
        e.preventDefault();
        history(`/${type}/${id}`);
    }

    return (
        <div>
            <form onSubmit={HandelSubmit}>
                <label > Search for: </label>
                <select onChange={(e)=>setType(e.target.value)} value={type}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
        
                <label> id: </label>
                <input type="number" min={1} onChange={(e)=>setId(e.target.value)} value={id}/>
                <input type="submit"   value="search"/>

            </form>


        </div>
    )
}

export default Form