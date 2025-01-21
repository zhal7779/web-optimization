import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredPhotos = createSelector(
  [state => state.category.category, state => state.photos.data],
  (category, photos) =>
    category === 'all' ? photos : photos.filter(photo => photo.category === category)
);
