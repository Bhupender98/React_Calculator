import React, { useState } from 'react'

export default function Buttons() {
    const [val, setValue]=useState("");
     // handle all the exicting values handlers
    const handleText = (e) =>{
        // console.log('you clicked: ',e.target.innerText);
        // if(e.target.innerText==='X'){
        //    val.replace('X','*')
        // }
        setValue(val.concat(e.target.innerText).replace('X','*'));
    }
    // clear all the value 
    const clear = () =>{
        setValue("");
    }
    // delete from the last 
    const deleteFromLast = () =>{
        // console.log(val.slice(0,-1));
        setValue(val.slice(0,-1));
    }
    //    handle change event for input values 
    const handleChangeEvent = (e) =>{
        console.log(e.target.value);
    }
    // evaluate the  Values 
    const evaluateValue = () =>{
        try {
            setValue(eval(val).toString()); 
        } catch (error) {
            setValue("Error")
        }
    }
 return (
    <div>
      <form action="">
        <input id='screen' type="text" value={val} onChange={handleChangeEvent}/>
      </form>
      <table>
        <tbody>
        <tr>
            <td onClick={clear} className='bgOrange'>C</td>
            <td onClick={deleteFromLast} className='bgOrange'>&larr;</td>
            <td onClick={handleText} className='bgOrange' value>%</td>
            <td onClick={handleText} className='bgOrange'>/</td>
        </tr>
        <tr>
            <td onClick={handleText}>7</td>
            <td onClick={handleText}>8</td>
            <td onClick={handleText}>9</td>
            <td onClick={handleText} className='bgOrange'>X</td>
        </tr>
        <tr>
            <td onClick={handleText}>4</td>
            <td onClick={handleText}>5</td>
            <td onClick={handleText}>6</td>
            <td onClick={handleText} className='bgOrange'>-</td>
        </tr>
        <tr>
            <td onClick={handleText}>1</td>
            <td onClick={handleText}>2</td>
            <td onClick={handleText}>3</td>
            <td onClick={handleText} className='bgOrange'>+</td>
        </tr>
        <tr>
            <td onClick={handleText}>0</td>
            <td onClick={handleText}>.</td>
            <td onClick={handleText}>00</td>
            <td onClick={evaluateValue} className='bgOrange'>=</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
