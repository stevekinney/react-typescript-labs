export const currentDate = new Date().toLocaleDateString(navigator.language, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
