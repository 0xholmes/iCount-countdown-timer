/* Countdown Timer */
// Change year to next year on autopilot
const nextYear = document.querySelector("#next-year")
nextYear.innerText = new Date().getFullYear() + 1

function countdownTimer() {
  // Set the date we're counting down to - new year
  // TODO: Dynamically set to next new year
  const newYear = new Date("1 January 2022")
  // Get current date & time
  const now = new Date()

  // Find the distance between now and the count down date
  const distance = newYear - now
  // Get rid of milliseconds and left with only seconds
  const totalSeconds = Math.floor(distance / 1000)

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(totalSeconds / 24 / 60 / 60)
  const hours = Math.floor((totalSeconds / 60 / 60) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor(totalSeconds % 60)

  // TODO: Change days/hours/minutes/seconds to day/hour/minute/second when the value is equal to one

  // Display to HTML/web page
  function render() {
    const daysElement = document.querySelector("#days")
    const hoursElement = document.querySelector("#hours")
    const minutesElement = document.querySelector("#minutes")
    const secondsElement = document.querySelector("#seconds")

    daysElement.innerText = days
    hoursElement.innerText = hours
    minutesElement.innerText = minutes
    secondsElement.innerText = seconds
  }
  render()
}

// Initial
countdownTimer()

// Update the countdownTimer() every 1 second
setInterval(countdownTimer, 1000)

/* Quote */
const quotes = [
  "All you have in business is your reputation. So, it’s very important that you keep your word. – Richard Branson",
  "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
  "If you want to do something different, you’re going to come up against a lot of naysayers. – James Dyson",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "If you are born poor it’s not your mistake, but if you die poor it's your mistake. - Bill Gates",
  "Stay Hungry. Stay Foolish. - Steve Jobs",
  "Good Artists Copy, Great Artists Steal. - Pablo Picasso",
  "Argue with idiots, and you become an idiot. - Paul Graham",
  "Simplicity is the ultimate sophistication. - Leonardo Da Vinci",
]
const startReversAnimationAfter = 500 // ms
const quote = document.querySelector("#quote")

function reverseAnimation(quotesIndex) {
  let i = quotes[quotesIndex].length - 1
  let delay = 0

  for (; i >= 0; i--, delay++) {
    let string = quotes[quotesIndex].substr(0, i)
    setTimeout("quote.innerHTML = '" + string + "'", 100 * delay)
  }

  setTimeout(function () {
    animateQuotes(quotesIndex + 1)
  }, 100 * delay + startReversAnimationAfter)
}

function animateQuotes(quotesIndex) {
  let i = 0

  if (quotesIndex == quotes.length) {
    quotesIndex = 0
  }

  for (; i < quotes[quotesIndex].length; i++) {
    let string = quotes[quotesIndex][i]
    setTimeout("quote.innerHTML += '" + string + "';", 100 * i)
  }

  setTimeout(function () {
    reverseAnimation(quotesIndex)
  }, 100 * i + startReversAnimationAfter)
}

animateQuotes(0)
