require('dotenv').config();
const axios = require( 'axios' );

let city = process.argv[ 2 ];
let basis_url = 'http://api.openweathermap.org/data/2.5';

let api_key = process.env.API;

axios.get( `${ basis_url }/weather?q=${ city }&appid=${ api_key }` ).then((res) =>
{
    const celsiusT = res.data.main.temp - 273;
    const fahrenheitT = celsiusT + 32;
    const cityName = res.data.name;
    const country = res.data.sys.country;
    const condition = res.data.weather[ 0 ].description;

    console.log( `It's now ${ celsiusT.toFixed() }°C (oder ${ fahrenheitT.toFixed() }∘F) in ${ cityName }, ${ country }` );
    console.log(`The current weather conditions are: ${ condition }`);

}).catch( err => console.error('Oops, cannot find this city', err) );
