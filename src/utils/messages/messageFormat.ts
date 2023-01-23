import getUTC from '../date/isosToUtc'

function formatter (message: string, from: number, type: string = 'normal') {
  return {
    type: type,
    from: from,
    date: getUTC().date, // return dates like 2022-01-23
    time: getUTC().time, // return hours like 23:11:34s
    date_unix: new Date().getTime(),
    message: [
      {
       "type": "IDK",
       "text": message,
      }
     ]
  }
}

export default formatter;