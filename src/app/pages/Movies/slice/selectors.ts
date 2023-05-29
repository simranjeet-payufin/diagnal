import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.movies || initialState;

export const selectMovies = createSelector([selectSlice], state => state);
