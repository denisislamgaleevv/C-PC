 

import './DialogWindow.css';
import {React, useEffect, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close'; 

export const DialogWindow = ({ hideDialogWindow, text, photo, price, description, characteristics} ) => {
  const [str, setStr] = useState('')
  const getText = () =>{
    
    const string =  JSON.stringify(characteristics)
   
      let newstr = string.replace(/"/gi, ''); 
      newstr =  newstr.replace(/,/gi, `\n`  ); 
      newstr =  newstr.replace(/{/gi, `\n`); 
      newstr =  newstr.replace(/}/gi, ''); 
      setStr(newstr )
     
  }
  useEffect(()=>{
    getText()
  })
  return (
    
    <div className="LearnMoreForm">
       
       <div className = 'mainDialogWindow'>
       <div className='allTextLearnMoreForm'>
       <div className='textLearnMoreForm'>
           <span className='closeIcon'  onClick={hideDialogWindow} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            
            </div>
          <div className='textLearnMoreFormHeader'>
            
             <h2>  {text} - <span> {price}$ </span> </h2>  
          <div className='photoAndDesc'>  
             <div className = "imageDiv">  <img   class="imageDialog" src = {photo} /></div>
             <div className = "descDiv" > <p className='desc'>  {str} </p>  </div>
             </div>
             <h3  >{description} </h3>
              
           

            {
              
            }
            </div>
             
            <div className='btnLearnMoreWrapper'>  
            <button className='button'   onClick={ hideDialogWindow} >Закрыть</button>
            </div>
          </div>
      </div>
      </div>
  )
}
//onClick={}