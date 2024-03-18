
// Function to simulate asynchronous behavior
async function race() {
    let runner1 = false;
    let runner2 = false;
    let loser = '';

    // Promise for runner 1
    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, Math.random() * 5000); // Random timeout under 5 seconds
    });

    // Promise for runner 2
    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, Math.random() * 5000); // Random timeout under 5 seconds
    });

    // Wait for both promises to resolve
    const results = await Promise.all([runner1Go, runner2Go]);

    // Return array with results
    return [results[0], results[1], loser];
}

// Call the async function and log the loser
race().then((result) => {
    console.log(result[2]);
});
