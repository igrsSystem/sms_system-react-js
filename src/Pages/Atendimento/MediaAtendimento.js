import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MediaTabela() {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Tempo</th>
                                <th>Operador</th>
                                <th>Placa</th>
                                <th>Equipamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00:06:00</td>
                                <td>Igor</td>
                                <td>FTP-1906</td>
                                <td>7170215</td>
                            </tr>
                            <tr>
                                <td>00:01:40</td>
                                <td>Jacob</td>
                                <td>KBC-2691</td>
                                <td>7881637</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className="col-md-6">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Operador</th>
                                <th>Media Tempo atendimento Geral</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Igor</td>
                                <td>00:05:00</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </div>

        </>
    );
}

export default MediaTabela;