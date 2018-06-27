const timer = require('./timer');

jest.useFakeTimers()

test('calls the callback after 1 second', () => {
    const timer = require('./timer');
    const callback = jest.fn();
  
    timer.callWithDelay(callback);  
    jest.runAllTimers()
  
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });