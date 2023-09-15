const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 carousel: {
   width: carouselWidth,
   height: 300, // Adjust as needed
 },
 carouselItem: {
   width: carouselWidth,
   height: 300, // Adjust as needed
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'lightgray',
 },
 image: {
   width: 200, // Adjust as needed
   height: 200, // Adjust as needed
   resizeMode: 'cover',
   borderRadius: 8,
 },
 text: {
   fontSize: 18,
   marginVertical: 10,
 },
 button: {
   backgroundColor: 'blue',
   padding: 10,
   borderRadius: 5,
 },
 buttonText: {
   color: 'white',
   fontSize: 16,
 },
});
