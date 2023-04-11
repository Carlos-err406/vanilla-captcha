![License](https://img.shields.io/github/license/carlos-err406/js-captcha) ![Stars](https://img.shields.io/github/stars/carlos-err406/js-captcha) ![Forks](https://img.shields.io/github/forks/carlos-err406/js-captcha) ![Issues](https://img.shields.io/github/issues/carlos-err406/js-captcha) ![Contributors](https://img.shields.io/github/contributors/carlos-err406/js-captcha)

# Vanilla Captcha


A highly customizable and easy to use Captcha library.
Based on my sveltekit component, decided to make a more generic implementation for all frameworks in vanilla JavaScript

# Installation
```bash
npm install vanilla-captcha
```

# Usage

```javascript
import generate, {validate, generateCaptchaText, generateCaptchaImage} from 'vanilla-captcha'
//get the answer to compare user input, and the captcha image in base64 format
const {answer,captcha} = generate(
                    //all these are the default values
                          5,//charAmount
                          345,//canvasWidth
                          96,//canvasHeight
                          "#FFF",//backgroundColor
                          "Bold 30px Ubuntu",//font
                          "#777",//fontColor
                          "#777",//lines color
                          20,//lines amount
                          false,//randomFontColor
                          false//randomLineColor
                    );
const img = document.createElement('img')
img.src = captcha
// document.getElementById('img-captcha').src = captcha

//you can also handle validation with the validate method
const user_input = "somestring"
const is_valid = validate(user_input, answer, case_sensitive=true)//true or false
```
```js
//if for some reason want only the image 
const captchaImage = generateCaptchaImage("somestring",/*you can also pass the canvas options here*/)
img.src=captchaImage

//if you just want a random string to use 
const captchaText = generateCaptchaText(10/*charAmount*/);
```

# Licence
MIT licensed


