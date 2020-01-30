import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap'
import style from 'styled-components'
import axios from 'axios'


function EnviaSms() {

    const Button = style.button`
  font-size: 1em;
  margin: 25px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;`;

    const [load, setLoad] = useState(true);
    const [data, setDate] = useState([]);

    const [msg , setMsg] = useState([]);

    async function resonpeSetores() {
        await axios.post('http://localhost/public_html/filtros/filtroSertores.php')
            .then(res => {
                console.log(res.data);
                setDate(res.data);
                setLoad(false)
            });
    }

    async function responseMsgEnv(IdSetor){
        const form = new FormData();
        form.append('txtIdSetor', IdSetor);

        await axios.post('http://localhost/public_html/filtros/filtroMensagem.php', form)
        .then(res => {
            setMsg(res.data)
             console.log(res.data)
        })
    }

    function handleSelect() {
        const rows = data.map((dat, index) => {
            return (
                <option value={dat.id} key={index} >{dat.descricao}</option>
            )
        })
        return rows
    }


    useEffect(() =>{
        resonpeSetores()
    },[])

    if (load) {
        return (<h1>carregando</h1>)
    }
    return (

        <Form>

            <Row >
                <Col sm={4}>

                    <Form.Label>Selecione o setor</Form.Label>
                    <Form.Control onChange={({ target: { value } }) => responseMsgEnv( value )  } as="select">
                        {handleSelect()} 
                    </Form.Control>
                </Col >

                <Col sm={4} >
                    <Form.Group controlId="numero">
                        <Form.Label>Numero</Form.Label>
                        <Form.Control type="text" placeholder="Digite o numero" />
                    </Form.Group>
                </ Col>


                <Col sm={4} >
                    <Button variant="success" type="submit" > Enviar Sms </Button>
                </Col>
            </Row >


            <Row >
                <Col sm={12} >
                    <InputGroup>
                        <FormControl as="textarea" value={msg.descricao_msg} aria-label="With textarea" />
                    </InputGroup>
                </Col >
            </Row >

        </Form>

    )
}

export default EnviaSms;