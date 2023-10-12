import sharp from 'sharp';
import svgBuilder from "svg-builder";
import { CaptchaOptions, GeneratedCaptcha, GetBuilderOptions, generateCaptcha, getCharPosition, getImageGenerationOptions, getLinePosition } from './utils.js';

const generate = async (charAmount: number, captchaOptions?: Partial<CaptchaOptions>): Promise<GeneratedCaptcha> => {
  const answer = generateCaptcha(charAmount);
  const captcha = await generateImage(answer, captchaOptions)
  return { answer, captcha };
};

const getBuilder = ({ width, height, backgroundColor }: GetBuilderOptions) => svgBuilder.width(width).height(height).rect({ width, height, fill: backgroundColor });

export const generateImage = async (captcha: string, options?: Partial<CaptchaOptions>) => {
  const { width,
    height,
    fontSize,
    fontWeight,
    backgroundColor,
    fontColor,
    font,
    lineAmount,
    lineColor,
    lineWidth } = getImageGenerationOptions(options)

  const draw = getBuilder({ width, height, backgroundColor })

  for (let index = 0; index < captcha.length; index++) {
    const character = captcha.charAt(index);
    const { x, y, angle } = getCharPosition({ height, width, index, captchaLenght: captcha.length })
    draw.text(
      {
        x,
        y,
        fill: fontColor,
        'font-family': font,
        'font-size': fontSize,
        'font-weight': fontWeight,
        transform: `rotate(${(angle * 180) / Math.PI} ${x} ${y})`
      },
      character
    );
  }

  for (let i = 0; i < lineAmount; i++) {
    const linePosition = getLinePosition({ height, width })
    draw.line({ ...linePosition, stroke: lineColor, 'stroke-width': lineWidth });
  }

  const svgString = draw.render();
  const buffer = await sharp(Buffer.from(svgString)).png().toBuffer();

  return buffer;
};


export default generate;
