import React from 'react'
import ReactGA from 'react-ga';
function One() {

  const ClickHandler = () => {
      ReactGA.event({
        category: 'Button',
        action: 'Click from first page'
      })
      alert('Clicked it');
  }
  return (
    <div>
    <button onClick={ClickHandler}>ClickMe</button>
    First
    </div>
  )
}
export default One
