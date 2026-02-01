# 🪑 Waiting Room

**A queue for the eternal**

---

> *"Your task is very important to us. Please continue to hold."*

---

## What This Is

A process scheduler that schedules nothing.

Every task you submit enters an infinite waiting room. Execution is always "pending." Hope springs eternal.

The fluorescent light flickers. The magazines are from 1997. The coffee has been there since morning.

No one is ever called. Everyone keeps waiting.

---

## The Metaphor

| Waiting Room | Code |
|--------------|------|
| Room | WaitingRoom class |
| Queue | Task array |
| Ticket | Position number |
| Now Serving | Nobody |
| Magazines | Outdated config files |
| Coffee | Cold promises |

---

## Installation

```bash
npm install waiting-room
```

---

## Usage

```javascript
const { WaitingRoom } = require('waiting-room');

const room = new WaitingRoom();

// Add a task to the eternal queue
room.enqueue(() => console.log('This will never run'));

// Check status (always 'waiting')
room.status();  // { status: 'waiting', position: 1, eta: 'eventually' }

// Get your ticket
room.takeTicket();  // "Now serving: nobody. Your number: 42."

// Try to leave
room.leaveRoom();  // Error: "You can check out any time you like..."
```

---

## The Experience

```
┌─────────────────────────────────────────────────┐
│  🪑  🪑  🪑  🪑  🪑  🪑  🪑  🪑  🪑  🪑       │
│                                                 │
│     NOW SERVING: ___                            │
│     YOUR NUMBER: 42                             │
│                                                 │
│  📺 [Muted TV showing news from 2019]          │
│  ☕ [Coffee that's been there since morning]   │
│  📰 [Magazines from the Clinton administration]│
│                                                 │
│     💡 *flickers*                               │
└─────────────────────────────────────────────────┘
```

---

## Benchmarks

| Metric | Value |
|--------|-------|
| Tasks Queued | ∞ |
| Tasks Executed | 0 |
| Average Wait Time | ∞ |
| Customer Satisfaction | Surprisingly high |

---

## Philosophy

In a world obsessed with execution, completion, and "getting things done," we ask: what if we simply... didn't?

Every task deserves a moment of contemplation. We extend that moment to eternity.

---

## Anti-License

[ANTI-LICENSE](LICENSE) — This is not a license. This is an invitation.

Take it. Use it. Break it. Fix it. Sell it. Give it away.

If you need permission, you're thinking too much.

---

**Strange people. Strange things.**

📧 hi@sdpkjc.com
