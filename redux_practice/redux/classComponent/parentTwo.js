import React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";

export class Counter extends React.Component {
    constructor (props) {
super(props);
    }
    render() {
        const { count, increment, decrement } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, padding: 50, alignItems: "center" }}>Counter: {count}</Text>
                <Button title="Incrementing-c" onPress={increment}></Button>
                <Button title="Decrementing" onPress={decrement}></Button>
            </View>
        )
    }

}

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter);