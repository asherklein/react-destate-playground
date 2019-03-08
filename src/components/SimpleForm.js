import React from 'react'
import { merge, objOf } from 'ramda'
// import { connect } from 'react-destate'
import connect from '../dev/connect'
import { vals, types } from '../util/common-reducers'

// React Component
const SimpleForm = ({ me, formVals, rulebook: { defineRule } }) => {

    const getInputProps = (name) => ({
        value: formVals[name],
        onChange: ({ target: { value } }) => defineRule(me, { type: types.VALS, ...objOf(name, value) })
    })

    return (
        <form
            onSubmit={e => {e.preventDefault(); alert(JSON.stringify(formVals))}}
        >
            <input placeholder={'First Name'} {...getInputProps('fname')} /><br />
            <input placeholder={'Last Name'} {...getInputProps('lname')} /><br />
            <input placeholder={'Phone'} {...getInputProps('phone')} /><br />
            <input placeholder={'Age'} {...getInputProps('age')} /><br />
            <button type='submit'>Submit</button>
        </form>)
}

// Destate reducers
const valList = ['fname', 'lname', 'phone', 'age']

export default connect({ formVals: vals(valList) }, SimpleForm)