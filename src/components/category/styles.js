import { StyleSheet } from 'react-native';
import { fontSize } from '../../constants/dimensions';
import { fontFamily } from '../../constants/fonts';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
    CategoryText:{
     fontSize:fontSize.md,
     fontFamily:fontFamily.semibold,
     color:Colors.gray,
    },
    underline:{
        borderBottomColor:Colors.purple,
        borderBottomWidth:2,
        width:'50%',
    }
});

export default styles;