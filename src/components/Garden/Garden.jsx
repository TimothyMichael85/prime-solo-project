import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function Garden() {

    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const garden = useSelector(store => store.garden);

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
                    <img src='public/images/gardenbed.jpeg'/>
                    <br />
                    </div>
                )
            })}
        </section>
      </main>
    )
}

export default Garden;