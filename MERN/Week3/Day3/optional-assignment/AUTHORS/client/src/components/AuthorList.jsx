import React from 'react'
import { Link } from 'react-router-dom'

const AuthorList = ({authors,deleteHandler}) => {// (props)=>const {authors}=props;
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions avaible</th>
                </tr>

            </thead>
            <tbody>
                {authors.map((author)=>{
                    return(
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <button onClick={()=>deleteHandler(author._id)}>Delette</button>
                            </td>

                        </tr>
                        
                        
                    )
                })}
            </tbody>



        </table>



    </div>
  )
}

export default AuthorList