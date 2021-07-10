import styled from 'styled-components/native'
import {Card} from 'react-native-paper'


export const RestaurantCard = styled(Card)`
    background-color : "rgb(255,255,255)";    
`
export const RestaurantCardCover = styled(Card.Cover)`
     background-color: "rgb(255,255,255)";
     padding-left : ${(props) => props.theme.space[3]};
     padding-right : ${(props) => props.theme.space[3]};
     padding-top : ${(props) => props.theme.space[2]};
     padding-bottom : ${(props)=>props.theme.space[2]};
`
export const Info = styled.View`
    padding-left : ${(props) => props.theme.space[3]};
    padding-right : ${(props) => props.theme.space[3]};     
`

export const Address = styled.Text`
    font-family : ${(props) => props.theme.fonts.body};
    font-Size : ${(props)=>props.theme.fontSizes.caption};   
    padding-top : ${(props)=>props.theme.space[2]};
    color : ${(props)=>props.theme.colors.ui.primary}
`
export const Rating = styled.View`
    flex-direction : row;    
`
export const Open = styled.View`
   flex:1;
   flex-direction : row;
   justify-content : flex-end;   
`
export const Section = styled.View`
    flex-direction : row;
    align-items : center;
`
export const SectionEnd = styled.View`
    flex : 1;
    flex-direction : row;
    justify-content : flex-end;
`