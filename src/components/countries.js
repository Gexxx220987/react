import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Country from "./country";


import "../styles/countries.css";

function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
    }, []); // Добавлен пустой массив зависимостей для выполнения запроса только один раз при монтировании компонента

    return (
        <Table striped bordered hover className={"countries"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => <Country key={country.id} country={country}/>)}
            </tbody>
        </Table>
    );
}

export default Countries;