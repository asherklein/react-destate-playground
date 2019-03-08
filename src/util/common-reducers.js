const { 
    compose: c, curry, __, flip, uncurryN, always, identity,
    map, append, zipObj,
    merge, path, pathEq, pick, propOr,
    add, T, not
    
 } = require('ramda')

// type reducer s = state s -> rule -> state s
// type toReducer a = a -> reducer s 
//                 OR a -> state s -> rule -> state s



const mfReducer = curry((reducer, zero, when, what, acc, next) => when(next) ? reducer(acc || zero, what(next)) : acc || zero) 

// body :: rule -> {}
const body = propOr({}, 'body')

// state :: reducer
const state = mfReducer(merge, {}, T, body)

// collect :: (rule -> bool) -> (rule -> s) -> reducer [s]
const collect = mfReducer(flip(append), [])

// typeEq :: string -> rule -> bool
const typeEq = pathEq(['body', 'type'])

// mapToProp :: String -> rule -> *
const mapToProp = uncurryN(2, propName => path(['body', propName]))

// collectProp :: string -> string -> reducer [s]
const collectProp = uncurryN(4, (type, propName) => collect(typeEq(type), mapToProp(propName))) 

const sumProp = (type, propName) => mfReducer(add, typeEq(type), mapToProp(propName), 0)

const count = (type) => mfReducer(add, typeEq(type), always(1), 0)

// similiar to state, but only for a VALS type and for specific vals
const VALS = '@@__VALS__@@'
const vals = (vals) => mfReducer(merge, zipObj(vals, map(always(''), vals)), typeEq(VALS), c(pick(vals), body))

const TOGGLE = '@@__TOGGLE__@@'
const toggle = mfReducer(not, false, typeEq(TOGGLE), identity)

module.exports = { state, collect, collectProp, sumProp, count, vals, toggle,
    types: {
        VALS, TOGGLE
    }
}