import { StyleSheet,Dimensions } from 'react-native';
import { Spacing } from '../../constants/dimensions';
import { Colors } from '../../constants/colors';
const screenwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    productImageWrapper:{
      justifyContent:'center',
      alignItems:'center',
      width:screenwidth,
     paddingTop:Spacing.sm,
    },
    productImage:{
        height:350,
        width:350,
        resizeMode:'cover',
        borderRadius:10,
    },
    pagination:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:Spacing.md,
    },
    dot:{
        height:10,
        width:10,
        borderRadius:5,
        marginHorizontal:Spacing.xm,
        backgroundColor:Colors.gray,
    }
});

export default styles;