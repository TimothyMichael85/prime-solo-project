import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

function Garden({garden}) {

    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    const deleteGarden = (id) => {
        dispatch({
            type: 'DELETE_GARDEN',
            payload: id
        })
      }

    return(
        <>
            {user.id === garden.user_id ?
            <div key={garden.id}>
                <img src={garden.image_url}></img>
                <p>{garden.description}</p>
                <button onClick={() => deleteGarden(garden.id)}>Delete</button>
            </div>
            :
            <div key={garden.id}>
                <img src={garden.image_url}></img>
                <p>{garden.description}</p>
            </div>
            }
        </>
    )
}

export default Garden;