import React from 'react';
import { Route, IndexRoute} from 'react-router'

import App from './containers/App';
import Picker from './components/ColorPicker';
import About from './components/About';

export const routes = (
        <div>
            <Route path='/' component={App}>
                <IndexRoute component={Picker} />
                <Route path='about' component={About} />
            </Route>
        </div>
)
