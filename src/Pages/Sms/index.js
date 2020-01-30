import React, { useState, useEffect } from 'react'
import { Table, Card, Button } from 'react-bootstrap';
import axio from 'axios';
import './css.css'


function SmsEnviados() {

    const [sms, setSms] = useState([]);
    const [load, setLoad] = useState(true);


    async function request() {
        await axio.post('http://localhost/public_html/cadastros/SmsRetorno.php')
            .then(res => {
                console.log(res.data);
                setSms(res.data)
                setLoad(false);
            });
    }

    useEffect(() => {
        request();
    }, []);

    if (load) {
        return <h1>Carregando..</h1>
    }
     /*
        const array = new Array(8).fill("teste");
    
        const newArray = array.map((item,index) => index);
        
        const newArray1 = array.map((item,index) => item); 
    
        console.log(array);
        console.log(newArray);
        console.log("-----------------------------------")
        console.log(newArray1);
        */
    function handleRow() {
        const rows = sms.map((sms, index) => {
            return (
                <tr key={index}>
                    <td>{sms.numero_envio}</td>
                    <td>{sms.mensagem_envio}</td>
                    <td>{sms.descricao}</td>
                    <td>{sms.dh_cadastro}</td>
                </tr>
            )
        })
        return rows
    }

    return (
        <>
            <div className='container'>

                <div className="row">
                    <div className="col-md-12">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Nº De envio</th>
                                    <th>Mensagem enviada</th>
                                    <th>Setor envio</th>
                                    <th>Data envio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {handleRow()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmsEnviados