async function fetchData() {
    return await "peanut butter";
}

function alsoFetchData() {
    return new Promise(function (resolve, reject) {
        resolve('peanut butter');
    });
}


test('the fetchData is peanut butter', () => {

});

test('the alsoFetchData is peanut butter', () => {

});