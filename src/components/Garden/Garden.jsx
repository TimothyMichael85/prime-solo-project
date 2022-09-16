import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {React, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function Garden() {

    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const garden = useSelector(store => store.garden);

   //get all movies on page load
   useEffect(() => {
    dispatch({ type: 'FETCH_GARDEN' });
}, []);

// click to take to detail page for selected movie
const handleClick = (id) => {
    history.push(`/details/${id}`)
}

    const deleteGarden = (id) => {
        dispatch({
            type: 'DELETE_GARDEN',
            payload: id
        })
      }

    return(
      <main>
        <h2>Your current gardens</h2>
        <section className = 'gardens'>
            {garden.map(garden => {
                return (
                    <div key={garden.id}>
                    <h3> {garden.garden_name}</h3>
                    <img onClick = {() => handleClick(garden.id)} src='/images/gardenbed.jpeg' alt={garden.id}/>
                    <button onClick={() => deleteGarden(garden.id)}>Delete</button>
                    <br />
                    </div>
                )
            })}
        </section>
      </main>
    )
}

export default Garden;