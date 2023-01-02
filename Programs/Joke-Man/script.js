// Complete
const jokeA = "A man walks into a bar. He says ow."
const jokeB = "I failed math so many times at school, I can’t even count."
const jokeC = "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me."
const jokeD = "I was addicted to the hokey pokey, but then I turned myself around."
const jokeE = "Never trust atoms, they make up everything."
const jokeF = "The man who invented Velcro has died. RIP."
const jokeG = "Today a man knocked on my door and asked for a small donation toward the local swimming pool. I gave him a glass of water."
const jokeH = "I’m reading a book about anti-gravity. It’s impossible to put down."
const jokeI = "I got a new pair of gloves today, but they’re both ‘lefts,’ which on the one hand is great, but on the other, it’s just not right."
const jokeJ = "It was an emotional wedding. Even the cake was in tiers."
const jokeK = "I just got kicked out of a secret cooking society. I spilled the beans."
const jokeL = "Blunt pencils are really pointless."
const jokeM = "The rotation of Earth really makes my day."
const jokeN = "A Mexican magician tells the audience he will disappear on the count of three. He says, ‘Uno, dos…” and poof! He disappeared without a tres."
const jokeO = "A blind man walked into a bar… and a table… and a chair…"
const jokeP = "My therapist said I needed to take it easy. I took it pretty hard."
const jokeQ = "My therapist said I have problems with revenge. We'll see about that. "
const jokeR = "The creator of knock-knock jokes should win a no bell prize."
const jokeS = "How do you make holy water? You boil the hell out of it."
const jokeT = "I can't think of any jokes. sorry. "

const jokeman = document.querySelector("#jokemanbody")

jokeman.addEventListener("click", function () {
  console.log("clicked in!!")
  const num = Math.floor(Math.random() * 20 + 1);
  console.log(num)
  if (num === 1) {
    joke.textContent = jokeA
  } else if (num === 2) {
    joke.textContent = jokeB
  } else if (num === 3) {
    joke.textContent = jokeC
  } else if (num === 4) {
    joke.textContent = jokeD
  } else if (num === 5) {
    joke.textContent = jokeE
  } else if (num === 6) {
    joke.textContent = jokeF
  } else if (num === 7) {
    joke.textContent = jokeG
  } else if (num === 8) {
    joke.textContent = jokeH
  } else if (num === 9) {
    joke.textContent = jokeI
  } else if (num === 10) {
    joke.textContent = jokeJ
  } else if (num === 11) {
    joke.textContent = jokeK
  } else if (num === 12) {
    joke.textContent = jokeL
  } else if (num === 13) {
    joke.textContent = jokeM
  } else if (num === 14) {
    joke.textContent = jokeN
  } else if (num === 15) {
    joke.textContent = jokeO
  } else if (num === 16) {
    joke.textContent = jokeP
  } else if (num === 17) {
    joke.textContent = jokeQ
  } else if (num === 18) {
    joke.textContent = jokeR
  } else if (num === 19) {
    joke.textContent = jokeS
  } else if (num === 20) {
    joke.textContent = jokeT
  }
})
