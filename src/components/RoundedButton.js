import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export const RoundedButton =  ( { style = {}, textStyle = {}, size = 125, ...props}) => {
  console.log(size)
  return (
    <TouchableOpacity onPress = {props.onPress} style = {[styles(size).radius, style]}>
        <Text style={[styles(props.size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
};

const styles = (size) => StyleSheet.create({
  radius: {
    borderRadius: size/2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: "center",
    borderColor: "yellow",
    borderWidth: 2
  },
  text: {
    color: 'yellow',
    fontSize: size/3
  }
})