import { Animated, Dimensions, TouchableOpacity,StyleSheet } from "react-native";
import * as React from 'react';
import { colors } from "react-native-elements";
const {width,height} = Dimensions.get('window');
import { Text, View } from '../components/Themed';

export default function GamerTimer(){
    const [duration, setDuration] = React.useState(0);
    const timerAnimation = React.useRef(new Animated.Value(height)).current;
    const buttonAnimation = React.useRef(new Animated.Value(0)).current;
    const animation = React.useCallback(()=> {
        Animated.sequence([
            Animated.timing(buttonAnimation,{
                toValue:1,
                duration: 300,
                useNativeDriver: true
            }), 
            Animated.timing(timerAnimation,{
                toValue:0,
                duration: 300,
                useNativeDriver: true
            }),         
            Animated.timing(timerAnimation,{
                toValue:height,
                duration: duration *1000,
                useNativeDriver: true
            })
        ]).start(()=>{
            // buttonAnimation.setValue(0);
            Animated.timing(buttonAnimation,{
                toValue:0,
                duration: 300,
                useNativeDriver: true
            }).start()
        })
    },[duration])
    const opacity = buttonAnimation.interpolate({
        inputRange:[0,1],
        outputRange:[0,1],
    })
    return(
        <View>
            <Animated.View style={[styles.absoluteFillObject,{
                height,
                width,
                backgroundColor:colors.grey4,
                transform:[{
                    translateY:timerAnimation
                }]
            }]}>                
            </Animated.View>
            <TouchableOpacity onPress={animation}/>
        </View>

    )
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	buttonStyle: {
		marginTop: 200,
		padding: 10,
		width: '100%',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#c4c3f7',
		marginBottom: -100
	  },
	absoluteFillObject: {
	  width: 350,
	  height: 200,
	  marginBottom: 50,
	}
});