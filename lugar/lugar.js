const axios = require('axios');

const getLugarLatLog = async(dir) => {



    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '3c0c12dfb0msh1f8bbac647ce5c3p112cdcjsnb8bfc17f9e32' }
    });


    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir} `);
    }

    const data = resp.data.Results[0]
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;
    /*  .then(resp => {
          console.log(resp.data.Results[0]);
      })
      .catch(err => {
          console.log("Error!!!", err);
      })*/

    return {

        direccion,
        lat,
        lon
    }

}

module.exports = {

    getLugarLatLog
}