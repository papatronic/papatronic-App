import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Slider from '../screens/Slider';
import Dashboard from '../screens/Dashboard';



const MainStack = createBottomTabNavigator({
    slider:{ screen: Slider},
    dashboard: {screen: Dashboard},
})

export default createAppContainer(MainStack);