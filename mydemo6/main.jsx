const React = require('react')
const ReactDOM = require('react-dom')
const style = require('./index.css')

ReactDOM.render(
  <div>
    <h1 className={style.h1}>FOO</h1>
    <h2 className="h2">Bar</h2>
  </div>,
  document.querySelector('#example')
)
