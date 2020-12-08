var randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)

var guesses = document.querySelector('.guesses')
var lastResult = document.querySelector('.lastResult')
var lowOrHi = document.querySelector('.lowOrHi')
// console.log(guesses)
// console.log(lastResult)
// console.log(lowOrHi)

var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField')
// console.log(guessSubmit)
// console.log(guessField)

var guessCount = 1
var resetButton

function checkGuess() {
  // alert(' I am a placeholder')
  var userGuess = Number(guessField.value)
  if (guessCount === 1) {
    guesses.textContent = 'Ваши попытки: '
  }
  guesses.textContent += userGuess + ' '

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Поздравляю! Вы угадали число!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ''
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent == 'GAME OVER!!!'
    setGameOver()
  } else {
    lastResult.textContent = 'Вы ошиблись!'
    lastResult.style.backgroundColor = 'red'
    if (userGuess < randomNumber) {
      lowOrHi.textContent =
        'Ваше число меньше загаданного! Стоит выбрать большее'
      // lowOrHi.style.backgroundColor='blue'
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent =
        'Ваше число больше загаданного! Стоит выбрать меньшее'
      // lowOrHi.style.backgroundColor = 'blue'
    }
  }
  guessCount++
  guessField.value = ''
  guessField.focus()
}
// checkGuess()
guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
  guesses.dsabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement('button')
  resetButton.textContent = 'Начать новую игру!'
  document.body.appendChild(resetButton)
  resetButton.addEventListener('click', resetGame)
}

function resetGame() {
  guessCount = 1

  var resetParas = document.querySelectorAll('.resultParas p')
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ''
  }

  resetButton.parentNode.removeChild(resetButton)

  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.Value = ''
  guessField.focus()

  lastResult.style.backgroundColor = 'white'

  randomNumber = Math.floor(Math.random() * 100) + 1
}
