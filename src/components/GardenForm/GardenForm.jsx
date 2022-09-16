import React, { useState } from 'react';
import { useDispatch} from 'react-redux';




function GardenForm() {

  const dispatch = useDispatch();
  const [newGarden, setNewGarden] = useState({garden_name: ''});

  const handleNewGarden = (event) => {
    setNewGarden({...newGarden, garden_name: event.target.value})
  };
  
  const handleSubmit = () => {
    dispatch({
        type: 'ADD_GARDEN',
        payload: newGarden
    })
};
  console.log(newGarden);
  return (
    <>
        <h3>Add New Garden</h3>

        <form onSubmit={handleSubmit}>
          <input
          required
          placeholder='Garden Name'
          onChange={handleNewGarden}
          ></input>
          <button type="Submit">Submit</button>
        </form>
    </>
  );
}

export default GardenForm;
