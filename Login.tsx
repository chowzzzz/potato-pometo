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

export default class Login extends Component {
    constructor(props) {
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
    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <Image source={require('./assets/images/pometo.png')} 
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
            
            // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            //     <SafeAreaView style={styles.container}>
            //         <StatusBar barStyle="dark-content" backgroundColor="#000000"/>
            //         <Image source={{uri: 'https://i.imgur.com/l8cADUr.png'}}
            //                style={styles.myImage}
            //         />
            //         <View style={styles.inputs}>
            //             <Icon name="email" size={16} style={styles.emailIcon}/>
            //             <TextInput style={styles.emailBox}
            //                        placeholder="Email"
            //                        autoCapitalize="none"
            //                        autoCorrect={false}
            //                        textContentType={'emailAddress'}
            //                        onChangeText={this.handleEmail}/>
            //         </View>
            //         <View style={styles.inputs}>
            //             <Icon name="locked" size={16} style={styles.passwordIcon}/>
            //             <TextInput style={styles.passwordBox}
            //                        placeholder="Password"
            //                        autoCapitalize="none"
            //                        autoCorrect={false}
            //                        secureTextEntry={true}
            //                        textContentType={'password'}
            //                        onChangeText={this.handlePassword}/>
            //         </View>
            //         <View style={styles.loginContainer}>
            //             <TouchableOpacity
            //                 style={styles.loginButton}
            //                 onPress={() => this.login()}
            //             >
            //                 <Text style={styles.loginText}> Login </Text>
            //             </TouchableOpacity>
            //         </View>
            //         <Text
            //             style={styles.forgotPasswordText}
            //             onPress={() => this.props.navigation.navigate('ForgotPassword')}
            //         >Forgot password? </Text>
            //         <View style={styles.inputs}>
            //             <Text style={styles.signUpText}>No account? Sign up </Text>
            //             <Text
            //                 style={styles.hereText}
            //                 onPress={() => this.props.navigation.navigate('SignUp')}
            //             >here </Text>
            //         </View>
            //     </SafeAreaView>
            // </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
    },
    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myImage: {
        width: 400,
        height: 370,
        marginTop:1,
    },
    emailIcon: {
        marginLeft: 30,
        marginBottom: -10,
    },
    emailBox: {
        height: 40,
        color: 'black',
        marginLeft: -45,
        borderBottomColor: 'grey',
        fontSize: 16,
        borderBottomWidth: 2,
        width: '80%',
        textAlign: 'center',
        fontFamily: 'Futura',
        alignItems: 'center',
        marginTop: 10,
    },
    passwordIcon: {
        marginLeft: 30,
        marginBottom: -30,
    },
    passwordBox: {
        height: 40,
        marginTop: 30,
        color: 'black',
        marginLeft: -45,
        borderBottomColor: 'grey',
        fontSize: 16,
        borderBottomWidth: 2,
        width: '80%',
        textAlign: 'center',
        fontFamily: 'Futura',
        alignItems: 'center',
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
    },
    forgotPasswordText: {
        fontFamily: 'Futura',
        color: 'black',
        textDecorationLine: 'underline',
        marginTop: 50,
        fontSize: 16,
        marginBottom: -40,
    },
    signUpText: {
        fontFamily: 'Futura',
        color: 'black',
        marginTop: 50,
        fontSize: 16,
        marginBottom: -40,
    },
    hereText: {
        fontFamily: 'Futura',
        color: 'black',
        textDecorationLine: 'underline',
        marginTop: 50,
        fontSize: 16,
        marginBottom: -40,
    }
})