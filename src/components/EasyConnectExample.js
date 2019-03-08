import React from 'react'
import connect from '../dev/easy-connect'
import { state as sr } from '../util/common-reducers'
import { objOf } from 'ramda'
console.log('sr', sr)

const EasyInput = connect(({ me, state: { value = '' }, rulebook: { defineRule }, ...props }) => <input
    {...props}
    onChange={({ target: { value } }) => defineRule(me, { value })}
    value={value}
/>)

const Example = ({ me, state, rulebook: { defineRule, query } }) => {
    const keyGoal = { comp: 'EasyInput', name: 'keyinput' }
    const valGoal = { comp: 'EasyInput', name: 'valinput' }
    return (
        <div>
            My state: {JSON.stringify(state)}
            <br />
            <EasyInput goal={keyGoal} />
            <br />
            <EasyInput goal={valGoal} />
            <br />
            <button onClick={() => {
                const { sr:{ value: key } } = query(keyGoal, { sr })
                const { sr: { value: val } } = query(valGoal, { sr })
                defineRule(me, objOf(key, val))
                console.log('objof', objOf(key, val))
            }}>Change State</button>
        </div>
    )
}

export default connect(Example)