import React from 'react'

const Icon = (props) => {
    console.log(props)
  return (
    <div className='icon-cont'>
        {props.image}
    </div>
  )
}

export default Icon