import { StyleSheet } from "react-native"

const secondSheet = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#cd853f",
  },
  inputContentBox: {
    borderWidth: 3,
    borderRadius: 18,
    margin: 18,
    backgroundColor: "lightyellow",
    flex: 1
  },
  addBox: {
    marginTop: 25,
    marginRight: 20,
    height: 40,
    width: 50,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "white",
    color: "white",
    fontSize: 20,
    alignItems: "center"
  },
  addStar: {
    marginTop: 30,
    height: 40,
    width: 35,
  },
  goingBack: {
    borderWidth: 3,
    height: 60,
    alignItems: "center",
  },
  backText: {
    fontSize: 30,
  }

})

module.exports = { secondSheet }





{/* <Stack.Navigator>
          <Stack.Screen
            name="HomeMain"
            component={TabFunc}
            options={{ headerShown: false }}
          />
        </Stack.Navigator> */}


        // function TabFunc() {
        //   return (
        //     <Tab.Navigator>
        //       <Tab.Screen name="Drawer" component={DrawerFunc} options={{
        //         headerShown: false, tabBarIcon: ({ color, size , focused}) => (
        //           <Icon name="home" color={focused ? "red" : "black"} size={size}/>
        //         ), 
        //         tabBarActiveTintColor : "red"
        //       }} />
        //       <Tab.Screen name="Second" component={SecondScreen} options={{
        //         tabBarIcon: ({ color, size , focused}) => (
        //           <Icons name="clipboard-notes" color={focused ? "red" : "black"} size={size} />
        //         ),
        //         tabBarActiveTintColor : "red"
        //       }} />
        //     </Tab.Navigator>
        //   )
        // }
        
        // function DrawerFunc() {
        //   return (
        //     <Drawer.Navigator>
        //       <Drawer.Screen name="Home" component={HomeScreen} options={{
        //         drawerIcon: ({ color, size }) => (
        //           <Icon name="home" color={color} size={size} />
        //         ), headerStyle: { backgroundColor: "red" }, headerTintColor: "white"
        //       }} />
        //       <Drawer.Screen name="Notifications" component={Notifications} options={{
        //         drawerIcon: ({ color, size }) => (
        //           <NotiIcon name="notifications-active" color={color} size={size} />
        //         )
        //       }} />
        //       <Drawer.Screen name="Starred" component={StarredNotes} options={{
        //         drawerIcon: ({ color, size }) => (
        //           <StarIcon name="star" color={color} size={size} />
        //         )
        //       }} />
        //       <Drawer.Screen name="Trash" component={Trash} options={{
        //         drawerIcon: ({ color, size }) => (
        //           <TrashIcon name="trash" color={color} size={size} />
        //         )
        //       }} />
        //     </Drawer.Navigator>
        //   )
        // }
        
        // export default App;
        
        
        
        
        
        
        
        
        
        {/* <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen name="Home" component={HomeScreen} options={{
                  title: 'Home',
                  headerStyle: {
                    backgroundColor: '#8b0000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}/>
                  <Stack.Screen name="Second" component={SecondScreen} options={{
                  title: 'Notes List',
                  headerStyle: {
                    backgroundColor: '#8b0000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => <Button title="Go Back" />
                }}/>
                </Stack.Navigator>
              </NavigationContainer> */}
        {/* <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}  />
                <Tab.Screen name="Second" component={SecondScreen} />
              </Tab.Navigator>
              </NavigationContainer> */}