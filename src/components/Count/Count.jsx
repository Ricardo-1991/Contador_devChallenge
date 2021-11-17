import React, {useState, useEffect} from 'react'
import count from './count.module.css'
import { useLocation, useNavigate } from 'react-router-dom'


export const Count = () => {
  let navigate = useNavigate()
  const {state} = useLocation()
  let date  = new Date()
  let userDate = new Date(state)
  userDate.setHours(userDate.getHours() + 3)
  console.log(date)
  console.log(userDate)

  let falta = Math.abs(
  (userDate.getTime() - date.getTime()) / 1000)

  let segundos = Math.round(falta % 60);

  let minutos = Math.round(falta / 60 % 60);
  
  let horas = Math.round(falta / 60 / 60 % 24)

  let dias = Math.round(falta / 60 / 60 / 24);

  const [dataTime, setDataTime] = useState({
    days: dias,
    hours: horas,
    minutes: minutos,
    seconds: segundos
  })

  useEffect(() => {
      setInterval(() => {
           if(dataTime.seconds === 0){
            dataTime.seconds = 60
            dataTime.minutes--
           }
        
           if(dataTime.minutes === 0){
             dataTime.minutes = 60
             dataTime.hours--
           }
     
           if(dataTime.hours === 0){
             dataTime.hours = 24
             dataTime.days--
           }
           dataTime.seconds--    

           setDataTime({
             days: dataTime.days,
             hours: dataTime.hours,
             minutes: dataTime.minutes,
             seconds: dataTime.seconds
           }
          )
      }, 1000);
  },[])

  const handleBackMainMenu = () =>{
    navigate('/')
  }

  return (
    <div className={count.container}>
      <header>
        <h1>Contador</h1>
      <button onClick={handleBackMainMenu}>Reiniciar</button>
      </header>
      <div className={count.list}>
      <h1>Faltam</h1>
        <ul>
          <li>{dataTime.days <= 9 ? `0${dataTime.days}` : dataTime.days}<span>Dias</span></li>
          <li>{dataTime.hours <= 9 ? `0${dataTime.hours}` : dataTime.hours}<span>Horas</span></li>
          <li>{dataTime.minutes <= 9 ? `0${dataTime.minutes}` : dataTime.minutes}<span>Minutos</span></li>
          <li>{dataTime.seconds <= 9 ? `0${dataTime.seconds}` : dataTime.seconds}<span>Segundos</span></li>
        </ul>  
      </div>
    </div>
  ) 
}