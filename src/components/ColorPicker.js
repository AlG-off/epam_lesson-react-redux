import React, {Component} from 'react';
import {connect} from 'react-redux';
import ColorPicker from 'react-color-picker';
import store from '../store/configureStore';
import 'react-color-picker/index.css';
import setColor from '../actions/ColorAction';

class Picker extends Component {
    render() {
        let style = {
            background: this.props.color
        }
        return (
            <div style={ style }>
                <h2>Color Picker</h2>
                <ColorPicker value={ this.props.color } onDrag={ ::this.onDrag } />
            </div>
        )
    }

    onDrag(color, c) {
        store.dispatch(setColor(color));
    }
}


const mapStateToProps = function(store) {
    return {
        color: store.color.color
    };
}

export default connect(mapStateToProps)(Picker);