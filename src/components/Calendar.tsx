import React, { useState, useEffect } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import moment, { Moment } from 'moment'
import 'moment/locale/es'

export type PickDay = (day: Moment) => void

export interface IState {
  handlerPickDay: PickDay
}

const Calendar = ({ handlerPickDay }: IState) => {
  moment.locale('es')
  const [currentMonth, setCurrentMonth] = useState<string>(
    moment().format('YYYY-MM')
  )

  const [currentMonthDates, setcurrentMonthDates] = useState<Moment[]>([])

  useEffect(() => {
    setcurrentMonthDates(
      new Array(moment(currentMonth).daysInMonth())
        .fill(null)
        .map((x, i) => moment(currentMonth).startOf('month').add(i, 'days'))
    )
  }, [currentMonth])

  const previousMonth = () => {
    setCurrentMonth(
      moment(currentMonth, 'YYYY-MM').subtract(1, 'month').format('YYYY-MM')
    )
  }

  const nextMonth = () => {
    setCurrentMonth(
      moment(currentMonth, 'YYYY-MM').add(1, 'month').format('YYYY-MM')
    )
  }

  return (
    <div className="calendar">
      <div className="month-indicator">
        <button onClick={previousMonth}>
          <LeftOutlined />
        </button>
        <time dateTime={currentMonth}>{`${moment(currentMonth).format(
          'MMMM'
        )} ${moment(currentMonth).format('y')}`}</time>
        <button onClick={nextMonth}>
          <RightOutlined />
        </button>
      </div>
      <div className="day-of-week">
        <div>Lu</div>
        <div>Ma</div>
        <div>Mi</div>
        <div>Ju</div>
        <div>Vi</div>
        <div>Sa</div>
        <div>Do</div>
      </div>
      <div className="date-grid">
        {[...Array(currentMonthDates.length)].map((d, i) => (
          <button
            key={i}
            style={
              i === 0
                ? {
                    gridColumn: moment(currentMonthDates[0]).weekday() + 1,
                  }
                : {}
            }
            onClick={() => handlerPickDay(currentMonthDates[i])}
          >
            <time dateTime="2019-02-01">{i + 1}</time>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calendar
