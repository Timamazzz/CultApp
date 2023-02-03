export const getDataFromApi = async () => {
  try {
    const response = await fetch('https://go-apod.herokuapp.com/apod');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
