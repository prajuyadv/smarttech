import { StyleSheet } from "react-native";
import { fontSize, Spacing } from "../../constants/dimensions";
import { Colors } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";

const styles = StyleSheet.create({
    container:{
     justifyContent:'center',
     alignItems:'center',
     paddingVertical:Spacing.md,
    },
    addToCartButton:{
     width:'90%',
     padding:Spacing.md,
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'row',
     borderRadius:Spacing.md,
     gap:Spacing.sm,
    },
    addToCartText:{
        color:Colors.background,
        fontFamily:fontFamily.bold,
        fontSize:fontSize.md,
    }
});

export default styles;