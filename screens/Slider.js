import React,{ Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper  from 'react-native-swiper';
import Filter from '../components/Filter';
import config from '../config';
import Axios from 'axios';

class Slider extends Component {
    state ={
        city: null,
        type: 0,
        searching:false,
        selected: false
    }
    static navigationOptions = () =>{
        return{
            tabBarVisible:false
        }
    }
    async onButonClick(){
        this.setState({searching:true})
        let { data } = await Axios.post(config.urls.predict,{
            type: this.state.city.type,
            id:this.state.city.id
        });
        this.setState({searching:true})
        this.props.navigation.navigate('dashboard', {prices: data});
    }
    render(){
        return(
            <Swiper loop={false} horizontal showsButtons={false}>
                <View style={{flex:1,width:'100%',height:'100%',justifyContent:'center', alignItems:'center'}}>
                    <Image  source={config.images.logo} style={{width:'90%',marginBottom:30}} />
                    <Text style={{fontSize:20 }} >
                        Papatronic
                    </Text>
                </View>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        Instrucciones de funcionamiento
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Filter
                        onSelectedCity = {city => this.setState({city: city, selected: true})}
                    />
                    <Button disabled= { !this.state.selected? true: false} loading={this.state.searching}  title="Comenzar!" onPress={()=> this.onButonClick()} containerStyle={{width:'80%',alignSelf:'center',marginBottom:50}}  titleStyle={{color:'white'}} buttonStyle={{backgroundColor:config.colors.red}} />
                </View>
            </Swiper>
        );
    }
}

const styles = {

}

export default Slider;
