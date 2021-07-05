// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
//const header = document.getElementById(`header`)
//const header = document.getElementsByTagName(`header`)
const header = document.querySelector(`header#header`)
const logoTitle = document.querySelector(`#logoTitle`)
const firstCard = document.querySelector(`.card:nth-of-type(1)`)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector(`img`)
const titleFirstCard = firstCard.querySelector(`.card-title`)
const subtitleFirstCard = firstCard.querySelector(`h3`)
const textFirstCard = firstCard.querySelector(`p`)
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextSibling
const link2FirstCard = link1FirstCard.nextSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "About"
const links = header.querySelectorAll(`nav a`)
//links.forEach(link => console.log(link.textContent))
const linksArray = Array.from(links)
const aboutNavItem = linksArray.filter(link => link.textContent === `About`)
console.log(aboutNavItem[0])

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText

logoTitle.textContent = `Lambda Dog`
titleFirstCard.textContent = `Happy Doggo Boi`
subtitleFirstCard.textContent = `So happy, wag tail`
textFirstCard.textContent = `Doggo ipsum borkf shibe pupper long woofer heckin good boys and girls shoober doggorino woofer he made many woofs, puggorino very good spot pats boofers ur givin me a spook I am bekom fat aqua doggo..`
link1FirstCard.textContent = `Dog Ipsum`
link2FirstCard.textContent = `Doggo nortem`


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes

logoTitle.className = `heading logo banana`


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add(`sky`)
header.classList.remove(`sky`)
setInterval(() => {
    header.classList.toggle(`sky`)
}, 1000)
//  B- By manipulating inline styles on the element
header.style.fontSize = `2em`


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement(`a`)
blogLink.textContent = `Blog`
blogLink.href = `#`
document.querySelector(`nav`).appendChild(blogLink)


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
document.querySelector(`.card-group`).appendChild(secondCard)


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
