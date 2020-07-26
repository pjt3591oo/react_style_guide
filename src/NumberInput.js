import React, { useState, useEffect } from 'react'

const InputNumber = (props) => {
  let [ value, setValue ] = useState(props.value)

  useEffect(() => {
    numberCheck(value)
  }, [value])

  const onChange = e => {
    numberCheck(e.target.value)
  }

  const numberCheck = (v) => {
    let num = v || 0
    if (!isFinite(num)) return
    num = num.toString()

    if (num !== '0' &&  !num.includes('.')) {
      num = num.replace(/^0+/,'')
    }

    setValue(num)
  }

  return (
    <input type="number" value={value} onChange={onChange}></input>
  )
}

export default InputNumber