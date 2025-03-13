import { StyleSheet } from 'react-native';
import { iconSize, Spacing } from '../../constants/dimensions';
import { Colors } from '../../constants/colors';
import { fontSize } from '../../constants/dimensions';
import { fontFamily } from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.background,

  },
  headerText:{
    fontSize:fontSize.xxl,
    color:Colors.black,
    fontFamily:fontFamily.bold,
  },
  mainInputContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:Spacing.xl,
  },
  inputWrapper: {
    flex:1,
    borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    borderColor:Colors.placeholder,
    borderRadius:44,
    paddingHorizontal:Spacing.md,
  },
  logo: {
    height:iconSize.md,
    width:iconSize.md,
  },
  textInput:{
  flex:1,
  paddingHorizontal:Spacing.md,
  fontSize:fontSize.md,
  fontFamily:fontFamily.md,
  },
  categoryContainer:{
    paddingHorizontal:Spacing.sm,
  },
});

export default styles;
