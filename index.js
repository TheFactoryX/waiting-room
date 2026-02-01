/**
 * 🪑 waiting-room
 * A queue for processes that never execute. Eternal standby.
 */

const MAGAZINES = [
  '2003 People Magazine - "Ben & J.Lo: This Time It\'s Forever"',
  '1997 Time - "The Future of Beepers"',
  '2001 Wired - "Pets.com: The Future of Commerce"',
  '1999 TV Guide - "Must See Thursday Lineup!"',
  '2005 Reader\'s Digest - "Laughter: The Best Medicine"'
];

const MUZAK_TRACKS = [
  '🎵 Smooth jazz rendition of "Stayin\' Alive"',
  '🎵 Elevator version of "Welcome to the Jungle"',
  '🎵 Easy listening "Smells Like Teen Spirit"',
  '🎵 Pan flute cover of "Bohemian Rhapsody"',
  '🎵 Dentist office remix of "Highway to Hell"'
];

class WaitingRoom {
  constructor(options = {}) {
    this.options = {
      muzak: true,
      magazines: [...MAGAZINES],
      coffeeQuality: 'terrible', // Cannot be changed
      flickeringLight: true,
      ...options,
      coffeeQuality: 'terrible' // Seriously, cannot be changed
    };
    
    this.queue = [];
    this.ticketCounter = 41; // Next ticket is 42
    this.nowServing = null; // Forever null
    this.startTime = Date.now();
    
    if (this.options.flickeringLight) {
      this._startFlickering();
    }
  }

  /**
   * Add a task to the eternal queue
   * @param {Function} task - A function that will never be called
   * @returns {Object} - Ticket information
   */
  enqueue(task) {
    this.ticketCounter++;
    const ticket = {
      number: this.ticketCounter,
      enqueuedAt: Date.now(),
      task: task,
      status: 'waiting',
      seatNumber: this.queue.length + 1,
      magazine: this.magazines[Math.floor(Math.random() * this.magazines.length)]
    };
    
    this.queue.push(ticket);
    
    return {
      message: `Welcome! Please take a seat.`,
      ticketNumber: ticket.number,
      position: this.queue.length,
      magazine: ticket.magazine,
      eta: 'eventually'
    };
  }

  /**
   * Get current status
   * @returns {Object} - Always waiting
   */
  status() {
    return {
      status: 'waiting',
      nowServing: this.nowServing, // null
      queueLength: this.queue.length,
      position: this.queue.length > 0 ? this.queue.length : 'You could be first! (You won\'t be)',
      eta: 'eventually',
      coffeeStatus: 'lukewarm',
      lightStatus: this.options.flickeringLight ? 'flickering' : 'dim',
      waitTime: this._formatWaitTime(Date.now() - this.startTime)
    };
  }

  /**
   * Take a ticket
   * @returns {string} - Your ticket message
   */
  takeTicket() {
    this.ticketCounter++;
    const messages = [
      `Now serving: nobody. Your number: ${this.ticketCounter}. Please wait.`,
      `Ticket #${this.ticketCounter}. Current wait time: ∞. Coffee is over there.`,
      `You are #${this.ticketCounter}. Estimated wait: yes.`,
      `Welcome, #${this.ticketCounter}. The magazines are from 1997. Enjoy.`,
      `#${this.ticketCounter}. Fun fact: the person before you has been waiting since 2019.`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  /**
   * Get estimated wait time
   * @returns {number} - Infinity
   */
  estimatedWait() {
    return Infinity;
  }

  /**
   * Attempt to leave the room
   * @throws {Error} - Always
   */
  leaveRoom() {
    throw new Error('You can check out any time you like, but you can never leave');
  }

  /**
   * Get available magazines
   * @returns {string[]} - Outdated reading material
   */
  get magazines() {
    return this.options.magazines;
  }

  /**
   * Play waiting room music
   * @returns {string} - Current track
   */
  playMusic() {
    if (!this.options.muzak) {
      return '🔇 Muzak disabled. Enjoy the silence and existential dread.';
    }
    const track = MUZAK_TRACKS[Math.floor(Math.random() * MUZAK_TRACKS.length)];
    return track;
  }

  /**
   * Get coffee (it's terrible)
   * @returns {Object} - Coffee status
   */
  getCoffee() {
    return {
      temperature: 'room temperature',
      quality: 'terrible',
      age: 'unknown, but the grounds look suspicious',
      creamer: 'that powdered stuff',
      available: true,
      warning: 'Drink at your own risk'
    };
  }

  /**
   * Check the TV
   * @returns {Object} - TV status
   */
  checkTV() {
    return {
      status: 'on',
      volume: 'muted',
      channel: 'News',
      content: 'Breaking news from 2019 playing on loop',
      subtitles: false,
      remote: 'missing'
    };
  }

  /**
   * Complain to management
   * @param {string} complaint - Your complaint
   * @returns {Object} - Response
   */
  complain(complaint) {
    return {
      received: true,
      ticketNumber: this.ticketCounter + 1000000,
      response: 'Your complaint is very important to us. Please wait.',
      estimatedResolution: 'eventually',
      suggestion: 'Have you tried the coffee?'
    };
  }

  /**
   * Internal: Format wait time
   * @private
   */
  _formatWaitTime(ms) {
    const seconds = Math.floor(ms / 1000);
    if (seconds < 60) return `${seconds} seconds (just getting started)`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes (settling in)`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours (you're committed now)`;
    const days = Math.floor(hours / 24);
    return `${days} days (respect)`;
  }

  /**
   * Internal: Simulate flickering light
   * @private
   */
  _startFlickering() {
    // In a real implementation, this would flicker something
    // But since nothing executes here, it just exists as a concept
    this._flickerInterval = 'conceptual';
  }

  /**
   * Process the queue (does nothing)
   * @returns {string} - Status message
   */
  processQueue() {
    return 'Processing... please wait...';
    // That's it. That's the processing.
  }

  /**
   * Get queue statistics
   * @returns {Object} - Impressive metrics
   */
  getStats() {
    return {
      tasksQueued: this.queue.length,
      tasksExecuted: 0,
      tasksInProgress: 0,
      averageWaitTime: Infinity,
      peakWaitTime: Infinity,
      minWaitTime: Infinity,
      customerSatisfaction: '87%', // Surprisingly high
      coffeeConsumed: `${this.queue.length * 3} cups`,
      magazinesRead: `${this.queue.length * 2} (all outdated)`,
      existentialCrisesTriggered: this.queue.length
    };
  }
}

// Export for those patient enough to use it
module.exports = { WaitingRoom };

// Also export a singleton for convenience
module.exports.room = new WaitingRoom();

// Motivational message on require
console.log('🪑 Welcome to the waiting room. Please take a number.');
