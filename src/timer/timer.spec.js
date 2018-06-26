const timer = require('./timer');

test('calls the callback after 1 second', () => {
    const timer = require('./timer');
    const callback = jest.fn();
  
    timer.callWithDelay(callback);  
  
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });