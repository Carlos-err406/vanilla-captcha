export interface CaptchaOptions {
    width: number
    height: number
    backgroundColor: string
    font: string
    fontColor: string
    fontSize: number
    fontWeight: number
    lineColor: string
    lineAmount: number
    lineWidth: number
}
export interface CaptchaSyncOptions {
    width: number
    height: number
    backgroundColor: string
    font: string
    fontColor: string
    lineColor: string
    lineAmount: number
    lineWidth: number
}
export interface GeneratedCaptcha {
    answer: string
    captcha: Buffer
}
export interface GeneratedCaptchaSync {
    answer: string
    captcha: string
}

export interface ValidateOptions {
    caseSensitive: boolean
}
export interface GetBuilderOptions {
    width: number,
    height: number,
    backgroundColor: string
}

export interface GetLinePositionOptions {
    width: number,
    height: number,
}
export interface GetCharPositionOptions {
    captchaLenght: number,
    width: number,
    height: number,
    index: number
}

export const getImageGenerationOptions = (input?: Partial<CaptchaOptions>): CaptchaOptions => ({
    width: 345,
    height: 96,
    backgroundColor: "#FFF",
    font: "Arial",
    fontSize: 30,
    fontWeight: 600,
    fontColor: "#777",
    lineColor: "#777",
    lineAmount: 10,
    lineWidth: 1,
    ...input
})

export const getImageSyncGenerationOptions = (input?: Partial<CaptchaSyncOptions>): CaptchaSyncOptions => ({
    width: 345,
    height: 96,
    backgroundColor: "#FFFFFF",
    font: "Bold 30px Arial",
    fontColor: "#777777",
    lineColor: "#777777",
    lineAmount: 10,
    lineWidth: 1,
    ...input
})

export const generateCaptcha = (charAmmount: number): string => {
    let captcha = "";
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < charAmmount; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
};


export const generateRandomColor = () =>
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";



export const validate = (
    input: string,
    answer: string,
    validateOptions: Partial<ValidateOptions>
) => {
    const options = {
        caseSensitive: true,
        ...validateOptions
    }
    const { caseSensitive } = options
    return (
        (caseSensitive && input === answer) ||
        (!caseSensitive && input.toLowerCase() === answer.toLowerCase())
    );
};


export const getCharPosition = ({ width, height, captchaLenght, index }: GetCharPositionOptions) => ({
    x: (width / captchaLenght) * index + ((width / captchaLenght) / 2),
    y: height / 2,
    angle: (Math.random() - 0.5) * (Math.PI / 4)
})

export const getLinePosition = ({ height: builderHeight, width: builderWidth }: GetLinePositionOptions) => ({
    x1: Math.random() * builderWidth,
    y1: Math.random() * builderHeight,
    x2: Math.random() * builderWidth,
    y2: Math.random() * builderHeight,
})