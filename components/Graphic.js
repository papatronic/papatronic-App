import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BarChart,LineChart} from 'react-native-chart-kit';
import { ECharts } from "react-native-echarts-wrapper";
import config from '../config';

const data = {
    labels: ['Lun', 'Mar', 'Mier', 'Juev', 'Vier', 'Sab','Dom'],
    horizontalLabes:false,
    datasets: [{
        data: [10.50,11 , 10.90, 11, 10.60, 11],
        labels:[]
    }],
    config:{
        fillColor: config.colors.red,
        yAxis:null
    }
}

const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line"
      }
    ]
  };
const chartConfig = {
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    barColor:'red',
    color: () => config.colors.red,
    barColors:config.colors.red,
    strokeWidth: 2,
    
     // optional, default 3
}
class Graphic extends Component {
    render() {
        return (
            <View style={styles.body}>
                <LineChart
                    data={data}
                    width={350}
                    height={600}
                    svg={{ fill: config.colors.red }}
                    chartConfig={chartConfig}
                    yAxisLabel={false}
                    fromZero={false}
                    withDots={true}
                    yAxisLabel="$"
                    //bezier
                    // withShadow={false}
                    // withInnerLines={false}
                    // withOuterLines={false}
                    style={{
                        backgroundColor:'white'
                    }}
                />
                {/* <ECharts
                    legacyMode
                    option={option}>
                </ECharts> */}
            </View>
        );
    }
}

const styles = {
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Graphic;