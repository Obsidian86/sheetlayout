import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = (props) => {
    return (
        <CSSTransition
            in={props.showIt}
            timeout={300}
            classNames={props.thisClass}
            unmountOnExit
        >
            {props.children}
        </CSSTransition>
    );
}

export default Transition;