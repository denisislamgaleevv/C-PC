import './Main.css'
import {React, useState, useEffect, useCallback } from 'react'
import {comps} from './comps.js'
import InfoIcon from '@mui/icons-material/Info';
import { DialogWindow } from './DialogWindow/DialogWindow';
import Slider from "react-slick";
export const Main = () =>{
    
    const [processorsV, setProcessorsV] = useState(false)
    const [motherBoardsV, setMotherBoardsV] = useState(false)
    const [RAMV, setRAMV] = useState(false)
    const [videoCardsV, setVideoCardsV] = useState(false)
    const [SSDV, setSSDV] = useState(false)
    const [HDDV, setHDDV] = useState(false)
    const [powerUnitsV, setPowerUnitsV] = useState(false)
    const [cartArr, setCartArr] = useState([])
    const [pricesArr, setPricesArr] = useState([])
    const [hardwareArr, setHardwareArr] = useState([])
    const [  infoVisibility,  setInfoVisibility] = useState(false)
     const [currentElem, setCurrentElem] = useState({})
    useEffect(() =>{        //рендерится слишком много раз, надо переделать
      setHardwareArr(comps) 
    }, [hardwareArr]) 
    useEffect(() =>{
      window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape'  ){
          setInfoVisibility(false)
        }
    })
    })
    const b1Click = () =>{
        setProcessorsV(!processorsV)//
        setMotherBoardsV(false)
        setRAMV(false)
        setVideoCardsV(false)
        setSSDV(false)
        setHDDV(false)
        setPowerUnitsV(false)
    }
    const b2Click = () =>{
        setProcessorsV(false)
        setMotherBoardsV(!motherBoardsV)//
        setRAMV(false)
        setVideoCardsV(false)
        setSSDV(false)
        setHDDV(false)
        setPowerUnitsV(false)
    }
    const b3Click = () =>{
        setProcessorsV(false)
        setMotherBoardsV(false)
        setRAMV(!RAMV)//
        setVideoCardsV(false)
        setSSDV(false)
        setHDDV(false)
        setPowerUnitsV(false)
    }
    const b4Click = () =>{
        setProcessorsV(false)
        setMotherBoardsV(false)
        setRAMV(false)
        setVideoCardsV(!videoCardsV)//
        setSSDV(false)
        setHDDV(false)
        setPowerUnitsV(false)
    }
    const b5Click = () =>{
        setProcessorsV(false)
        setMotherBoardsV(false)
        setRAMV(false)
        setVideoCardsV(false)
        setSSDV(!SSDV)//
        setHDDV(false)
        setPowerUnitsV(false)
    }
    const b6Click = () =>{
        setProcessorsV(false)
        setMotherBoardsV(false)
        setRAMV(false)
        setVideoCardsV(false)
        setSSDV(false)
        setHDDV(!HDDV)//
        setPowerUnitsV(false)
    }
    const b7Click = () =>{
        setProcessorsV(false)
        setMotherBoardsV(false)
        setRAMV(false)
        setVideoCardsV(false)
        setSSDV(false)
        setHDDV(false)
        setPowerUnitsV(!powerUnitsV)//
    }
    const addToCart =(name , price) =>{
      let copy1 = Object.assign([], pricesArr);
      const temp1 = price 
      copy1.push(temp1);
      setPricesArr(copy1)
      localStorage.setItem('pricesArr', copy1) 

      let copy = Object.assign([], cartArr);
      const temp = name  +' - Цена: '+price 
      copy.push(temp);
      setCartArr(copy)
      localStorage.setItem('cartArr', copy) 
    }
    const deleteFromCart = (obj) =>{
      let copy = Object.assign([], cartArr);
      let copy1 = Object.assign([], pricesArr);
      
       
      for (let i =0; i<copy.length; i++){
        if (copy[i] == obj){
         
          
          copy.splice(i, 1)
          copy1.splice(i, 1)
          break
        }
      }
      console.log(copy1, copy)
      setPricesArr(copy1)
      setCartArr(copy)
      localStorage.setItem('cartArr', copy)
      localStorage.setItem('pricesArr', copy1)
    }

    const getProcessors = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.processors.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : '',
          description: '', 
          characteristics: []
        })
      }
       for (let i = 0; i< hardwareArr.processors.length; i++){
        temp[i].name =  hardwareArr.processors[i].name; 
        temp[i].price =  hardwareArr.processors[i].price  
        temp[i].photo =  hardwareArr.processors[i].photo
        temp[i].description =  hardwareArr.processors[i].description
        temp[i].characteristics =  hardwareArr.processors[i].characteristics
      } 
      
      return(temp)
    }
    const getMotherboards = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.motherboards.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : ''
        })
      }
       for (let i = 0; i< hardwareArr.motherboards.length; i++){
        temp[i].name =  hardwareArr.motherboards[i].name; 
        temp[i].price =  hardwareArr.motherboards[i].price  
        temp[i].photo =  hardwareArr.motherboards[i].photo
        temp[i].description =  hardwareArr.motherboards[i].description
        temp[i].characteristics =  hardwareArr.motherboards[i].characteristics
      } 
      
      return(temp)
    }
    const getRAM = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.RAM.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : ''
        })
      }
       for (let i = 0; i< hardwareArr.RAM.length; i++){
        temp[i].name =  hardwareArr.RAM[i].name; 
        temp[i].price =  hardwareArr.RAM[i].price  
        temp[i].photo =  hardwareArr.RAM[i].photo
        temp[i].description =  hardwareArr.RAM[i].description
        temp[i].characteristics =  hardwareArr.RAM[i].characteristics
      } 
      
      return(temp)
    }
    const getVideoCards = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.video_cards.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : ''
        })
      }
       for (let i = 0; i< hardwareArr.video_cards.length; i++){
        temp[i].name =  hardwareArr.video_cards[i].name; 
        temp[i].price =  hardwareArr.video_cards[i].price  
        temp[i].photo =  hardwareArr.video_cards[i].photo
        temp[i].description =  hardwareArr.video_cards[i].description
        temp[i].characteristics =  hardwareArr.video_cards[i].characteristics
      } 
      
      return(temp)
    }
    const getSSD = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.SSD.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : ''
        })
      }
       for (let i = 0; i< hardwareArr.SSD.length; i++){
        temp[i].name =  hardwareArr.SSD[i].name; 
        temp[i].price =  hardwareArr.SSD[i].price  
        temp[i].photo =  hardwareArr.SSD[i].photo
        temp[i].description =  hardwareArr.SSD[i].description
        temp[i].characteristics =  hardwareArr.SSD[i].characteristics
      } 
      
      return(temp)
    }
    const getHDD = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.HDD.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : ''
        })
      }
       for (let i = 0; i< hardwareArr.HDD.length; i++){
        temp[i].name =  hardwareArr.HDD[i].name; 
        temp[i].price =  hardwareArr.HDD[i].price  
        temp[i].photo =  hardwareArr.HDD[i].photo
        temp[i].description =  hardwareArr.HDD[i].description
        temp[i].characteristics =  hardwareArr.HDD[i].characteristics
      } 
      
      return(temp)
    }
    const getPowerUnits = () =>{
      let  temp = []
      for (let i = 0; i< hardwareArr.power_units.length; i++){
        temp.push({ 
          name :  '',
          price : 0, 
          photo : ''
        })
      }
       for (let i = 0; i< hardwareArr.power_units.length; i++){
        temp[i].name =  hardwareArr.power_units[i].name; 
        temp[i].price =  hardwareArr.power_units[i].price  
        temp[i].photo =  hardwareArr.power_units[i].photo
        temp[i].description =  hardwareArr.power_units[i].description
        temp[i].characteristics =  hardwareArr.power_units[i].characteristics
      } 
      
      return(temp)
    }
    const getSum = () =>{
      { 
        
        let sum = 0 
        for (let i =0; i<pricesArr.length; i++){
          sum+=pricesArr[i]
        }
        return(sum)
    }
    }

    const handleInfoIconClick = (elem)=>{
      setInfoVisibility(true)
      setCurrentElem(elem) 
    }
    const hideDialogWindow = ()=>{
      setInfoVisibility(false)
    }
    {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    }
    return(
        <>
       
     
	<div class="container">
  
    
     
		<div class="left">
			<button class="button" onClick={b1Click}>Процессоры</button>
			<button class="button" onClick={b2Click}>Материнские платы</button>
			<button class="button" onClick={b3Click}>Оперативная память</button>
			<button class="button" onClick={b4Click}>Видеокарты</button>
			<button class="button" onClick={b5Click}>SSD диски</button>
			<button class="button" onClick={b6Click}>HDD диски</button>
			<button class="button" onClick={b7Click}>Блоки питания</button>
		</div>
    
     
		<div class="right">
    {  infoVisibility?  
                <DialogWindow  
                 text = {currentElem.name} 
                 photo ={currentElem.photo} 
                 price = {currentElem.price}
                  description = {currentElem.description}
                  characteristics= {currentElem.characteristics}
                  hideDialogWindow = {hideDialogWindow}
                   /> : <></>
      }
<Slider {...settings}> 
 
              {processorsV ?   
              
           getProcessors().map((obj) =>    
           
            
           <div  className="content">
              
            <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
           
           <img src={obj.photo}   class="image"/>
        {
           <> 
           <p>{obj.name} </p>
           <p>{obj.price}$ </p>
           </>  
        }
        
 <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
 
 
			</div>    )  : <></>}    </Slider>
     
            {motherBoardsV ?      getMotherboards().map((obj) =>    
            <div  class="content hide">
                  <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
            <img src={obj.photo}   class="image"/>
        {
          	 <> 
             <p>{obj.name} </p>
             <p>{obj.price}$ </p>
             </>  
        }
			 <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
			</div>)  : <></>} 
            {RAMV ? 	   getRAM().map((obj) =>    
            <div  class="content hide">
                 <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
				<img src={obj.photo}   class="image"/>
        {
          	 <> 
             <p>{obj.name} </p>
             <p>{obj.price}$ </p>
             </>  
        }
				 <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
			</div>): <></>} 
            {videoCardsV ?    getVideoCards().map((obj) =>    
           <div  class="content hide">
               <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
           <img src={obj.photo}   class="image"/>
        {
          	 <> 
             <p>{obj.name} </p>
             <p>{obj.price}$ </p>
             </>  
        }
		 <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
      </div>): <></>} 
            {SSDV ?    getSSD().map((obj) =>    
      <div  class="content hide">
            <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
      <img src={obj.photo}   class="image"/>
        {
          	<> 
            <p>{obj.name} </p>
            <p>{obj.price}$ </p>
            </>  
        }
       <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
      </div>): <></>} 
            {HDDV ?      getHDD().map((obj) =>    
             <div  class="content hide">
                   <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
             <img src={obj.photo}   class="image"/>
        {
          	<> 
            <p>{obj.name} </p>
            <p>{obj.price}$ </p>
            </>  
        }
  <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
      </div>): <></>} 
            {powerUnitsV ?    getPowerUnits().map((obj) =>    
            <div  class="content hide">
                 <InfoIcon className = 'InfoIcon' onClick = {()=>handleInfoIconClick(obj)} /> 
            <img src={obj.photo}   class="image"/>
        {
          <> 
          <p>{obj.name} </p>
          <p>{obj.price}$ </p>
          </>  
        }
    <button class="purchase-button" onClick={()=>addToCart(obj.name, obj.price)}>Добавить в корзину</button>
      </div>): <></>}   
    </div>
  </div>
  
  <div class="cart">
    <h2>Корзина</h2>
    <ul id="cart-list">
       {
        cartArr.map((obj) =>  <p> {obj }$ &nbsp; 
        <a className='cross' onClick = {() => deleteFromCart(obj)}>  &#10006; </a>
        </p>)
       } 
       
        <span> Итого: </span> {Math.round(getSum())}<span>$ </span>
    </ul>
     
  </div>
  
</> 
    )
}

 