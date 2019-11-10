import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import config from '../config';

class Filter extends Component {
    state ={
        citiesNames: [],
        type: 0,
        cities: []
    }
    async componentWillMount(){
        try {
            let aux = [];
            let names = [];
            let originCitiesReq = await axios.get(config.urls.originCities);
            let endCitiesReq = await axios.get(config.urls.endCities);
            if (originCitiesReq.data && endCitiesReq ){
                if (originCitiesReq.data.length > 0){
                    originCitiesReq.data.map(
                        city => {
                            aux.push({
                                id: city.id,
                                city: `+De ${city.city} hacia Sinaloa`,
                                type: 0
                            });
                            names.push({
                                value:`+De ${city.city} hacia Sinaloa`
                            });
                        }
                    );
                }
                if(endCitiesReq.data.length > 0){
                    endCitiesReq.data.map(
                        city => {
                            aux.push({
                                id: city.id,
                                city: `De Sinaloa hacia ${city.city}`,
                                type: 1
                            });
                            names.push({
                                value:`De Sinaloa hacia ${city.city}`
                            })
                        }
                    )
                }
                this.setState({
                    cities: aux,
                    citiesNames: names
                })
           
            }
            
        } catch(err){
            console.log(err);
        }
        

    }
    onSelectedCity (text) {
        let obj = _.find(this.state.cities, {city: text});
        this.props.onSelectedCity(obj);
    }
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.titleText}>Filtrar</Text>
                <Text style={styles.subtitleText}>Seleccione el lugar donde se obtendra la información</Text>
                <Dropdown label="Seleccionar el lugar"
                    data={this.state.citiesNames}
                    containerStyle={styles.pickerContainer}
                    onChangeText = { text => this.onSelectedCity(text)}
                />
                
            </View>
        );
    }
}
const styles = {
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: '10%',
        padding: 15

    },
    titleText: {
        color: config.colors.red,
        fontSize: 25,
        marginLeft: 15,
        marginTop: 15,

    },
    pickerContainer: {
        width: '100%'
    },
    subtitleText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        textAlign:'justify'
    }

};

const mapStateToProps = state => {
    return {
      cities: state.prices.cities,
    };
  };
export default Filter