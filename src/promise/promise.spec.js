async function fetchData() {
    return await "peanut butter";
}

function alsoFetchData() {
    return new Promise(function (resolve, reject) {
        resolve('peanut butter');
    });
}


test('promise testing with done', (done) => {
    fetchData().then(data => {
        expect(data).toEqual('peanut butter')
        done()
    })
});


test('promise testing with return', () => {
    return fetchData().then(data => {
        expect(data).toEqual('peanut butter')
    })
});

test('another promise testing with return', () => {
    return alsoFetchData().then(data => {
        expect(data).toEqual('peanut butter')
    })
});

test('testing with async await', async () => {
    const data = await fetchData()
    expect(data).toEqual('peanut butter')
});