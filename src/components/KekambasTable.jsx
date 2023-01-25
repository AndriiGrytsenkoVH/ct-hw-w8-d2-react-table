import React from 'react'

export default function KekambasTable(props) {

    const tableHeaders = ['#','First Name','Last Name'];

    return (
        <table className='table table-primary table-striped'>
            <thead>
                <tr>
                    {tableHeaders.map( (th, i) => <th key={i}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map( kekamba => (
                    <tr key={kekamba.id}>
                        <th>{kekamba.id}</th>
                        <th>{kekamba.first_name}</th>
                        <th>{kekamba.last_name}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
