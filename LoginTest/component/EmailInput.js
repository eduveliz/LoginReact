import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';


export default class EmailInput extends Component {
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
                    this.state.isFocused && !this.props.email &&
                    <Text style={labelStyle}>
                        {label}
                    </Text>
                }
                <View>
                    <TextInput
                        {...props}
                        placeholder={this.state.isFocused ? " " : "Email"}
                        style={{
                            height: 40,
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#154093",
                            borderBottomWidth: this.state.isFocused ? 4 : 1,
                            borderColor: "#154093",
                            borderBottomColor: !this.state.isFocused ? '#555' : "#154093",
                        }}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    {
                        this.state.isFocused &&
                        <TouchableOpacity
                            onPress={() => {
                                this.props.cleanEmail()
                            }}
                            style={{position: 'absolute', right: 0}}>
                            <Image source={require('../images/Cancel.png')}
                                   style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
}