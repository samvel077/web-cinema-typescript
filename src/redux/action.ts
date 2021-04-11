import { AllTypes } from "./constantes";
import axios from "axios";
import { Dispatch } from "react";

const apiURL = "http://api.tvmaze.com";

function wait(ms: number) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

export function showLoading(): AllTypes {
   return {
      type: 'SHOW_LOADING',
   };
}

export function hideLoading(): AllTypes {
   return {
      type: 'HIDE_LOADING',
   };
}

export function getShowList(value: string) {
   return async (dispatch: Dispatch<AllTypes>) => {
      try {
         if (value) {
            dispatch({ type: 'SHOW_LOADING' });

            const response = await axios(`${apiURL}/search/shows?q=${value}`);

            dispatch({
               type: 'GET_SHOW_LIST',
               payload: response.data,
            });

            console.log(response.data);

            dispatch({ type: 'HIDE_LOADING' });
         }
      } catch (error) {
         dispatch({
            type: 'ERROR_MESSAGE',
            payload: error.message,
         });
      }
   };
}

export function starColorChanger(showName: string, rating: number) {
   return async (dispatch: Dispatch<AllTypes>) => {
      // dispatch({ type: SHOW_LOADING });

      // await wait(500);

      // dispatch({ type: HIDE_LOADING });

      dispatch({
         type: 'STAR_COLOR_CHANGER',
         payload: { showName: showName, rating: rating },
      });
   };
}

export function deleteShow(id: number) {
   return async (dispatch: Dispatch<AllTypes>) => {
      dispatch({ type: 'SHOW_LOADING' });

      await wait(500);

      dispatch({ type: 'HIDE_LOADING' });

      dispatch({
         type: 'DELETE_SHOW',
         payload: id,
      });
   };
}

export function getGenres(): AllTypes {
   return {
      type: 'GENRES',
   };
}

export function deleteGenre(genre: string) {
   return async (dispatch: Dispatch<AllTypes>) => {
      dispatch({ type: 'SHOW_LOADING' });

      await wait(500);

      dispatch({ type: 'HIDE_LOADING' });

      dispatch({
         type: 'DELETE_GENRE',
         payload: genre,
      });
   };
}

interface IID {
   id: number
}

export function getShow(id: IID) {
   return async (dispatch: Dispatch<AllTypes>) => {
      console.log(id);
      try {
         const response = await axios(`${apiURL}/shows/${id.id}`);

         dispatch({
            type: 'GET_SHOW',
            payload: response.data,
         });

         console.log(response.data);
      } catch (error) {
         dispatch({
            type: 'ERROR_MESSAGE',
            payload: error.message,
         });
      }
   };
}