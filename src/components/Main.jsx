import React, { useEffect, useState } from 'react'
import SelectPeople from './SelectPeople';

const Main = () => {

    const [response, setResponse] = useState(false);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(value => {
            setResponse(value.results);
            setSelected(value.results[0]);
        })
        .catch(err => console.warn("Error al realizar la solicitud!" + err));
    }, [])

    const changeValue = (e) => {
        let elementSearch = e.target.value;
        response.forEach(el => {
            if(el.name === elementSearch) {
                setSelected(el);
            }
        });
    }

  return (
    <main className='main-container'>
        {!response
        ? "Cargando..."
        :<div>
            <h1>Your Character:</h1>
            <select onChange={(e) => changeValue(e)}>
                {response.map((el, key) => {
                //console.log(el);
                return <option key={key} value={el.name}>{el.name}</option>
                })}
            </select>
            <SelectPeople searcher={selected}/>
        </div>
        }
    </main>
  )
}

export default Main;
