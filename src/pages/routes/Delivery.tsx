import React, { useState, useEffect } from 'react'
import { Moment } from 'moment'
import Calendar from './../../components/Calendar'

const Delivery = () => {
  const pickDay = (day: Moment) => {
    console.log(day)
  }

  return (
    <>
      <Calendar handlerPickDay={pickDay} />
    </>
  )
}

export default Delivery
