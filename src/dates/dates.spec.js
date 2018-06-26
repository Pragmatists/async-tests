const dates = require('./dates');
var moment = require('moment');

describe('testing dates in js', function () {
  
    it('should return the difference between today', () => {
      let date = moment('2016-01-05');
      expect(dates.getDaysBetweenTodayAndADate(date)).toEqual(4);
    });
  
  });