import React from 'react'
import { View, ViewPagerAndroidComponent } from 'react-native'
import styled,{useTheme} from 'styled-components/native'

// export const LeftSmall = styled.View`
//     margin-left : ${(props)=>props.theme.space[1]}
// `
// export const LeftMedium = styled.View`
//     margin-left : ${(props)=>props.theme.space[2]}
// `
// export const LeftLarge = styled.View`
//     margin-left : ${(props)=>props.theme.space[3]}
// `
// export const LeftV1Large = styled.View`
//     margin-left : ${(props)=>props.theme.space[4]}
// `
// export const LeftV2Large = styled.View`
//     margin-left : ${(props)=>props.theme.space[5]}
// `

// export const RightSmall = styled.View`
//     margin-right : ${(props)=>props.theme.space[1]}
// `
// export const RightMedium = styled.View`
//     margin-right : ${(props)=>props.theme.space[2]}
// `
// export const RightLarge = styled.View`
//     margin-right : ${(props)=>props.theme.space[3]}
// `
// export const RightV1Large = styled.View`
//     margin-right : ${(props)=>props.theme.space[4]}
// `
// export const RightV2Large = styled.View`
//     margin-right : ${(props)=>props.theme.space[5]}
// `








const sizeVariant = {
    small: 1,
    medium: 2,
    large : 3
}

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom'
}

const getVariant = (position, size,theme ) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];   
    return `${property} : ${value}`; // marginLeft : theme.space[2]
} 

const SpacerView = styled.View`
    ${({variant})=>variant}
`

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return (
        <SpacerView variant={variant}>
            {children}
        </SpacerView>
    )
}


Spacer.defaultProps = {
    position :  "top",
    size: "small",    
}