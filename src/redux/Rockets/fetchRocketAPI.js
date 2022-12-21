const fetchRocket = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const responseJSON = await response.json();
  return responseJSON;
};

export default fetchRocket;
