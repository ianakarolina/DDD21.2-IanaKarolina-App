import React from 'react'
import colors from '../../constants/colors';
import {InputText} from './styles'

const Input = ({width,placeholder}) => {
    return (
    <InputText width={width} placeholder={placeholder} selectionColor={colors.secundaria} />
    );
};

export default Input;
