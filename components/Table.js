import React, { Component } from 'react';
import { View, Text } from 'react-native';
import config from '../config';

const days = [
    { dia: 'Lunes', fecha: '22-Abril-2019', precio: '8.46' },
    { dia: 'Martes', fecha: '23-Abril-2019', precio: '8.44' },
    { dia: 'Miercoles', fecha: '24-Abril-2019', precio: '8.47' },
    { dia: 'Jueves', fecha: '25-Abril-2019', precio: '8.45' },
    { dia: 'Viernes', fecha: '26-Abril-2019', precio: '8.46' },
    { dia: 'Sabado', fecha: '27-Abril-2019', precio: '8.49' },
    { dia: 'Domingo', fecha: '28-Abril-2019', precio: '8.50' }
]

class Table extends Component {
    renderItems() {
        return days.map(
            day => {
                return (
                    <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 5, marginBottom: 5, flexDirection: 'row', width: '100%',justifyContent:'space-between' }}>
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                            <Text style={{ width: '90%',fontSize:17,marginBottom:10 }}>{day.dia}</Text>
                            <Text style={{ width: '90%' }}>{day.fecha}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%',alignItems:'flex-end'}}>
                            <Text style={{ width: '20%',fontSize:20,color:'gray' }}>$</Text>
                            <Text style={{ width: '70%',fontSize:25,color:config.colors.red}}>{day.precio}</Text>
                        </View>
                    </View>
                );
            }
        )
    }
    render() {
        return (
            <View styles={styles.body}>
                {this.renderItems()}
            </View>
        );
    }
}

const styles = {
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
}

export default Table;