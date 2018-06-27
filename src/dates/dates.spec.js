const dates = require('./dates');
var moment = require('moment');

describe('testing dates in js', function () {
  
beforeEach(() => {
  let today = moment('2018-06-23').toDate()
  Date.now = jest.fn().mockReturnValue(today)
});

    it('should return the difference between today', () => {
      let date = moment('2018-06-25');
      expect(dates.getDaysBetweenTodayAndADate(date)).toEqual(2);
    });


    it('should return the difference between today injected', () => {
      let currentDate = moment('2018-06-26');
      let date = moment('2018-06-25');
      expect(dates.getDaysBetweenTodayAndADate2(currentDate,date)).toEqual(-1);
    });
  
  });