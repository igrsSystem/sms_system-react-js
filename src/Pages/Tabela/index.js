import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Axios from 'axios';
import custo from './customisa'


function Tabela() {
    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(true);

    const handleChange = (state) => {
        console.log('Selected Rows: ', state.selectedRows);
      };

    const columns = [
        {
            width:'150px',
            name: 'Nº De envio',
            selector: 'numero_envio',
            sortable: true,
            
        },
        {
            name: 'Mensagem enviada',
            selector: 'mensagem_envio',
            sortable: false,
            left: true,
        },
        {
            width:'300px',
            name: 'Setor envio',
            selector: 'descricao',
            sortable: false,
            left: true,
           
        },
        {
            width:'150px',
            name: 'Data envio',
            selector: 'dh_cadastro',
            sortable: false,
            left: true,
        },
    ];

    async function results() {
        await Axios.post('http://localhost/public_html/cadastros/SmsRetorno.php')
            .then(res => {
                setResult(res.data);
                setLoad(false);
            })
    }
    useEffect(() => {
        results();
    }, [])
    if (load) {
        return (<h1> carregando .... </h1>)
    }
    return (
        <DataTable
            title="Sms Power"
            columns={columns}
            data={result}
            customStyles={custo}
            selectableRows 
            Clicked
            Selected={handleChange}
            pagination
        />
    )
}

export default Tabela;