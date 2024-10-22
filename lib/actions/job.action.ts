export const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
