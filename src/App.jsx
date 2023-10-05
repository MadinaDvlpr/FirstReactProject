import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const showTitle = true
const style = {color:'white', backgroundColor:'black'}
const title = "Bonjour les gens"
function App() {

  
  return <Fragment>
    {showTitle ? <h1 id="title" style={style}> {title}</h1> : <p>Demo</p>}
    <input type="text" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero, iure ullam dolores rem error aliquid quaerat magnam cupiditate velit vero, quisquam, temporibus quod. Rem vitae blanditiis velit deleniti corporis.</p>
    
    </Fragment>
}

export default App
