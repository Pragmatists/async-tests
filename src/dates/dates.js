var moment = require('moment');

exports.getDaysBetweenTodayAndADate  = function(date) {
    let today = moment();
    return date.diff(today, 'days'); 
  }

  exports.getDaysBetweenTodayAndADate2  = function(today,date) {
    return date.diff(today, 'days'); 
  }
