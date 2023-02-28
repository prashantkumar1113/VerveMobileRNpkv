import React from "react";
import {
    Svg,
    Path
} from "react-native-svg";

export function Note({ }) {
    return (
        <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" width={13} height={17}>
            <Path fill="#fff" fillRule="evenodd" class="a" d="m12.4 5.4v9.3c0 0.9-0.7 1.6-1.5 1.6h-9.4c-0.8 0-1.5-0.7-1.5-1.6v-12.4c0-0.9 0.7-1.6 1.6-1.6h6.2zm-3.1 4.7h-2.4v-2.3h-1.5v2.3h-2.4v1.5h2.4v2.4h1.5v-2.4h2.4zm1.9-3.8l-4.3-4.3v4.3z" />
        </Svg>
    )
}