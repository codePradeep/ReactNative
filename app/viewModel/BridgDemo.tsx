import React from "react";
import { Button, Platform, SafeAreaView } from "react-native";
import { NativeModules} from "react-native";


const BridgDemo=()=>{

const { CalendarModule } = NativeModules;
    const onPress = () => {
        CalendarModule.createCalendarEvent('testName', 'testLocation');
        
        console.log('We will invoke the native module here!',Platform.OS);
      };
    
      return (<SafeAreaView>
        <Button
          title="Click to invoke your native module!"
          color="#841584"
          onPress={onPress}
        />
        </SafeAreaView>
      );
}
export default BridgDemo