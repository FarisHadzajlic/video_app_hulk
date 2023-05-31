import axios from 'axios'
import * as actions from './action'
import { takeEvery, call, put, all } from 'redux-saga/effects'
import { startLoading, stopLoading, showSnackbar } from './action'

function* Saga() {
    yield all([
        yield takeEvery(actions.VIDEOS_REQUEST, getVideos)
    ])
} 

export function* getVideos() {
    try {
        yield put(startLoading())
        const response = yield call(fetchVideos)
        yield put(actions.videosRequestSuccess(response))
        yield put(stopLoading())
    } catch (error) {
        yield put(actions.videosRequestError())
    }
}

async function fetchVideos() {
    const response = await axios.get('https://admirsaheta.com/movies')
    return response.data
}

export default Saga