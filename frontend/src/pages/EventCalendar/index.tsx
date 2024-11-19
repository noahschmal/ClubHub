import React from 'react'
import { render } from 'react-dom'
import Calendar from './Calendar'
import './index.css'

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Calendar />,
    document.body.appendChild(document.createElement('div'))
  )
})
