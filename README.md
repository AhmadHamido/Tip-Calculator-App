# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [https://github.com/AhmadHamido/Tip-Calculator-App]
- Live Site URL: [https://fluffy-yeot-2ca89a.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

My major learning while working on this project was the "custom button", how I was able to manipulate the DOM in order to get the result I wanted.


```html
<input class="section-btn custom-btn" type="button" value="Custom" id="custom-btn">

```

```js
function replaceCustomBtnType() {
    customBtn.className = "custom-btn-change";
    customBtn.type = "text";
    customBtn.value = '';
}
function resetCustomBtn() {
    customBtn.className = 'custom-btn';
    customBtn.type = 'button';
    customBtn.value = 'Custom';
}
```

### Continued development

Even though I still find my way around the grid template sizes, yet I still need to keep working on making it easier for me. And as for the javascript, I am gradually getting better at finding a proper logic for anything.


## Author

- Website - [Ahmad Hamido](https://fluffy-yeot-2ca89a.netlify.app/)
- Frontend Mentor - [@AhmadHamido](https://www.frontendmentor.io/profile/AhmadHamido)
- Twitter - [@thereapermma91](https://www.twitter.com/thereapermma91)
