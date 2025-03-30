export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'dded520db5msh27fdd4a3e107121p151d79jsn754b4331c9bd'
    },
  };
  
  export const youtubeOptions = {
   method: 'GET',
    headers: {
      'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLzA',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };