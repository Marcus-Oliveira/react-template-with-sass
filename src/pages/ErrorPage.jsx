import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styleDiv = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  justifyContent: 'center',
}

const styleTitle = {
  fontSize: '30px',
}

const styleImgError = {
  maxWidth: 'calc(100% / 1.5)',  
}

class ErrorPage extends Component {

  render() {
    return (
      <div style={styleDiv}>
        <div style={{textAlign: 'center'}}>
          <img src="/img/icn-erro.png" alt="Erro 404 - Página não encontrada" style={styleImgError} />
          <br /><br />
          <h1 style={styleTitle}>404 - Página não encontrada</h1>
          O endereço abaixo não existe <br />
          <b style={{color: '#eb145e'}}>{window.location.href}</b><br /><br />
          <b style={{color: '#eb145e'}}><Link style={{color: '#eb145e'}} to="/">Voltar para a Home</Link></b>
        </div>
      </div>
    )
  }

}

export default ErrorPage
