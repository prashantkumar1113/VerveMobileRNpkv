import React from "react";
import {
    Svg,
    Path
} from "react-native-svg";

export function Clock() {
    return (
        <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={18} height={18}>
            <Path fillRule="evenodd" fill="#fff" class="a" d="m17.1 8.8c0 4.6-3.7 8.3-8.3 8.3-4.5 0-8.2-3.7-8.2-8.3 0-4.5 3.7-8.2 8.2-8.2 4.6 0 8.3 3.7 8.3 8.2zm-5.8 3.3l0.9-1.3c0.1-0.1 0.1-0.4-0.1-0.5l-2.1-1.6v-4.5c0-0.3-0.2-0.4-0.4-0.4h-1.6c-0.2 0-0.4 0.1-0.4 0.4v5.6q0 0.2 0.2 0.3l2.9 2.1c0.2 0.1 0.4 0.1 0.6-0.1z" />
        </Svg>
    )
}