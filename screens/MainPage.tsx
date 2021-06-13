import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import {
    StyleSheet,
    View,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    SafeAreaView
} from 'react-native';

export default class MainPage extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    // handleEmail = (email) => {
    //     this.setState({ email: email })
    // }

    // handlePassword = (password) => {
    //     this.setState({ password: password })
    // }

    login = () => {
    }
    signUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <Image source={require('../assets/images/pometo.png')} 
                 style={styles.myImage}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => this.login()}
                >
                    <Text style={styles.loginText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => this.signUp()}
                >
                    <Text style={styles.loginText}> Sign Up </Text>
                </TouchableOpacity>
            </View>            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
    },
    myImage: {
        width: 400,
        height: 370,
        marginTop:1,
    },
    loginContainer: {
        flex: 1,
        justifyContent: "flex-start", 
        alignItems: 'center',
        marginBottom: 1,
        marginTop: 1,
        backgroundColor:'#9896f1',
    },
    loginButton: {
        backgroundColor: '#6b5b95',
        justifyContent: "center", 
        borderRadius: 20,
        padding: 1,
        marginTop:100,
        margin: 15,
        height: 40,
        width: 200,
        alignItems: 'center',
    },

    signUpButton: {
        backgroundColor: '#6b5b95',
        justifyContent: "center", 
        borderRadius: 20,
        padding: 1,
        marginTop:10,
        margin: 15,
        height: 40,
        width: 200,
        alignItems: 'center',
    },
    loginText: {
        color: '#fff8dc',
        fontFamily: 'Gill Sans',
        fontSize: 20,
    }
})