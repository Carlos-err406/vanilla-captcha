declare module 'svg-builder' {
    interface SvgBuilder {
        root: string;
        elements: string[];
        width(value: number): this;
        height(value: number): this;
        viewBox(value: string): this;
        addElement(element: any): void;
        newInstance(): SvgBuilder;
        reset(): this;
        render(): string;
        buffer(): Buffer;
        a(attrs: any, content?: any): this;
        g(attrs: any, content?: any): this;
        circle(attrs: any, content?: any): this;
        text(attrs: any, content?: any): this;
        foreignObject(attrs: any, content?: any): this;
        line(attrs: any, content?: any): this;
        rect(attrs: any, content?: any): this;
        path(attrs: any, content?: any): this;
        style(attrs: any, content?: any): this;
    }

    const svgBuilder: SvgBuilder;

    export default svgBuilder;
}
