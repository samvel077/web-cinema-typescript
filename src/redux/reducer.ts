import { ActionTypes } from "./constantes";

type InitialStateType = {
   loading: boolean,
   shows: Array<any>,
   show: {},
   error: string | null,
   successMassage: string | null,
   rating: number,
   showName: Array<string>,
   genres: string[],
}

const initialState: InitialStateType = {
   loading: false,
   shows: [],
   show: [],
   error: null,
   successMassage: null,
   rating: 0,
   showName: [],
   genres: [],
};

export function reducer(state = initialState, action: ActionTypes): InitialStateType {
   switch (action.type) {
      case 'SHOW_LOADING':
         return {
            ...state,
            loading: true,
         };
      case 'HIDE_LOADING':
         return {
            ...state,
            loading: false,
         };
      case 'ERROR_MESSAGE':
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      case 'GET_SHOW_LIST':
         return {
            ...state,
            loading: false,
            shows: action.payload,
         };
      case 'GET_SHOW':
         return {
            ...state,
            show: action.payload,
         };
      case 'STAR_COLOR_CHANGER':
         return {
            ...state,
            rating: action.payload.rating,
            showName: !action.payload.rating
               ? [...state.showName, action.payload.showName]
               : state.showName.filter((item: string) => item !== action.payload.showName),
         };
      case 'DELETE_SHOW':
         const filtered = state.shows.filter(
            (item: any) => item.show.id !== action.payload
         );

         return {
            ...state,
            shows: filtered,
         };
      case 'GENRES':
         const genresArr = state.shows.map((item: any) => {
            return item.show.genres;
         });

         const array = [];

         for (let i = 0; i < genresArr.length; i++) {
            array.push(...genresArr[i]);
         }

         return {
            ...state,
            genres: [...new Set(array)].sort(),
         };
      case 'DELETE_GENRE':
         const newGenresArr = state.genres.filter(
            (item: string) => item !== action.payload
         );

         return {
            ...state,
            genres: newGenresArr,
         };
      default:
         return state;
   }
}
