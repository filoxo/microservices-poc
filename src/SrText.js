import React from 'react'
import { HideVisually } from './SrText.css'

export default function SrText(props) {
  return <span className={HideVisually}>{props.children}</span>
}
