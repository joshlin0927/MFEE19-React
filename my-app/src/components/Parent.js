import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      {/* 父母元件就會有階層關係 */}
      <Child text="Hello" name="Eddy" id="1" />
      <Child name="{1}" text="{2}" />
      <Child />
    </>
  )
}

export default Parent
