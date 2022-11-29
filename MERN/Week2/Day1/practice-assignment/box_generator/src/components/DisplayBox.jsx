import React from 'react'

const DisplayBox = (props) => {
    console.log(props.x);
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between'
       
    }}>
      { props.boxes.map((box, index) => {
        return <div key={index} style={{
            backgroundColor: box.color,
            width: `${box.width}px`,
            height: `${box.width}px` // box.width + 'px'
        }}></div>
      }) }
    </div>
  )
}

export default DisplayBox