import React, {useState} from 'react'
import main from './main.module.css'
import { useNavigate } from 'react-router-dom'

export const Main = () => {

  const navigate = useNavigate()

  const [data, setData] = useState('')

  const handleDate = (e) => {
    setData(e.target.value) 
  }

  const handleSubmit = (data) => {

    if(data === ''){
      alert('Escolha uma data antes de prosseguir!')
      return false
    }

    let date = new Date()
    let userDate = new Date(data)
    userDate.setHours(userDate.getHours() + 3)

    if(userDate.getTime() < date.getTime()){
      alert('Digite uma data futura para contabilizar')
    }else {
      navigate('/count', {state: data})
    }
  
  }
  return (

    <div className={main.userMain}>
      <h1>Contador</h1>
      <h3>Informe uma data</h3>
      <input type="date" name="input" placeholder="Clique aqui e adicione uma data" value={data} onChange={handleDate} />
      <button onClick={() => handleSubmit(data)}>Iniciar Contagem</button>
    </div>
  

  )
}