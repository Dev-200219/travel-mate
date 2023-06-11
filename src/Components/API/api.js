import axios from "axios";

export const getRestaurants = async() => {
    try {
        const data = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
          params: {
            bl_latitude: '51.249342590895736',
            tr_latitude: '51.763906624543125',
            bl_longitude: '-0.560344669921875',
            tr_longitude: '0.30482866992187496',
          },
          headers: {
            'X-RapidAPI-Key': 'a3682544aamshed8a491f6168143p1912f3jsn44c9c6421076',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })

        return data.data.data;
      }
      catch(err) {
        console.log(err);
      }
}