import React from 'react'
import { 
        Container, 
        Title,
        Logo,
        Text,
    } from './styles'

import Button from '../../src/components/Button'
import Input from '../../src/components/Input'
import SilverLogo from '../../src/assets/Logo.png'

import {screenHeight, screenWidth} from '../../src/constants/dimensions'
import colors from '../../src/constants/colors'

const Cadastro = () => {
    return (
        <Container> 
            <Logo resizeMode='contain' source={SilverLogo}/>
        </Container>

    );
};

export default Cadastro