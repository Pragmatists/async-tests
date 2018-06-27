function fetchData(callback) {
    //do some backend request and processing
    setTimeout(() => {
        callback('peanut butter')
    }, 1000);
}

describe('Name of the group', () => {
    test('the data is peanut butter callback', (done) => {
        function callback(data) {
            expect(data).toBe('peanut butter');
            done()
        }
    
        fetchData(callback);
    });
});

