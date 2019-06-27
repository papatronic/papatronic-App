import React,{ Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper  from 'react-native-swiper';
import Filter from '../components/Filter';
import config from '../config';

class Slider extends Component {
    static navigationOptions = () =>{
        return{
            tabBarVisible:false
        }
    }
    render(){
        return(
            <Swiper horizontal showsButtons={false}>
                <View style={{flex:1,width:'100%',height:'100%',justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        Logo, nombres, etc.
                    </Text>
                </View>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        Instrucciones de funcionamiento
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Filter/>
                    <Button title="Comenzar!" onPress={()=> this.props.navigation.navigate('dashboard')} containerStyle={{width:'80%',alignSelf:'center',marginBottom:50}}  titleStyle={{color:'white'}} buttonStyle={{backgroundColor:config.colors.red}} />
                </View>
            </Swiper>
        );
    }
}

const styles = {

}

export default Slider;
