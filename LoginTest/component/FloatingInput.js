import React, {Component} from 'react';
import {Button, ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


export default class FloatingLabelInput extends Component {
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
            top: !isFocused ? 18 : 0,
            fontSize: !isFocused ? 20 : 14,
            color: !isFocused ? '#aaa' : '#000',
        };
        return (
            <View style={{paddingTop: 18}}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput
                    {...props}
                    style={{
                        height: 40,
                        fontSize: 20,
                        color: "#154093",
                        borderBottomWidth: 1,
                        borderBottomColor: '#555'
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </View>
        );
    }
}