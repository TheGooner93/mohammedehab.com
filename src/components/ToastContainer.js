import React from 'react';
import { DefaultToastContainer } from 'react-toast-notifications'

const ToastContainer = props => (
    <DefaultToastContainer
        className="toast-container custom-toast-container"
        style={{ bottom: 20 }}
        {...props}
    />
);

export default ToastContainer;