export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'
export const GET_SHOW_LIST = 'GET_SHOW_LIST'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const STAR_COLOR_CHANGER = 'STAR_COLOR_CHANGER'
export const DELETE_SHOW = 'DELETE_SHOW'
export const DELETE_GENRE = 'DELETE_GENRE'
export const GET_SHOW = 'GET_SHOW'
export const GENRES = 'GENRES'

export interface ShowLoading {
   type: typeof SHOW_LOADING
}

export interface HideLoading {
   type: typeof HIDE_LOADING
}

export interface GetShowList {
   type: typeof GET_SHOW_LIST
   payload: []
}

export interface ErrorMessage {
   type: typeof ERROR_MESSAGE
   payload: string
}

interface StarColorChangerPayload {
   showName: string
   rating: number
}

export interface StarColorChanger {
   type: typeof STAR_COLOR_CHANGER
   payload: StarColorChangerPayload
}

export interface DeleteShow {
   type: typeof DELETE_SHOW
   payload: number
}

export interface Genres {
   type: typeof GENRES
}

export interface DeleteGenre {
   type: typeof DELETE_GENRE
   payload: string
}

export interface GetShow {
   type: typeof GET_SHOW
   payload: object
}

export type ActionTypes = ShowLoading | HideLoading | GetShowList | ErrorMessage | StarColorChanger | DeleteShow | Genres | DeleteGenre | GetShow 

export type AllTypes = ActionTypes