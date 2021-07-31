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
