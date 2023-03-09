import './Header.css'
import {React, useState, useEffect, useCallback } from 'react'
 
export const Header = () =>{
    return(
        <div className='headerWrapper'>
            <div className='headerLogoWrapper'>  
                <a className='headerLogo'>C-PC</a>
            </div>
            <div className='headerElemWrapper'>
         <a className='headerElem' href = '/main'>Конфигуратор</a>
         <a className='headerElem' href = '/team'>Команда</a>
         <a className='headerElem' href = '/reviews'>Отзывы</a>
        </div> 
        </div>
    )
}
 