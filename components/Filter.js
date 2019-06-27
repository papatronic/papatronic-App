import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckBox, Button } from 'react-native-elements'
import { Calendar } from 'react-native-calendars';
import config from '../config'

class Filter extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.titleText}>Filtrar</Text>
                <Dropdown label="Seleccionar el lugar"
                    data={[
                        { value: 'Culiacán' },
                        { value: 'Tijuana' }
                    ]}
                    containerStyle={styles.pickerContainer}

                />
                <Text style={styles.subtitleText}>El lugar donde se obtendra la información</Text>
                <Text style={[styles.subtitleText, { marginTop: 20, alignSelf: 'flex-start', marginLeft: '10%',color:'gray', fontSize: 18 }]}>Selecciona fecha</Text>
                <Calendar style={{ marginTop: 10, borderColor: 'gray', borderWidth: 1, width: '80%' }} 
                current={'2019-04-21'}
                theme={{
                    arrowColor:config.colors.red,
                    selectedDayBackgroundColor:config.colors.red,
                    selectedDayTextColor:'white',
                    todayTextColor:config.colors.red
                }}
                 />
                <View style={{ flexDirection: 'row', width:'80%', justifyContent:'space-between',marginTop:15}}>
                    <CheckBox
                        center
                        title='Origen'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{backgroundColor:'transparent',borderColor:0}}
                        checked={true}
                    />
                    <CheckBox
                        center
                        title='Destino'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={false}
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

export default Filter;