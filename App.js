//import {Routes} from "./app/Routes";
import 'react-native-gesture-handler';
import { View } from 'react-native';
import Router from "./app/router";

const backgroundStyle = {
    flex:1
}

const App = () =>{
    return(
        <View style={backgroundStyle}>
            <Router />
        </View>
    );
};
export default App;