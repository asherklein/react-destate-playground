import React from 'react'
import connect from '../dev/connect'
import { toggle, types } from '../util/common-reducers'
import SimpleForm from './SimpleForm'
import { range } from 'ramda'

const ManySimpleForms = ({ n }) => {
    const thisMany = range(0, n)
    return <div>
        {thisMany.map(n => <SimpleForm key={n} goal={{ cmp: 'tsf', n  }} />)}
        Master Form
        <SimpleForm key={n} goal={{ cmp: 'tsf' }} />

    </div>
}

export default ManySimpleForms