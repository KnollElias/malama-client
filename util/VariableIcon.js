import {Image} from "react-native";

function VariableIcon({height, width, source}) {
    return (
        <Image source={source}
               style={{height: height, width: width}}/>
    );
}

export default VariableIcon;
