import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addANewPost } from './redux/state';

export let reRender = props => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={props.messagesData.dialogs}
                posts={props.profileData.posts}
                addNewPost={addANewPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
