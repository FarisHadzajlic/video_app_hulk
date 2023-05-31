import * as actions from './action'

const initState = {
    isLoading: false,
    videos: [],
    isSnackbarVisible: false,
    notification: null,
    isError: false,
    isListEnd: false,
    isMoreLoading: false
}

const Reducer = (state = initState, action) => {
    switch(action.type) {

        case actions.VIDEOS_REQUEST: {
            return {
                ...state,
                videos: [],
                loading: true,
                isError: false
            }
        }

        case actions.VIDEOS_REQUEST_SUCCESS:
            return { 
                ...state, 
                videos: action.videos, 
                loading: false, 
                isMoreLoading: false,
                isError: false
            }

        case actions.VIDEOS_REQUEST_ERROR: 
            return {
                ...state, 
                error: action.notification,
                isError: true,
                loading: false, 
                isMoreLoading: false
            }

        case actions.VIDEO_LIST_END: 
            return {
                ...state, 
                isListEnd: true, 
                isLoading: false, 
                isMoreLoading: false
            }

        case actions.START_LOADING: 
            return { 
                ...state, 
                isLoading: true
            }

        case actions.STOP_LOADING: 
            return { 
                ...state, 
                isLoading: false
            }
            
        default:
            return state
    }
}

export default Reducer