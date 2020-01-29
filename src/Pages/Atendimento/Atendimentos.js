import React, { useState, useEffect } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import axio from 'axios';
import '../../css/Atendimentos.css'

function Retangulo() {
    const [atendimento, setAtendimento] = useState({});
    const [load, setLoad] = useState(true);

    function timeDado() {
        setInterval(() => {

            requisicao();
            timeDado();
        }, 60000)

    }

    async function requisicao() {
        const form = new FormData();
        form.append('txtMetodo', 'getAberto');
        await axio.post('http://localhost/public_html/cadastros/SmsRetorno.php', form)
            .then(res => {
                setAtendimento(res.data[0])
                console.log(res.data[0]);
                setLoad(false);
                
            })
    }

    useEffect(() => {
        requisicao();
        //timeDado()
    }, []);

    if (load) {
        return <h1>Carregando</h1>
    }
    return (
        <>
            <div className="row" style={{ marginTop: '1rem' }}>
                <div className="col-md-4">
                    <Card bg="danger" text="white" >
                        <Card.Header><h3>Quantidade de evento em aberto</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <p className='quantidade'>{atendimento.eventos_ret}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card bg="primary" text="white">
                        <Card.Header><h3>Quantidade de evento em tratamento</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <p className='quantidade'>{atendimento.atendimento}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card bg='success' text='white' style={{ marginBottom: '1rem' }}>
                        <Card.Header><h3>Quantidade de evento concluidos</h3></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <p className='quantidade'>{atendimento.concluido}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/*
            <div className='container'>
                <div className='teste evtnEmAberto'>
                    <h3>Quantidade de evento em aberto</h3>
                    <p className='quantidade'>{atendimento.eventos_ret}</p>
                </div>
                <div className='teste evtnAtendimento'>
                    <h3>Quantidade de evento em tratamento</h3>
                    <p className='quantidade'>{atendimento.atendimento}</p>
                </div>
                <div className='teste evtnFinalizado'>
                    <h3>Quantidade de evento concluidos</h3>
                    <p className='quantidade'>{atendimento.concluido}</p>
                </div>
        </div> */}
        </>
    )
}

export default Retangulo;