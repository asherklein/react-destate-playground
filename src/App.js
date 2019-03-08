import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
// import { Provider } from 'react-destate'
import Provider from './dev/Provider'
import { createRulebook } from 'destate'
import ClickCounter from './components/ClickCounter'
import ContComp from './components/ContComp'
import SimpleForm from './components/SimpleForm'
import ManySimpleForms from './components/ManySimpleForms'
import EasyExample from './components/EasyConnectExample'
import ColorHistory from './components/ColorHistory'
const saved = localStorage.getItem('book')
const rulebook = createRulebook(saved ? JSON.parse(saved) : undefined)

class App extends Component {
  render() {
    return (
      <div>

        <Provider rulebook={rulebook}>
          <BrowserRouter>
            <div>

              <NavLink exact to='/easyexample'>Easy</NavLink>
              <br />
              <NavLink exact to='/counters'>Counters</NavLink>
              <br />
              <NavLink exact to='/contcomp'>Controlled Component</NavLink>
              <br />
              <NavLink exact to='/simpleform'>Simple Form</NavLink>
              <br />
              <NavLink exact to='/manysimpleforms'>Many Simple Forms</NavLink>
              <br />
              <NavLink exact to='/colorhistory'>Color History</NavLink>
              <br />

              <Route path='/easyexample' component={() => <EasyExample goal={{ cmp: 'EasyExample' }} />} />
              <Route path='/counters' component={() => [1, 2, 3].map(n => <ClickCounter goal={{ thing: 'clickcounter', number: n }} />)} />
              <Route path='/contcomp' component={ContComp} />
              <Route path='/simpleform' component={SimpleForm} />
              <Route path='/manysimpleforms' component={() => <ManySimpleForms n={3} />} />
              <Route path='/colorhistory' component={() => <div>
                <ColorHistory goal={{ colorAware: true, num: 1 }} />
                <ColorHistory goal={{ colorAware: true, num: 2 }} />
                <button
                  onClick={() => localStorage.setItem('book', JSON.stringify(rulebook.rulebook))}
                >Save Changes</button>
                </div>} />
            </div>
              </BrowserRouter>

        </Provider>
      </div>
            )
          }
        }
        
        export default App;
