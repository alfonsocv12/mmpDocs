import React from 'react'

const Subtitle = ( props ) => {
  let title = (props.title ? props.title : 'Python module manager')
  return (
    <div>
      <p className="text-lg mb-2 text-gray-600 md:text-xl">{title}</p>
    </div>
  )
}
export default Subtitle
