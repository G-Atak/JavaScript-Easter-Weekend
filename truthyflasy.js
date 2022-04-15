//Truthy and Falsy
//Empty strings like "" or ''
//null which represent when there is no value at all
// undefined which represent when a declared variable lacks a value
//NaN, or Not a Number


const wordCount = 1000

if (wordCount) {
  console.log('Great! You\'ve started your work!')
} else {
  console.log('Better get to work!')
}


const favoritePhrase = ''

if (favoritePhrase) {
  console.log('This string doesn\t seem to be empty')
} else {
  console.log('This string is definitely empty.')
}


//Truthy and Falsy Assignment
let tool = ''
tool = 'marker'

// Use short circuit evaluation to assign  writingUtensil variable below:
const writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`)
