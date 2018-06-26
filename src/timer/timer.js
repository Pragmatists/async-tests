function callWithDelay(callback) {
    setTimeout(() => {
        callback()
    }, 1000)
  }
  
  exports.callWithDelay = callWithDelay;