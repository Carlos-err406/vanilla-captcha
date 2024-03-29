![License](https://img.shields.io/github/license/carlos-err406/vanilla-captcha) ![Stars](https://img.shields.io/github/stars/carlos-err406/vanilla-captcha) ![Forks](https://img.shields.io/github/forks/carlos-err406/vanilla-captcha) ![Issues](https://img.shields.io/github/issues/carlos-err406/vanilla-captcha) ![Contributors](https://img.shields.io/github/contributors/carlos-err406/vanilla-captcha)

# Vanilla Captcha

A highly customizable and easy to use Captcha library. Based on my [sveltekit component](https://github.com/carlos-err406/captcha-sveltekit), decided to make a more generic implementation for all frameworks in vanilla JavaScript
Supports running in the **server** as well as in the **browser**
`Server` usage uses sharp and svg-builder and `Browser` usage uses the canvas html element

# Installation

```sh
npm install vanilla-captcha #or bun, yarn, pnpm, etc
```

# Usage

Be aware that the server usage can't be used in client side and vice versa, you'll get errors like document is not defined or some `sharp` nasty errors

## Server

```js
//in the server
import generate from "vanilla-captcha";
const getCaptcha = async () => {
  const charAmmount = 5;
  const { answer, captcha } = await generate(charAmmount);
};
```

`answer` is the string and `captcha` is a Buffer, so you can do whatever you want with it, like returning it in a response as is

```js
return new Response(captcha, { status: 200, headers: { "X-answer": answer } });
```

then you can use the `response.blob()` method and `URL.createObjectURL()`

```js
fetch("/get-captcha-url", {
  method: "GET",
})
  .then((response) => response.blob())
  .then((blob) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  });
```

## Browser

Browser usage is more straightforward

```js
import generateSync from "vanilla-captcha/dom";
const charAmount = 5;
const { answer, captcha } = generateSync(charAmount);
const img = document.createElement("img");
img.src = captcha; //notice that there is no need to URL.createObjectURL(), because is the canvas.toDataURL() string
document.body.appendChild(img);
```

Notice the difference in the import statement, browser image generation logic is separated from the server one, be sure to import what you need where you need it.
And yes the browser image generation version is not async since it does not use sharp, nor Buffer.

## Utilities

the generate methods (`generate` and `generateSync`) can recieve a series of options to customize the image

### generateSync

pretty self-explained options

```ts
interface CaptchaSyncOptions {
  width: number; // width of the generated image
  height: number; // height of the generated image
  backgroundColor: string;
  font: string; // font of the generated image as "Bold 30px Arial"
  fontColor: string;
  lineAmount: number; //amount of strikes over the image
  lineColor: string;
  lineWidth: number;
}
```

default values for the `options` parameter in the `generateSync` method:

```ts
width: 345,
height: 96,
backgroundColor: "#FFF",
font: "Bold 30px Arial",
fontColor: "#777",
lineColor: "#777",
lineAmount: 10,
lineWidth: 1
```

### generate

```ts
export interface CaptchaOptions {
  width: number;
  height: number;
  backgroundColor: string;
  font: string;
  fontColor: string;
  fontSize: number;
  fontWeight: number;
  lineColor: string;
  lineAmount: number;
  lineWidth: number;
}
```

notice this one has to extra properties for `fontSize` and `fontWeight`, in this case the `font` property is only the font-family property like "Ubuntu" for example
default values for the `options` parameter in the `generate` method:

```ts
width: 345,
height: 96,
backgroundColor: "#FFF",
font: "Arial",
fontSize: 30,
fontWeight: 600,
fontColor: "#777",
lineColor: "#777",
lineAmount: 10,
lineWidth: 1
```

### Other utilities

you can also use the image generation method if you want to do it with a string of your own instead of the random string generated by `vanilla-captcha` like so:

```js
import { generateImage } from "vanilla-captcha";
const const answer = "uRock"
const myCaptcha = generateImage(answer)
const myCaptcha2 = generateImage(answer, { backgroundColor: "#000", fontColor: "#FFF" })
//this generates the buffers for 2 images with the same answer
```

or in the browser

```js
import { generateImageSync } from "vanilla-captcha/dom";
```

There is also a validation method for the lazzy ones

```ts
import { validate } from "vanilla-captcha/utils";
const userInput = "urock";
const answer = "uRock";
const valid = validate(userInput, answer, { caseSensitive: false });
console.log(valid); //true
```

method uses caseSensitive by default so you don't need to to pass it

```ts
const valid = validate(userInput, answer);
console.log(valid); //false
```

# Demo

demo for tryout at: [https://vanilla-captcha-demo.vercel.app/](https://vanilla-captcha-demo.vercel.app/)

demo source code at: [https://github.com/Carlos-err406/vanilla-captcha-demo.git](https://github.com/Carlos-err406/vanilla-captcha-demo.git)

# Licence

MIT licensed
