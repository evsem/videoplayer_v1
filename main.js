//Получаем переменные
const video = document.querySelector('.video')
const playBtn = document.querySelector('.controls__play')
const pauseBtn = document.querySelector('.controls__pause')
const stopBtn = document.querySelector('.controls__stop')
const progress = document.querySelector('.progress')
const time = document.querySelector('.controls__time')

//Запуск и остановка видео(Play & Pause video)
function togglePlayVideoStatus() {
  if (video.paused) {
    video.play()
  }
}
playBtn.addEventListener('click', togglePlayVideoStatus)
function togglePauseVideoStatus() {
  if (video.played) {
    video.pause()
  }
}
pauseBtn.addEventListener('click', togglePauseVideoStatus)
//При клике на само видео происходит play и pause
function playAndPauseOnClickVideo() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
video.addEventListener('click', playAndPauseOnClickVideo)

//Остановка видео(Stop video)
function stopVideo() {
  //Делаем текущее виео на начало самого видео
  video.currentTime = 0
  video.pause()
}
stopBtn.addEventListener('click', stopVideo)

//Время видео(Timer)
function progressAndTimerVideo() {
  //Получаем текущее время на прогрессбаре
  progress.value = (video.currentTime / video.duration) * 100

  //Получаем текущие минуты данного видео
  let minutes = Math.floor(video.currentTime / 60)
  if (minutes < 10) {
    minutes = '0' + String(minutes)
  }
  //Получаем текущие секунды данного видео
  let seconds = Math.floor(video.currentTime % 60)
  if (seconds < 10) {
    seconds = '0' + String(seconds)
  }

  //
  time.innerHTML = `${minutes}:${seconds}`
}
video.addEventListener('timeupdate', progressAndTimerVideo)

//Выбрать положение progress
let setProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100
}
progress.addEventListener('change', setProgress)
