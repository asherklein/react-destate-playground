import React from 'react'
import connect from '../dev/easy-connect'

const ColorPicker = ({ colors, num, rulebook: { defineRule } }) => (
    <select
        onChange={({ target: { value }}) => defineRule({ colorAware: true, num }, { type: 'COLOR_SELECT', color: value })}
    >
        {colors.map(color => <option value={color}>{color}</option>)}
    </select>
) 

export default connect(ColorPicker)