import React from "react";
import {
    Svg,
    Path,
    G
} from "react-native-svg";

export function Drawer({ }) {
    return (
        <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 24" width={28} height={22}>
            <G clipPath="url(#cp1)">
                <Path class="a" d="m20 22h-18" fill="none" stroke="#fff" strokeWidth={4} />
                <Path class="a" d="m20 2h-18" fill="none" stroke="#fff" strokeWidth={4} />
                <Path class="a" d="m27 12h-25" fill="none" stroke="#fff" strokeWidth={4} />
            </G>
        </Svg>
    )
}