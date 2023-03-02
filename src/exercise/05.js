import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', size, style, ...otherProps}) => {
  const sizeClassName = size ? `box box--${size}` : '';
  return <div className={`box ${className} ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>
}

function App() {
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}} children='small lightblue box'/>
      <Box size='medium' style={{backgroundColor: 'pink'}} children='medium pink box'/>
      <Box size='large' style={{backgroundColor: 'orange'}} children='large orange box'/>
    </div>
  )
}

export default App
