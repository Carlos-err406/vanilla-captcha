const generate = (
  char_amount: number = 5,
  width: number = 345,
  height: number = 96,
  backgroundColor: string = "#FFF",
  font: string = "Bold 30px Ubuntu",
  fontColor: string = "#777",
  lineColor: string = "#777",
  lineAmount: number = 20,
  randomFontColors: boolean = false,
  randomLineColors: boolean = false
): { answer: string; captcha: string } => {
  const answer = generateCaptchaText(char_amount);
  return {
    answer: answer,
    captcha: generateCaptchaImage(
      answer,
      width,
      height,
      backgroundColor,
      font,
      fontColor,
      lineColor,
      lineAmount,
      randomFontColors,
      randomLineColors
    ),
  };
};

const generateCaptchaText = (char_amount = 5): string => {
  let captcha = "";
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < char_amount; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const generateCaptchaImage = (
  captchaText: string,
  width: number = 345,
  height: number = 96,
  backgroundColor: string = "#FFF",
  font: string = "Bold 30px Ubuntu",
  fontColor: string = "#777",
  lineColor: string = "#777",
  lineAmount: number = 20,
  randomFontColors: boolean = false,
  randomLineColors: boolean = false
) => {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  if (!ctx) throw new Error("Could not get canvas's ctx");
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = font;
  for (let i = 0; i < captchaText.length; i++) {
    let character = captchaText.charAt(i);
    let x = (canvas.width / captchaText.length) * i + 20;
    let y = canvas.height / 2;
    let angle = Math.random() - 0.5;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = fontColor;
    if (randomFontColors) {
      ctx.fillStyle =
        "rgb(" +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        ")";
    }
    ctx.fillText(character, -10, 10);
    ctx.restore();
  }

  for (let i = 1; i <= lineAmount; i++) {
    let x1 = Math.random() * canvas.width;
    let y1 = Math.random() * canvas.height;
    let x2 = Math.random() * canvas.width;
    let y2 = Math.random() * canvas.height;
    let color = lineColor;
    if (randomLineColors)
      color =
        "rgb(" +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        ")";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  return canvas.toDataURL();
};

const validate = (
  input: string,
  answer: string,
  caseSensitive: boolean = true
) => {
  return (
    (caseSensitive && input === answer) ||
    (!caseSensitive && input.toLowerCase() === answer.toLowerCase())
  );
};

export { generateCaptchaImage, generateCaptchaText, validate };
export default generate;
