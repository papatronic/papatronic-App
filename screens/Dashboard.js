import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    Modal,
    Platform, 
    SafeAreaView 
} from 'react-native'
import Swiper from 'react-native-swiper'
import config from '../config';
import Graphic from '../components/Graphic';
import Table from '../components/Table';
import Filter from '../components/Filter';
import { Button } from 'react-native-elements';



class Dashboard extends Component {
    state = { 
        showModal: false,
        city: null,
        type: 0,
        searching:false,
        prices: []
     }
    static navigationOptions = () => {
        return {
            tabBarVisible: false,

        };

    }
    componentWillMount(){
        let prices = this.props.navigation.getParam('prices');
        this.setState({prices: prices});
    }
    onSearchPrices(){
        this.setState({searching:true})
        // let { data } = await axios.post(`${URL_ROOT}/predict`,{
        //     type: this.state.type,
        //     id:this.state.city
        // })
        this.setState({showModal:false,searching:false});
        
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
                <Text style={styles.giantNumberText}>{'$ '+Number(this.state.prices[0]).toFixed(2)}</Text>
                <Text style={styles.subtitleText}>
                    Proximos días:
                </Text>

                <Swiper horizontal showsButtons={false} loop={false}>
                    <View style={{ flex: 1, marginHorizontal: 30, marginTop: 10 }}>
                        <Table  
                            data={this.state.prices}
                        />
                    </View>
                    <View style={{ flex: 1, width: '100%', height: '100%' }}>
                        <Graphic 
                            data={this.state.prices}
                        />
                    </View>

                </Swiper>
                <Modal visible={this.state.showModal}  >
                    <View style={{ flex: 1 }}>
                        <Filter
                            onSelectedCity = {city => this.setState({city: city})}
                            onChangedType = { type => this.setState({type: type}) }
                        />
                        <Button disabled= { this.state.city? true: false} loading={this.state.searching}  title="Buscar" onPress={() => this.onSearchPrices() } containerStyle={{ width: '80%', alignSelf: 'center', marginBottom: 50 }} titleStyle={{ color: 'white' }} buttonStyle={{ backgroundColor: config.colors.red }} />
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