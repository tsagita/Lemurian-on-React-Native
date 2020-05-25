import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  I18nManager
} from "react-native";

const styles = StyleSheet.create({
  mainInput: {
    fontSize: 30,
    marginTop: 20,
    padding: 15,
  },
  mainPreview: {
    fontSize: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 15,
    fontFamily: 'lemurian',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row-reverse'
  }
});

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    I18nManager.forceRTL(true);
  }

  convertInput() {
    let str = this.state.text;
    return str.split("").reverse().join("");
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Ketik pesan Anda disini..."
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          style={styles.mainInput}
        />
        <Text style={styles.mainPreview}>
          { this.convertInput() }
        </Text>
      </View>
    );
  }
}
