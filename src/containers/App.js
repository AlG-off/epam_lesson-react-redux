import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from '../index.css';

class App extends Component {
    render() {
        const {color} = this.props;
        const style = {
            background: color
        }
        return (
        <div>
            <div>
                <ul className={ styles.menu }>
                    <li className={ styles.menu__item }>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={ styles.menu__item }>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                { this.props.children }
            </div>
        </div>
     )
    }
}

const mapStateToProps = function(store) {
    return {
        color: store.color.color
    };
}

export default connect(mapStateToProps)(App);