import { Animated, Dimensions, TouchableOpacity, StyleSheet, FlatList, TextInput } from "react-native";
import React, { useEffect } from 'react';
import { colors } from "react-native-elements";
const { width, height } = Dimensions.get('window');
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';

export default function GamerTimer() {
    const [duration, setDuration] = React.useState(3);
    const timers = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
    const timerAnimation = React.useRef(new Animated.Value(height)).current;
    const textInputAnimation = React.useRef(new Animated.Value(timers[0])).current;
    const buttonAnimation = React.useRef(new Animated.Value(0)).current;
    const inputRef = React.useRef();
    const navigation = useNavigation();
    React.useEffect(() => {
        const listener = textInputAnimation.addListener(({ value }) => {
            inputRef?.current?.setNativeProps({
                text: Math.ceil(value).toString()
            })
        })

        return () => {
            textInputAnimation.removeListener(listener);
            textInputAnimation.removeAllListeners();
        }
    })

    // function animation(){ React.useCallback(() => {

    const animation = React.useCallback(() => {
        textInputAnimation.setValue(duration);
        setTimeout(() => { navigation.navigate("PlayQuiz") }, 3000);
        Animated.sequence([
            Animated.timing(buttonAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.timing(timerAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.parallel([
                Animated.timing(timerAnimation, {
                    toValue: height,
                    duration: duration * 1000,
                    useNativeDriver: true
                }),
                Animated.timing(textInputAnimation, {
                    toValue: 0,
                    duration: duration * 1000,
                    useNativeDriver: true
                }),

            ]),
            Animated.timing(timerAnimation, {
                toValue: height,
                duration: duration * 1000,
                useNativeDriver: true
            })
        ]).start(() => {
            // buttonAnimation.setValue(0);
            Animated.timing(buttonAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        })
    }, [duration])


    const opacity = buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    })
    const translateY = buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
    })
    const colors = {
        purple: "#c4c3f7"
    }



    return (

        <View>
            <View>
                {animation}

                <Animated.View style={[{
                    height,
                    width,
                    backgroundColor: colors.purple,
                    transform: [{
                        translateY: timerAnimation
                    }]
                }]}>

                </Animated.View>
                <Animated.View style={[{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    opacity,
                    transform: [{
                        translateY
                    }]
                }]}>

                </Animated.View>

                <View
                    style={{
                        position: 'absolute',
                        top: height / 3,
                        left: 0,
                        right: 0,
                        flex: 1,
                    }}>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            width: 250,
                            justifyContent: 'content',
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity
                            ref={inputRef} onPress={animation} >
                            <Text style={{
                                color: 'black',
                                fontSize: 35,
                            }}>
                                Start timer! 😊
                            </Text>
                        </TouchableOpacity>
                        <TextInput ref={inputRef}
                            style={{
                                fontSize: 30,
                                marginLeft: 350,
                            }}
                            defaultValue={duration.toString()}
                        />
                    </Animated.View>
                    {/* <Animated.FlatList
                    data={timers}
                    keyExtractor={item => item.toString()}
                    onMomentumScrollEnd={ev=> {
                        const index = Math.floor(ev.nativeEvent.contentOffset.x/ 7);
                        setDuration(timers[index]);
                    }}
                    renderItem={({item})=>{
                        return <Animated.View>
                            <Animated.Text>
                                {item}
                            </Animated.Text>
                        </Animated.View>
                    }}>
                </Animated.FlatList> */}
                </View>


            </View>






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
        height: '100%',
        marginBottom: 50,
    }
});