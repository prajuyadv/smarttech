import {StyleSheet} from 'react-native';
import { Colors } from '../../constants/colors';
import { fontSize, Spacing } from '../../constants/dimensions';
import { fontFamily } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: '48%',
    // height: 150,
    elevation: 5,
    backgroundColor:Colors.backgroundColor,
    borderRadius:12,
    marginVertical: Spacing.md,
  },
  productImage:{
   height:120,
   width:'100%',
   resizeMode:'center',
  },
  imageWrapper:{
    borderRadius:12,
    backgroundColor: '#FFC887',
    margin:Spacing.sm,
  },
  contentContainer:{
    paddingHorizontal:Spacing.md,
    paddingBottom:Spacing.md,
  },
  name:{
    color:Colors.black,
    fontFamily:fontFamily.semibold,
    fontSize:fontSize.md,
  },
  brand:{
    color:Colors.gray,
    fontSize:fontSize.sm,
    fontFamily:fontFamily.medium,
    paddingVertical:Spacing.xs,
  },
  price:{
    color:Colors.purple,
    fontSize:fontSize.md,
    fontFamily:fontFamily.medium,
  },
});

export default styles;
