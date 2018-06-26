const dates = require('./dates');
var moment = require('moment');

describe('testing dates in js', function () {

    beforeEach(() => {
      let today = moment('2016-01-01').toDate();
      Date.now = jest.fn().mockReturnValue(today)
    });
  
    it('should return the difference between today', () => {
      let date = moment('2016-01-05');
      expect(dates.getDaysBetweenTodayAndADate(date)).toEqual(4);
    });
  
  });