# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input:focus {
    border-image-source: linear-gradient(
        to right,
        hsl(249, 99%, 64%),
        hsl(278, 94%, 30%)
    );
    border-image-slice: 20%;
    opacity: 1;
    cursor: pointer;
}
e.target.value = numberValue.replace(
            /(\d{4})(\d{4})(\d{0,4})(\d{0,4})/,
            '$1 $2 $3 $4'
        )
const padding = format.padStart(3, e.target.value) 
And A lot about regex 
### Continued development

I will try react.js next time

## Author
- Frontend Mentor - [@Kaung-Thant-Soe](https://www.frontendmentor.io/profile/Kaung-Thant-Soe)
