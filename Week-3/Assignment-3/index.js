function createIncrement(){
    let count = 0;

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
      console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log();// What is logged?

// The output would be "Count is 0". Eventhough the we increment the count we are not passing the incremented count value as the log function. It picks the initial value of the count;