import React, { useState } from "react";
import Buttom from "react-bootstrap/Button";

function Country(props) {
   return( 
    <tr><td>{props.country.name.common}</td>
     <td>{props.country.capital}</td>
    <td><Button variant="success">ADD</Button></td></tr>
    
    );

}

export default Country;