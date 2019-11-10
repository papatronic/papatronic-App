export default{
    colors: {
        red:'#2E5297',
        gold:'#D4AC5D',
    },
    images:{
        search: require('../assets/busqueda.png'),
        logo: require('../assets/logo.jpeg')
    }, 
    urls: {
        originCities: 'https://pflq8ys7zi.execute-api.us-east-2.amazonaws.com/default/get_origin_cities',
        endCities: 'https://qrji49w5zl.execute-api.us-east-2.amazonaws.com/default/get_destiny_cities',
        predict: 'https://api.papaforecast.com/predict'
    }

}