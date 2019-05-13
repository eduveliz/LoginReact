import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';


export default class PasswordInput extends Component {
    state = {
        isFocused: false,
    };

    handleFocus = () => this.setState({isFocused: true});
    handleBlur = () => this.setState({isFocused: false});

    render() {
        const {label, ...props} = this.props;
        const {isFocused} = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: !isFocused ? 10 : 0,
            fontSize: !isFocused ? 17 : 11,
            color: !isFocused ? '#aaa' : '#000',
        };
        return (
            <View style={{paddingTop: 18}}>
                {
                    this.state.isFocused && !this.props.password &&
                    <Text style={labelStyle}>
                        {label}
                    </Text>
                }
                <View>
                    <TextInput
                        placeholder={this.state.isFocused ? " " : "Password"}
                        {...props}
                        style={{
                            height: 40,
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#154093",
                            borderBottomWidth: this.state.isFocused ? 4 : 1,
                            borderBottomColor: !this.state.isFocused ? '#555' : "#154093",
                        }}
                        onFocus={this.handleFocus}
                        secureTextEntry={this.props.isVisible}
                        onBlur={this.handleBlur}
                    />
                    {
                        this.state.isFocused &&
                        <TouchableOpacity
                            onPress={() => {
                                this.props.showPassword()
                            }}
                            style={{position: 'absolute', right: 0}}>
                            <Image source={require('../images/vision.png')}
                                   style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
}