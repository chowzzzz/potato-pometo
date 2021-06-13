
import { any } from 'prop-types';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import Navigation from '../navigation';
export default class SignUp extends Component<any> {
    constructor(props:any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordMeterShown: false,
            passwordTooShort: false,
            samePasswords: true,
        }
    }
    handleName = (name: any) => {
        this.setState({ name: name })
    }

    handleEmail = (email: any) => {
        this.setState({ email: email })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ backgroundColor: '#9896f1' }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Sign Up With Us</Text>
                        <View style={styles.inputs}>
                            {/* <Icon1 name="face" size={20} style={styles.nameIcon} /> */}
                            <TextInput style={styles.nameBox}
                                placeholder="Display Name"
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                textContentType={'name'}
                                onChangeText={this.handleName} />
                        </View>
                        <View style={styles.inputs}>
                            {/* <Icon name="email" size={16} style={styles.emailIcon} /> */}
                            <TextInput style={styles.emailBox}
                                placeholder="Email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType={'emailAddress'}
                                onChangeText={this.handleEmail} />
                        </View>
                        <View style={styles.inputs}>
                            {/* <Icon name="email" size={16} style={styles.emailIcon} /> */}
                            <TextInput style={styles.emailBox}
                                placeholder="Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType={'newPassword'}
                                onChangeText={this.handlePassword} />
                        </View>

                        <View>
                        <TouchableOpacity>
                       <Text onPress={() => this.props.navigation.navigate('MainPage')}>Back to Login</Text>
                    </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )

    }


}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        backgroundColor: '#9896f1',
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameBox: {
        height: 40,
        color: 'black',
        marginLeft: -45,
        borderBottomColor: 'grey',
        fontSize: 16,
        borderBottomWidth: 2,
        width: '80%',
        textAlign: 'center',        
        alignItems: 'center',
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
        alignItems: 'center',
        marginTop: 22,
    },
    passwordBox: {
        height: 40,
        marginTop: 20,
        color: 'black',
        marginLeft: -45,
        fontSize: 16,
        borderBottomWidth: 2,
        width: '80%',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    signUpButton: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        margin: 15,
        marginTop: 40,
        height: 40,
        width: 200,
        alignItems: 'center',
        marginBottom: -30,
    },
    signUpText: {
        fontFamily: 'Gill Sans',
        color: 'white',
    },
    loginText: {
        fontFamily: 'Gill Sans',
        color: 'black',
        marginTop: 50,
        fontSize: 16,
        marginBottom: -60,
    },
})