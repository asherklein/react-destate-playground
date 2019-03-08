import React from 'react'
import connect from '../dev/connect'
import ColorPicker from './ColorPicker'
import { collectProp } from '../util/common-reducers'
import { range } from 'ramda'
const colors = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]
const ColorHistory = ({ hist, me: { num } }) => (
    <div>
        {hist.map(color => <p style={{ color }}>You chose {color}</p>)}
        <ColorPicker num={num} colors={colors} />
    </div>
)

export default connect({ hist: collectProp('COLOR_SELECT', 'color') }, ColorHistory)