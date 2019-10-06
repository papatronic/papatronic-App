import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckBox } from 'react-native-elements';
import config from '../config';
import { connect } from 'react-redux';
import {
    getPrices,
 getCities
} from '../redux/actions';

class Filter extends Component {
    state ={
        citiesNames: [],
        type: 0,
        cities: []
    }
    async componentWillMount(){
        //let { data } = await axios.get(`${URL_ROOT}/get-cities`);
        let aux=[
            {
                city: "Ejemplo 1",
                id: 1
            },
            {
                city: "Ejemplo 2",
                id: 2
            },
            {
                city: "Ejemplo 3",
                id: 3
            }
        ];
        this.setState({cities:aux})
        let citiesNamesArray = [];
        if(aux.length >0){
            aux.map( 
                cityObj =>{
                    citiesNamesArray.push({value: cityObj.city});
                }
            )
        };
        console.log(citiesNamesArray);
        this.setState({citiesNames: citiesNamesArray});
    }
    onChangeType(type){
        this.setState({type: type});
        this.props.onChangedType(type);
    }
    onSelectedCity (text) {
        let obj = _.find(this.state.cities, {city: text});
        this.props.onSelectedCity(obj.id);
    }
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.titleText}>Filtrar</Text>
                <Dropdown label="Seleccionar el lugar"
                    data={this.state.citiesNames}
                    containerStyle={styles.pickerContainer}
                    onChangeText = { text => this.onSelectedCity(text)}
                />
                <Text style={styles.subtitleText}>El lugar donde se obtendra la información</Text>
                <View style={{ flexDirection: 'row', width:'80%', justifyContent:'space-between',marginTop:15}}>
                    <CheckBox
                        center
                        title='Origen'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{backgroundColor:'transparent',borderColor:0}}
                        onPress={()=> this.onChangeType(0)}
                        checked={this.state.type==0? true: false}
                    />
                    <CheckBox
                        center
                        title='Destino'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.type==1? true: false}
                        onPress={()=> this.onChangeType(1)}
                        containerStyle={{backgroundColor:'transparent',borderColor:0}}
                    />
                </View>
                
            </View>
        );
    }
}
const styles = {
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 15

    },
    titleText: {
        color: config.colors.red,
        fontSize: 25,
        marginLeft: 15,
        marginTop: 15,

    },
    pickerContainer: {
        width: '80%'
    },
    subtitleText: {
        fontSize: 15,
        color: 'lightgray',
        fontWeight: '400'
    }

};

const mapStateToProps = state => {
    return {
      cities: state.prices.cities,
    };
  };
export default Filter