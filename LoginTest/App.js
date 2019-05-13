import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import EmailInput from "./component/EmailInput";
import LinearGradient from "react-native-linear-gradient";
import PasswordInput from "./component/PasswordInput";

export default class App extends Component {
    state = {
        email: '',
        password: '',
        isVisible: true
    };

    handleTextChangeEmail = (newText) => this.setState({email: newText});
    handleTextChangePassword = (newText) => this.setState({password: newText});

    cleanEmail = () => {
        this.setState({email: ""})
    };

    showPassword = () => {
        this.setState({isVisible: !this.state.isVisible})
    };

    render() {
        const isPortrait = () => {
            const dim = Dimensions.get('window');
            if (dim.height >= dim.width) {
                return true;
            } else {
                return false;
            }
        };

        return (
            <ImageBackground source={require('./images/fondos.png')} style={{width: '100%', height: '100%'}}>
                <TouchableOpacity onPressIn={Keyboard.dismiss()}>
                    <View style={styles.centerContainer}>
                        <Image
                            source={require("./images/logo.png")}
                            style={isPortrait() ? styles.logo : tablet.logo}/>
                        <View>
                            <View style={{position: 'absolute', width: '100%', height: '100%', elevation: 10}}/>
                            <View style={isPortrait() ? styles.login : tablet.login}>
                                <View style={{flexDirection: "column", flex: 1}}>
                                    <EmailInput
                                        label="E-mail"
                                        value={this.state.email}
                                        cleanEmail={this.cleanEmail}
                                        onChangeText={this.handleTextChangeEmail}
                                        email={this.state.props}
                                    />
                                </View>
                                <View style={{marginTop: 60}}>
                                    <PasswordInput
                                        label="Password"
                                        value={this.state.password}
                                        onChangeText={this.handleTextChangePassword}
                                        isVisible={this.state.isVisible}
                                        showPassword={this.showPassword}
                                        password={this.state.password}
                                    />
                                </View>
                                <View style={styles.loginFingerPrintContainerBlue}>
                                    <Text style={styles.LoginFingerPrint}>Login with your Fingerprint</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.forgetContainer}>
                            <Text style={styles.LoginFingerPrint}>Forgot you password?</Text>
                        </View>
                        <TouchableOpacity>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#174285', "#0079AA"]}
                                            style={isPortrait() ? styles.buttonSingIn : tablet.buttonSingIn}>
                                <View style={styles.loginFingerPrintContainer}>
                                    <Text style={styles.textButton}>SING IN</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={isPortrait() ? styles.buttonCreateAccount : tablet.buttonCreateAccount}>
                            <View style={styles.loginFingerPrintContainer}>
                                <Text style={isPortrait ? styles.textButtonCreate : tablet.textButtonCreate}>
                                    CREATE NEW ACCOUNT
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        )
            ;
    }
}

const styles = StyleSheet.create({
    logo: {
        position: "absolute",
        top: hp(15),
        width: wp(80),
        height: hp(9)
    },

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
        padding: 20,
        backgroundColor: "white",
        width: wp(80),
        height: hp(24),
        borderRadius: 15,
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
        height: wp(13),
        padding: 10,
        backgroundColor: "#174285",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCreateAccount: {
        width: wp(80),
        height: wp(13),
        backgroundColor: "white",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        position: "absolute",
        bottom: hp(4),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: "white",
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

const tablet = StyleSheet.create({
    logo: {
        position: "absolute",
        top: hp(15),
        width: wp(41),
        height: hp(13)
    },
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
        padding: 20,
        backgroundColor: "white",
        width: wp(38),
        height: hp(24),
        borderRadius: 20,
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
        width: wp(38),
        height: wp(5),
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#174285",
        borderRadius: 50,
    },
    buttonCreateAccount: {
        width: wp(38),
        height: wp(5),
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
        position: "absolute",
        bottom: hp(20),
        borderRadius: 50,
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