import React from 'react'
import moment from 'moment'
import 'moment/locale/es'

const Delivery = () => {
  moment.locale('es')

  const currentMonthDates = new Array(moment().daysInMonth())
    .fill(null)
    .map((x, i) => moment().startOf('month').add(i, 'days'))

  const pickDay = (index: number) => {
    console.log(currentMonthDates[index])
  }
  return (
    <>
      <div className="calendar">
        <div className="month-indicator">
          <time
            dateTime={
              currentMonthDates[0].format('y') +
              '-' +
              currentMonthDates[0].format('MM')
            }
          >
            {currentMonthDates[0].format('MMMM')}{' '}
            {currentMonthDates[0].format('y')}
          </time>
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
              onClick={() => pickDay(i)}
            >
              <time dateTime="2019-02-01">{i + 1}</time>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Delivery
