/**
 * Created by tommy.hu on 2018/3/5.
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ToastAndroid,
    ViewPagerAndroid,
    Image,
    View
} from 'react-native';

export default class NavButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
module.exports = NavButton;

const styles = StyleSheet.create({
    button:{

    },
    buttonText:{

    }
});