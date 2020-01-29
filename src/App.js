import React from 'react';
import './style.css'
import Retangulo from './Pages/Atendimento/Atendimentos';
import MediaTabela from './Pages/Atendimento/MediaAtendimento'
import Graficos from './Pages/Atendimento/Graficos'
import SmsEnviados from './Pages/Sms/index'
import { Table, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="container-fluid">
       
        <SmsEnviados />
      </div>
    </>

  );
}

export default App;
