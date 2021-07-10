import {
  StatusBar, 
  SafeAreaView, 
} from "react-native";
import styled from 'styled-components/native'

const isAndroid = Platform.OS === "android";
const currentHeight = StatusBar.currentHeight;

export const SafeArea = styled(SafeAreaView)`
   flex : 1;
   width: 500px;
   height: 800px;
   background-color: "rgb(255,255,255)";
   /*marginTop : ${isAndroid ? currentHeight : 0}px   */
   marginTop : ${StatusBar.currentHeight}px
`