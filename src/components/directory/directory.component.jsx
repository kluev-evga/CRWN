import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import sections from './directory.data';
import './directory.styles.scss';


class Directory extends Component {
    state = {
        sections: sections
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section => <MenuItem key={section.id} {...section} />)
                }
            </div>
        )
    }
};

export default Directory;