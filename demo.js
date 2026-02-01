const { WaitingRoom } = require('./index');

// Create a waiting room
const room = new WaitingRoom({
  muzak: true,
  flickeringLight: true
});

console.log('\n=== 🪑 Waiting Room Demo ===\n');

// Take a ticket
console.log('Taking a ticket...');
console.log(room.takeTicket());
console.log();

// Queue some tasks
console.log('Queuing a task...');
const result = room.enqueue(() => console.log('This will never run'));
console.log(result);
console.log();

// Check status
console.log('Checking status...');
console.log(room.status());
console.log();

// Play some music
console.log('Playing music...');
console.log(room.playMusic());
console.log();

// Get coffee
console.log('Getting coffee...');
console.log(room.getCoffee());
console.log();

// Check the TV
console.log('Checking TV...');
console.log(room.checkTV());
console.log();

// Check estimated wait
console.log('Estimated wait time:', room.estimatedWait());
console.log();

// Get stats
console.log('Queue statistics:');
console.log(room.getStats());
console.log();

// Try to leave
console.log('Attempting to leave...');
try {
  room.leaveRoom();
} catch (e) {
  console.log('Error:', e.message);
}

console.log('\n=== Demo complete. Please continue waiting. ===\n');
