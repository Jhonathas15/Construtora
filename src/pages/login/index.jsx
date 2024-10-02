import { useState } from 'react'
import './style.css'

function App() {

  return (
    <div className='form'>
      <h1>Portal do Cliente</h1>
      <p>Seja bem-vindo a um lugar todo seu, corretor! Aqui você vai estar por dentro de tudo que podemos te oferecer.</p>
      <form>
          <div className="mb-2">
            <input type="email" name='email' className="form-control" id="email" placeholder='Email Cadastrado'/>
          </div>
          <div className="mb-2">
            <input type="password" name="password" class="form-control" id="password" placeholder='Sua senha'/>
          </div>
          <button type="submit" className="btn btn-dark">Entarar</button>
          <p><a class='link-password'href="#">Esqueceu a senha?</a></p>
        </form>
    </div>
  )
}
export default App
