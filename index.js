// Code your solutions in this file

function writeCards(arr, event) {
    const allMessages = [];

    for (let i = 0; i < arr.length; i++) {
        allMessages.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }

    return allMessages;
}

function countDown(int) {
    while(int >= 0) {
        console.log(int);
        int--;
    }
}