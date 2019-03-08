import React from 'react'
// import { connect } from 'react-destate'
import connect from '../dev/connect'

const ContComp = ({ rulebook: { defineRule }, me, value }) => <input
    onChange={({ target: { value }}) => defineRule(me, { type: 'CHANGE', value })}
    value={value}
/>

const lastVal = (acc = '', { body: { type, value } }) => type == 'CHANGE' ? value : acc

export default connect({ value: lastVal }, ContComp)