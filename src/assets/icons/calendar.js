import React from "react";
import {
    Svg,
    Path,
    G
} from "react-native-svg";

export function Calendar(props) {
    const { color } = props;
    return (
        <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32" width={29} height={32}>
            <G clipPath="url(#cp1)">
                <Path fill={color ? color : "#1d2f6f"} fillRule="evenodd" class="a" d="m29 0.5v30.9h-28.9v-30.9h3.8v1.9h3.9v-1.9h13.5v1.9h3.8v-1.9zm-1.9 7.7h-25.1v21.2h25.1zm-5.8 3.9h3.9v3.8h-3.9zm-17.3 11.6h3.8v3.9h-3.8zm5.8 0h3.8v3.8h-3.8zm5.7 0h3.9v3.9h-3.9zm-5.7-5.8h3.8v3.8h-3.8zm5.7 0h3.9v3.9h-3.9zm5.8 0h3.9v3.9h-3.9zm-17.3 0h3.8v3.8h-3.8zm5.8-5.8h3.8v3.9h-3.8zm5.7 0h3.9v3.8h-3.9z" />
            </G>
        </Svg>
    )
}