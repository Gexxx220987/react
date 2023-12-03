import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/country.css'

function Country(props) {
    const [selected, changeSelected] = useState(false);

    return (
        <tr className={selected ? 'selected-country' : ''}>
            <td className={selected ? 'selected-country' : ''}>
                {props.country.name.common}
            </td>
            <td className={selected ? 'selected-country' : ''}>
                {' '}
                {props.country.capital}
            </td>
            <td className={selected ? 'selected-country' : ''}>
                {selected ? (
                    <Button variant='danger' onClick={() => changeSelected(false)}>
                        Remove
                    </Button>
                ) : (
                    <Button variant='success' onClick={() => changeSelected(true)}>
                        ADD
                    </Button>
                )}
            </td>
        </tr>
    );
}

export default Country;