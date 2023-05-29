/**
 *
 * Asynchronously loads the component for Movies
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Movies = lazyLoad(
  () => import('./index'),
  module => module.Movies,
);
