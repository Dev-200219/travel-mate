import axios from "axios";

export const getData = async(type, bounds) => {
    try {
        const data = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
            currency : 'INR'
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_TRAVELADVISOR_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })

        return data.data.data;
      }
      catch(err) {
        throw(err.message)
      }
  }