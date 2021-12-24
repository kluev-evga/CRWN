import React from 'react';
import { Group, Input, Label } from './form-input.styles';


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <Group>
        <Input onChange={handleChange} {...otherProps} />
        {label && <Label value={otherProps.value}>{label}</Label>}
    </Group>
);

export default FormInput;