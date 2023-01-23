
// ISOS to UTC solution by: https://stackoverflow.com/a/28149561/19756812
function getUTC () {
  var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  
  return {localTime: localISOTime, date: localISOTime.split('T')[0], time: localISOTime.split('T')[1] } // {localTime:'2023-01-23T14:55:49.797' , date: '2023-01-23' , time: '14:56:38.182' }
}

export default getUTC;