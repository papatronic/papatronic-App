import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import Swiper from 'react-native-swiper'
import config from '../config';
import Graphic from '../components/Graphic';
import Table from '../components/Table';
import Filter from '../components/Filter';
import { Button } from 'react-native-elements';



class Dashboard extends Component {
    state = { showModal: false }
    static navigationOptions = () => {
        return {
            tabBarVisible: false,

        };

    }
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={() => { this.setState({ showModal: true }) }} >
                        <Image source={config.images.search} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitleText}>
                    Precio por kilogramo:
                </Text>
                <Text style={styles.giantNumberText}>$ 5.08</Text>
                <Text style={styles.subtitleText}>
                    Proximos días:
                </Text>

                <Swiper horizontal showsButtons={false}>
                    <View style={{ flex: 1, marginHorizontal: 30, marginTop: 10 }}>
                        <Table />
                    </View>
                    <View style={{ flex: 1, width: '100%', height: '100%' }}>
                        <Graphic />
                    </View>

                </Swiper>
                <Modal visible={this.state.showModal}  >
                    <View style={{ flex: 1 }}>
                        <Filter />
                        
                    </View>

                </Modal>


            </View>
        );
    }
}
const styles = {
    body: {
        flex: 1,

    },
    headerStyle: {
        width: '100%',
        height: 70,
        backgroundColor: config.colors.red,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    giantNumberText: {
        fontWeight: 'normal',
        fontSize: 40,
        color: config.colors.red,
        alignSelf: 'center',
    },
    subtitleText: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 5
    }
}
export default Dashboard;