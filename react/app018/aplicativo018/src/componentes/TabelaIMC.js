import React from 'react'

export default class TabelaIMC extends React.Component {
    render() {
        return(
            <table className="tabela">
                <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Abaixo do peso</td>
                    <td><strong>Abaixo de 18,5</strong></td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td><strong>Entre 18,5 e 24,9</strong></td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td><strong>Entre 25 e 29,9</strong></td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td><strong>Entre 30 e 34,9</strong></td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td><strong>Entre 35 e 39,9</strong></td>
                </tr>
                <tr>
                    <td>Obesidade Grau III ou Mórbida</td>
                    <td><strong>Maior que 40</strong></td>
                </tr>
                </tbody>
            </table>
        )
    }
}