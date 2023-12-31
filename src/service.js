
const queryString = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};
//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=bc2a48f5&app_key=11b361d7f3ebc4e45fd05df733151686
export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryString;
  try {
    const Data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await Data.json();
    return response;
  } catch (error) {
    console.log(error, "something went wrong");
    return error;
  }
};

export const fetchTabData = async (defaultQuery) => {
  const { app_id, app_key } = queryString;
  try {
    const Data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await Data.json();
    return response;
  } catch (error) {
    console.log(error, "something went wrong");
    return error;
  }
};



export const fetchOneData = async (defaultQuery) => {
  const { app_id, app_key } = queryString;
  try {
    const Data = await fetch(
      // `https://api.edamam.com/api/recipes/v2=${defaultQuery}=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
      `https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`
      // https://api.edamam.com/api/recipes/v2/2ef77c8422396662ae8369e5d952c129?type=public&app_id=bc2a48f5&app_key=11b361d7f3ebc4e45fd05df733151686
    );
    const response = await Data.json();
    return response;
  } catch (error) {
    console.log(error, "something went wrong");
    return error;
  }
};
