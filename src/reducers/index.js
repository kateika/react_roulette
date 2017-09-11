import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import App from '../containers/App';

const application = document.createElement('div');
document.body.appendChild(application);


const render = () => {
    ReactDom.render(
        <AppContainer>
            <App />
        </AppContainer>,
        application
    )
};

render();

if (module.hot) {
    module.hot.accept('../containers/App', render);
}
