// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var ReactNative = require("react-native");

function get(name) {
  return ReactNative.NativeModules[name];
}

function requireNativeComponent(name) {
  return ReactNative.requireNativeComponent(name, null);
}

exports.get = get;
exports.requireNativeComponent = requireNativeComponent;
/* react-native Not a pure module */