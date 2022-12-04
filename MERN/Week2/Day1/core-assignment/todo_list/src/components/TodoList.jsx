import React,{useState,useEffect} from 'react'
import uuid from 'react-uuid';
const TodoList = () => {
    const[content,setContent]=useState('')
    const[list,setList]=useState(JSON.parse(localStorage.getItem('tasks'))||[]);
    const onChangeHandler= (e)=>{
        setContent(e.target.value)
    }
    //Create new Task
    const onSubmitHandler = e =>{
        e.preventDefault();
        if(content){setContent('');
        setList([...list,{content,id:uuid(),isCompleted:false}]);
        }
        setContent('');
        

    }
    //DELETE
    const removeTask= id =>{
        const filtredList=list.filter(task => task.id!==id)
        setList(filtredList)
    }
    //ADD tASK TO LOCALSTORAGE
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(list));
    },[list])

    
  return (
    <div className='main'>
        <form onSubmit={onSubmitHandler}>
        <input type="text"  name='content' value={content} onChange={onChangeHandler} />
        <input type="submit"  value='Add'/>
           
        </form>
        {list.map((task) =>{
            return (
            <div className="task" key={task.id}>
                <p style={task.isCompleted ? {textDecoration: 'line-through'}: {textDecoration:'none'}}>{task.content}</p>
                
                <input type="checkbox"  checked={task.isCompleted} onChange={e=>{
                    setList(prevList=>{
                        const newList=prevList.map( (item)=>
                            item.content===task.content ? {...item, isCompleted:! item.isCompleted}:item
                        )
                        return newList;
                    })
                }}/>
                
                <button onClick={()=>removeTask(task.id)}>Delete</button>
            </div>
            );
        })}

    </div>
  );
}

export default TodoList;