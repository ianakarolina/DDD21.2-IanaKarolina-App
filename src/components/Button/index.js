import React from 'react';
import {View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import {Container, ButtonText} from './styles'

const Button = ({width,height,text,backgroundcolor,radius,margintop,border}) => {
    return <Container width={width} height={height} backgroundcolor={backgroundcolor} radius={radius} margintop={margintop} border={border}>
        <ButtonText>{text}</ButtonText>
    </Container>
}

export default Button;