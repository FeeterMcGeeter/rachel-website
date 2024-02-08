import React from 'react';

const MenuToggle = props => {
    return (
        <button className='menu-toggle' onClick={props.click}>
            <div className='menu-toggle__line' />
            <div className='menu-toggle__line' />
            <div className='menu-toggle__line' />
        </button>
    );
};

export default MenuToggle;