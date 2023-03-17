import './Header.css'
import {React, useState, useEffect, useCallback } from 'react'
import DvrIcon from '@mui/icons-material/Dvr';
export const Header = () =>{
    return(
        <div className='headerWrapper'>
            <div className='headerLogoWrapper'>  
                <a className='headerLogo'><DvrIcon className='DvrIcon'/>&nbsp;C-PC</a>
            </div>
            <div className='headerElemWrapper'>
         <a className='headerElem' href = '/'>Конфигуратор</a>
         <a className='headerElem' href = '/team'>Команда</a>
         
        </div> 
        
        </div>
    )
}
 // <a className='headerElem' href = '/reviews'>Отзывы</a>s