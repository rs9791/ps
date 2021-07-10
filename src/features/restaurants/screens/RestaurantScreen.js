import React,{useContext} from "react";
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from '../components/RestaurantInfoComponent'
import styled from 'styled-components/native'
import { RestaurantCard } from "../components/RestaurantInfoStyles";
import { Spacer } from '../../../components/spacer/spacerComponent'
import { SafeArea } from "../../../components/utility/safeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`    
    padding: ${(props)=>props.theme.space[3]};
    background-color: "rgb(255,255,255)";
    width: 360px;   
`
const SearchList = styled.View`
    flex: 1;
    padding: ${(props)=>props.theme.space[3]};
    background-color: "rgb(255,255,255)";
    width: 360px;
    height: 0px
`
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding : 2
  }
})``

export const RestaurantScreen = () => {
  const {isLoading,error,restaurants}=useContext(RestaurantsContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <SearchList>
      <RestaurantList
        data={restaurants}
          renderItem={({ item }) => {           
            return(
            <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item}/>
              </Spacer>
            )
          }}

          
        keyExtractor={(item) => item.name}        
        />
       </SearchList>
      
    </SafeArea>
  );
};




