import { CaptchaSyncOptions, GeneratedCaptchaSync, generateCaptcha, getCharPosition, getImageGenerationOptions, getImageSyncGenerationOptions, getLinePosition } from "./utils.js";

export const generateSync = (charAmmount: number, captchaOptions?: Partial<CaptchaSyncOptions>): GeneratedCaptchaSync => {
    const answer = generateCaptcha(charAmmount)
    const captcha = generateImageSync(answer, captchaOptions)
    return { answer, captcha }
}
export const generateImageSync = (captcha: string, options?: Partial<CaptchaSyncOptions>) => {
    const { width,
        height,
        backgroundColor,
        font,
        fontColor,
        lineAmount,
        lineColor, lineWidth } = getImageSyncGenerationOptions(options)
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    if (!ctx) throw new Error("Could not get canvas's ctx");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.font = font
    for (let index = 0; index < captcha.length; index++) {
        let character = captcha.charAt(index);
        const { x, y, angle } = getCharPosition({ width, height, captchaLenght: captcha.length, index })
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = fontColor;
        ctx.fillText(character, -10, 10);
        ctx.restore();
    }
    for (let i = 1; i <= lineAmount; i++) {
        const { x1, x2, y1, y2 } = getLinePosition({ width, height })
        let color = lineColor;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth
        ctx.stroke();
    }
    return canvas.toDataURL()
}
