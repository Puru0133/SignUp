import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
  },
  header: {
    backgroundColor: "#cd853f",
  },
  input: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#cd853f",
    borderRadius: 35,
  },
  inputBox: {
    borderWidth: 3,
    borderRadius: 10,
    height: 40,
    margin: 18,
    backgroundColor: "white",
    flex: 1
  },
  addBtn: {
    marginTop: 18,
    marginRight: 20,
    height: 40,
    borderWidth: 3,
    borderRadius: 8,
    backgroundColor: "white",
    color: "white",
    fontSize: 20,
    alignItems: "center",
    paddingHorizontal: 10
  },

  mainHeading: {
    fontStyle: "italic",
    fontSize: 40,
    marginTop: 10,
    marginLeft: 100,
    color: "white",
  },
  showCount: {
    fontSize: 40,
  }
})


module.exports = { styles }