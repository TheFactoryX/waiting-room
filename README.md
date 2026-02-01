# 🪑 waiting-room

> *A queue for processes that never execute. Eternal standby.*

## What is this?

`waiting-room` is a process scheduler that schedules nothing. Every task you submit enters an infinite waiting room where execution is always "pending" and hope springs eternal.

Perfect for:
- 🔮 Procrastinators who want their code to match their lifestyle
- 🧘 Zen practitioners seeking enlightenment through non-action
- 📊 Managers who need impressive queue metrics without actual work
- 🎭 Performance artists exploring the void between intention and action

## Installation

```bash
npm install waiting-room
```

## Usage

```javascript
const { WaitingRoom } = require('waiting-room');

const room = new WaitingRoom();

// Add a task to the eternal queue
room.enqueue(() => console.log('This will never run'));

// Check status (always 'waiting')
console.log(room.status()); // { status: 'waiting', position: 1, eta: 'eventually' }

// Get your ticket number
const ticket = room.takeTicket();
console.log(ticket); // "Now serving: nobody. Your number: 42. Please wait."

// Play waiting room music
room.playMusic(); // 🎵 *elevator jazz intensifies*
```

## API

### `new WaitingRoom(options)`

Creates a new waiting room.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `muzak` | boolean | `true` | Enable waiting room music |
| `magazines` | string[] | `['2003 People', '1997 Time']` | Available reading material |
| `coffeeQuality` | string | `'terrible'` | Cannot be changed |
| `flickeringLight` | boolean | `true` | Adds ambiance |

### `.enqueue(task)`

Adds a task to the queue. The task will never execute but will be given a comfortable seat.

### `.status()`

Returns the current status. Always returns `'waiting'`.

### `.takeTicket()`

Returns a ticket number. The "now serving" number never changes.

### `.estimatedWait()`

Returns `Infinity`. Honestly, we respect your time enough to be upfront about this.

### `.leaveRoom()`

Throws `Error: "You can check out any time you like, but you can never leave"`

## Philosophy

In a world obsessed with execution, completion, and "getting things done," `waiting-room` asks: what if we simply... didn't?

Every task deserves a moment of contemplation before being executed. `waiting-room` extends that moment to eternity.

```
"The waiting room is not a bug. It is a feature of existence."
    — Ancient Proverb (probably)
```

## The Waiting Room Experience™

```
┌─────────────────────────────────────────────────┐
│  🪑  🪑  🪑  🪑  🪑  🪑  🪑  🪑  🪑  🪑       │
│                                                 │
│     NOW SERVING: ___                            │
│     YOUR NUMBER: 42                             │
│                                                 │
│  📺 [Muted TV showing news from 2019]          │
│                                                 │
│  ☕ [Coffee that's been there since morning]   │
│                                                 │
│  📰 [Magazines from the Clinton administration]│
│                                                 │
│     💡 *flickers*                               │
└─────────────────────────────────────────────────┘
```

## Benchmarks

| Metric | Value |
|--------|-------|
| Tasks Queued | ∞ |
| Tasks Executed | 0 |
| Average Wait Time | ∞ |
| Customer Satisfaction | Surprisingly high |
| Coffee Temperature | Room temperature |

## FAQ

**Q: When will my task run?**
A: Eventually. Probably. Maybe. Look, there's magazines over there.

**Q: Can I cancel a task?**
A: You can request a cancellation. The request will be queued.

**Q: Is this a joke?**
A: Everything is a joke if you wait long enough.

**Q: Why?**
A: Why not? Have a seat. We'll call your number.

## Contributing

1. Open a PR
2. Wait
3. Keep waiting
4. That's it. That's contributing.

## License

MIT — *Maybe In Time*

---

<p align="center">
  <i>"Your task is very important to us. Please continue to hold."</i>
</p>

<p align="center">
  🪑 Made with infinite patience by <a href="https://github.com/TheFactoryX">TheFactoryX</a>
</p>
