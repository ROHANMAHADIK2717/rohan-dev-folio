export const getYearsOfExperience = (startDate = new Date("2022-09-12")): number => {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return parseFloat(years.toFixed(1));
};
