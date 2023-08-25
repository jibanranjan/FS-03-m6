import React, { useState } from 'react'
import './A.css'
import {numbers, upperCaseLetters, lowerCaseLetters, specialCharacters} from './Char' 

function A() {
  const [password, setPassword] = useState(' ')
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowerercase, setIncludeLowerercase] = useState(false)
  const [includeNumbers, setIncludeNumbers ] = useState(false)
  const [includeSymbols, setIncludeSymbols ] = useState(false)

const handleGeneratePassword = (e) =>{
  let characterList = ' '

  if (includeLowerercase){
    characterList = characterList + lowerCaseLetters
  }

  if(includeUppercase){
    characterList = characterList + upperCaseLetters
  }

  if(includeNumbers){
    characterList = characterList + numbers
  }

  if(includeSymbols){
    characterList = characterList + specialCharacters
  }
  setPassword(createPassword(characterList))
}


const createPassword = (characterList)=>{
  let password = ' '
  const characterListLength = characterList.length

  for(let i=0; i<passwordLength; i++){
    const characterIndex = Math.round(Math.random() * characterListLength)
    password = password + characterList.charAt(characterIndex)

  }
return password
}

const copytoClipboard = () =>{
  const newTextArea = document.crteateElement('textarea')
  newTextArea.innerText = password 
  document.body.appendChild(newTextArea)
  newTextArea.select()
  document.execCommand('copy')
  newTextArea.remove()

}

const handleCopyPassword = (e)=>{
  copytoClipboard()
}


  return (
    <div className='root'>
        <div><h1>Password Generator</h1></div>
        <div className='firstdiv'> <div className='inputBox'> {password} </div ><i class=" icon fa-solid fa-copy" onClick={handleCopyPassword} ></i></div>
      
        <div className='line'><p>select password length</p> 
        <select defaultValue={8} name="length" id="lentgh" onChange={(e)=>setPasswordLength(e.target.value)} >
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    </select>
        </div>

        <div>
        <input type="checkbox" id="upperCase" name="upperCase"  checked={includeUppercase}
        onChange={(e)=>setIncludeUppercase(e.target.checked)}
        /> <label for="upperCase"> Include Uppercase</label> <br />



        <input type="checkbox" id="LowerCase" name="LowerCase" checked={includeLowerercase}
        onChange={(e)=>setIncludeLowerercase(e.target.checked)}
         /> <label for="Lowercase"> Include Lowercase</label> <br />



<input type="checkbox" id="Number" name="Number" checked={includeNumbers}
        onChange={(e)=>setIncludeNumbers(e.target.checked)} 
         /> <label for="Number"> Include symbols</label> <br />
        </div>


        <input type="checkbox" id="Symbol" name="Symbol" checked={includeSymbols}
        onChange={(e)=>setIncludeSymbols(e.target.checked)}
         /> <label for="Symbol"> Include Numbers</label> <br />

        
        <div className='btndiv'>
        <button className='btn' onClick={handleGeneratePassword}  >Generate Password</button>
        </div>

    </div>
  )
}

export default A