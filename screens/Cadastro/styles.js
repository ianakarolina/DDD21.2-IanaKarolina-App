import styled from "styled-components/native";

import { screenHeight, screenWidth} from "../../src/constants/dimensions";
import colors from "../../src/constants/colors";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
`;

export const Logo = styled.Image`
    width: 133px;
    height: 133px;
    align-items: center;
    margin-top: 80px;
    margin-left: 20px;
`;


