import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';


const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <DirectoryMenuContainer>
            {sections.map(section => <MenuItem key={section.id} {...section} />)}
        </DirectoryMenuContainer>
    );
};

export default Directory;