import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FloatingLabelInput from "./component/FloatingInput";
import GradientButton from 'react-native-gradient-buttons';

export default class App extends Component {
    state = {
        email: '',
        password: '',
    };

    handleTextChangeEmail = (newText) => this.setState({email: newText});
    handleTextChangePassword = (newText) => this.setState({password: newText});

    render() {
        return (
            <ImageBackground source={require('./images/fondos.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.centerContainer}>
                    <Image
                        source={require("./images/logo.png")}
                        style={{
                            position: "absolute",
                            top: hp(15),
                            width: wp(80),
                            height: hp(9)
                        }}/>
                    <View>
                        <View style={{position: 'absolute', width: '100%', height: '100%', elevation: 10}}/>
                        <View style={styles.login}>
                            <View style={{flexDirection: "column", flex: 1}}>
                                <FloatingLabelInput
                                    label="E-mail"
                                    value={this.state.email}
                                    onChangeText={this.handleTextChangeEmail}
                                />
                            </View>
                            <View>
                                <FloatingLabelInput
                                    label="Password"
                                    value={this.state.password}
                                    onChangeText={this.handleTextChangePassword}
                                />
                            </View>
                            <View style={styles.loginFingerPrintContainerBlue}>
                                <Text style={styles.LoginFingerPrint}>Login with your Fingerprint</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.forgetContainer}>
                        <Text>Forgot you password!</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonSingIn}>
                        <View style={styles.loginFingerPrintContainer}>
                            <Text style={styles.textButton}>SING ING</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCreateAccount}>
                        <View style={styles.loginFingerPrintContainer}>
                            <Text style={styles.textButtonCreate}>CREATE NEW ACCOUNT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#075E55",
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        padding: 10,
        shadowColor: "green",
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 100,
        backgroundColor: "white",
        width: wp(80),
        height: hp(24),
        borderRadius: 5,
        borderColor: "black",
        elevation: 10
    },
    loginFingerPrintContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginFingerPrintContainerBlue: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 16,
    },
    LoginFingerPrint: {
        color: "#154093",
        fontWeight: "bold"
    },
    buttonSingIn: {
        width: wp(80),
        height: wp(10),
        padding: 10,
        backgroundColor: "#174285",
        borderRadius: 8,
        //backgroundGradientTop: "#174285",
        //backgroundGradientBottom: "#0079AA"
    },
    buttonCreateAccount: {
        width: wp(80),
        height: wp(10),
        backgroundColor: "white",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        position: "absolute",
        bottom: hp(4),
        borderRadius: 8,
    },
    textButton: {
        color: "white",
        fontWeight: "bold"
    },
    textButtonCreate: {
        color: "#154093",
        fontWeight: "bold"
    },
    textForget: {
        color: "#154093"
    },
    forgetContainer: {
        margin: 10
    },
    inputsLogin: {
        height: 40,
        fontSize: 20, color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#555'
    }
});
