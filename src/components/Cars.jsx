import React from "react";


const Car = ({ nom, color, year }) => {

    const colorInfo = color ? (<p>Couleur: {color} </p>) : (<p>couleur: indefini</p>)



    if (nom) {
        return (
            <tr>
                <td><p>marque:{nom}</p></td>
                <td><p>âge: {year} </p></td>
                <td>{colorInfo}</td>
            </tr>

        )

    } else {
        return (null)
    }



}

export default Car;