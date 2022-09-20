import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CROP actions
function* fetchCrop() {


    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
  //     // the config includes credentials which
  //     // allow the server session to recognize the user
  //     // If a user is logged in, this will return their information
  //     // from the server session (req.user)
      const response = yield axios.get('/api/crop', config);
  
  //     // now that the session has given us a user object
  //     // with an id and username set the client-side user object to let
  //     // the client-side code know the user is logged in
      yield put({ type: 'SET_CROP', payload: response.data });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }
  
  function* deleteCrop(action) {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json'},
        withCredentials: true,
      };
  
      const response = yield axios.delete(`/api/crop/${action.payload}`, config);
  
      yield put({type: 'FETCH_CROP' });
    } catch (error) {
      console.error('deleteCrop failed', error);
    }
  } // end DELETE_CROP
  
  function* addCrop(action){
    try{
      yield axios.post('/api/crop', action.payload);
      yield put({type: 'FETCH_CROP'});
    } catch (error) {
      console.log('Error adding new crop', error)
    }
  }
  
  function* cropSaga() {
    yield takeLatest('FETCH_CROP', fetchCrop);
    yield takeLatest('DELETE_CROP', deleteCrop);
    yield takeEvery('ADD_CROP', addCrop);
  }

export default cropSaga;