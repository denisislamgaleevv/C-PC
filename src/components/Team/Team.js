import React from "react";
import './Team.css'
import  tim from "./src/tim.jpg" 
import  den from "./src/den.jpg" 
export const Team = () =>{
    return(
        <div className='teamWrapper'>
            
            <div className='teamElemWrapper'>
                
                <img src = {den} className = 'teamImg' /> 
                <h2 className="developer">Денис </h2>   
                <p className="developerDesc">
                Фронтенд-разработчик
                </p>
                <p className="developerText">
                Чтобы стать богатым нужно просто перестать быть бедным.
                </p>
                

            </div> 
            <div className='teamElemWrapper'>
                
                <img src = {tim} className = 'teamImg' /> 
                 
                <h2 className="developer">Тимофей </h2>   
                <p className="developerDesc">
                Дизайнер
                </p>
                <p className="developerText">
                Никогда не ошибается тот, кто ничего не делает. Этот проект мы делали.
                </p>
                

            </div> 

        </div>
    )
}
 