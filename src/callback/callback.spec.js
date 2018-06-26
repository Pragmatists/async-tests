function fetchData(callback) {
    //do some backend request and processing
    setTimeout(() => {
        callback('peanut butter')
    }, 1000);
}


test('the data is peanut butter', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});
