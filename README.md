![License](https://img.shields.io/github/license/carlos-err406/captcha-sveltekit) ![Stars](https://img.shields.io/github/stars/carlos-err406/captcha-sveltekit) ![Forks](https://img.shields.io/github/forks/carlos-err406/captcha-sveltekit) ![Issues](https://img.shields.io/github/issues/carlos-err406/captcha-sveltekit) ![Contributors](https://img.shields.io/github/contributors/carlos-err406/captcha-sveltekit)

# JS Captcha


A highly customizable and easy to use Captcha library.

# Installation
```bash
npm install js-captcha
```

# Usage
```js
//TODO:
```

## Component Properties
| option                 |       type        | description                                                                                               |               default                |
| :--------------------- | :---------------: | :-------------------------------------------------------------------------------------------------------- | :----------------------------------: |
| inner                  |  HTMLDivElement   | binded to the general container                                                                           | undefined until component is mounted |
| captcha_image          | HTMLImageElement  | binded to the image element of the captcha                                                                | undefined until component is mounted |
| input_text             | HTMLInputElement  | binded to the input element where user where user writes the captcha result                               | undefined until component is mounted |
| button                 | HTMLButtonElement | binded to the button that triggers the captcha verification                                               | undefined until component is mounted |
| captcha                |      string       | the string representing the captcha                                                                       |                  ""                  |
| user_input             |      string       | binded to the value of the input_text                                                                     |                  ""                  |
| char_amount            |      number       | amount of characters to show in the captcha                                                               |                  5                   |
| canvas_width           |      number       | width of the canvas/image                                                                                 |                 345                  |
| canvas_height          |      number       | height of the canvas/image                                                                                |                  96                  |
| background_color       |      string       | background color of the canvas                                                                            |                "#FFF"                |
| font                   |      string       | font used in the characters of the captcha                                                                |          "bold 30px Ubuntu"          |
| font_color             |      string       | color of the font used in the characters of the captcha                                                   |                "#777"                |
| lines_color            |      string       | color of the lines that strike through the captcha image                                                  |                "#777"                |
| lines_amount           |      number       | amount of lines in the captcha image                                                                      |                  20                  |
| captcha_alt            |      string       | captcha image alt                                                                                         |              "CAPTCHA"               |
| input_placeholder      |      string       | placeholder of the input text                                                                             |              "CAPTCHA"               |
| button_text            |      string       | inner text of the button                                                                                  |               "Check"                |
| case_sensitive_captcha |      boolean      | wether or not the captcha is case sensitive to the user input                                             |                 true                 |
| use_random_font_colors |      boolean      | wether or not use random colors for each captcha character, if true, overwrites the **font_color** option |                false                 |
| use_random_line_colors |      boolean      | wether or not use random colors for each line, if true, overwrites the **lines_color** option             |                false                 |
| autocheck_user_input   |      boolean      | wether or not to check automatically if user input is same as the captcha, if true hides the check button |                false                 |
| auto_disapear          |      boolean      | wether or not auto hide the captcha once is completed                                                     |                 true                 |

## Events
- captcha-validation
  - if `autocheck_user_input` is `false`, is dispatched when `check button` is clicked, the `detail` might be `true` or `false`, depending on whether `user_input` is correct or not
  - if `autocheck_user_input` is `true`, is dispatched when `user_input` has same lenght as `captcha` and `user_input` is correct, the `detail` will be always `true` in this case 

# Screenshots

`default values`


![screenshot 1](static/screenshots/image_2023-04-10_18-10-24.png)


`autocheck_user_input=true`


![screenshot 2](static/screenshots/image_2023-04-10_18-10-24(2).png)


`use_random_font_colors=true`


![screenshot 3](static/screenshots/image_2023-04-10_18-12-03.png)


`use_random_font_colors=true`; `use_random_line_colors=true`


![screenshot 3](static/screenshots/image_2023-04-10_18-12-03(2).png)


`char_amount=10`; `line_amount=5`; `font='Italic 30px Arial'`


![screenshot 3](static/screenshots/image_2023-04-10_18-12-03(3).png)

# Licence
MIT licensed


