import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_GARDEN actions
function* fetchGarden() {


  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

//     // the config includes credentials which
//     // allow the server session to recognize the user
//     // If a user is logged in, this will return their information
//     // from the server session (req.user)
    const response = yield axios.get('/api/garden', config);

//     // now that the session has given us a user object
//     // with an id and username set the client-side user object to let
//     // the client-side code know the user is logged in
    yield put({ type: 'SET_GARDEN', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* deleteGarden(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true,
    };

    const response = yield axios.delete(`/api/garden/${action.payload}`, config);

    yield put({type: 'FETCH_GARDEN' });
  } catch (error) {
    console.error('deleteGarden failed', error);
  }
} // end DELETEGARDEN

function* addGarden(action){
  try{
    yield axios.post('/api/garden', action.payload);
    yield put({type: 'FETCH_GARDEN'});
  } catch (error) {
    console.log('Error adding new garden', error)
  }
}

function* gardenSaga() {
  yield takeLatest('FETCH_GARDEN', fetchGarden);
  yield takeLatest('DELETE_GARDEN', deleteGarden);
  yield takeEvery('ADD_GARDEN', addGarden);
}

export default gardenSaga;