import React from 'react'
// import { connect } from 'react-destate'
import connect from '../dev/connect'

const ClickCounter = ({ me, count, rulebook: { defineRule } }) => <button
    onClick={() => defineRule(me, { type: 'CLICK' })}
>I was clicked {count} times</button>

const countReducer = (acc = 0, { body: { type } }) => type == 'CLICK' ? acc + 1 : acc 

export default connect({ count: countReducer }, ClickCounter)