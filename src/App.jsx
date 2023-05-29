import { useState } from 'react'
import './App.css'

function App() {

	const [color, setColor] = useState('')
	//UseState is an react hook that makes the second item in the array a function.

	
	const changeColor = (e) => {
		e.preventDefault()
		const inputBox = e.target.previousSibling;
		//button is target. previous sibling of target is input.
		// console.log(inputBox.value)
		setColor(inputBox.value)
		//setColor change the value of color with value that is added to input.
		inputBox.value = ''
		//reset the value into blank
	}
	

 	return (
    <div>
        <div className='color-box' style={{
			width : '300px',
			height :'300px',
			backgroundColor : color,
			}
        }>
		</div>
		<form>
			<input placeholder='Enter color code with hashtag #' className='input-box' type='text'/>
			<button onClick={changeColor} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default App

//App is exported to be reused.
