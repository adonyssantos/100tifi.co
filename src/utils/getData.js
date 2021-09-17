const getData = async (urlApi, id) => {
  const apiURL = id ? `${urlApi}${id}` : urlApi;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getData;
