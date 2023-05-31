export const VIDEOS_REQUEST = 'VIDEOS_REQUEST'
export function videosRequest() {
    return {
        type: VIDEOS_REQUEST        
    }
}

export const VIDEOS_REQUEST_SUCCESS = 'VIDEOS_REQUEST_SUCCESS'
export function videosRequestSuccess(videos) {
    return {
        type: VIDEOS_REQUEST_SUCCESS,
        videos
    }
}

export const VIDEOS_REQUEST_ERROR = 'VIDEOS_REQUEST_ERROR'
export function videosRequestError() {
    return {
        type: VIDEOS_REQUEST_ERROR
    }
}

export const VIDEO_LIST_END = 'VIDEO_LIST_END'
export function videoListEnd() {
    return {
        type: VIDEO_LIST_END
    }
}

export const START_LOADING = 'START_LOADING'
export function startLoading() {
    return {
        type: START_LOADING
    }
}

export const STOP_LOADING = 'STOP_LOADING'
export function stopLoading() {
    return {
        type: STOP_LOADING
    }
}
