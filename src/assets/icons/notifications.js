import React from "react";
import {
    Svg,
    Path,
    G
} from "react-native-svg";

export function Notifications({ }) {
    return (
        <Svg version="1.2" viewBox="0 0 15 20" width={18} height={23}>
            <G clipPath="url(#cp1)">
                <Path fill="#fff" class="a" d="m4.8 17.1h4.8c0 1.5-0.8 2.6-2.4 2.6-1.5 0-2.4-1.1-2.4-2.6z" />
                <Path fill="#fff" class="a" d="m13.6 16.1h-6.3-6.4c-0.7 0-1.2-0.9-0.7-1.5 0.7-1 2.1-1.6 2.1-6 0-4.5 1.8-6.3 3.6-6.7 0.1 0 0.2-0.1 0.2-0.3v-0.1c0-0.7 0.5-1.2 1.1-1.2 0.6 0 1.1 0.5 1.1 1.2v0.1c0 0.2 0.2 0.3 0.3 0.3 1.8 0.4 3.6 2.2 3.6 6.7 0 4.4 1.4 5 2.1 6 0.4 0.6 0 1.5-0.7 1.5z" />
            </G>
        </Svg>
    )
}