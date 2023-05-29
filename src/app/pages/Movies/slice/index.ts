import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { moviesSaga } from './saga';
import { MoviesState } from './types';

export const initialState: MoviesState = {
  loading: false,
  error: false,
  movies: [],
};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies(state, action: PayloadAction<any>) {},
  },
});

export const { actions: moviesActions } = slice;

export const useMoviesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: moviesSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useMoviesSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
