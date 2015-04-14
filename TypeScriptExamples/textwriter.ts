class TextWriter {
    element: HTMLElement;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId);
        if (!this.element) {
            throw new Error(elementId + ' is not found');
        }
    }

    write(msg: string) {
        var msgElement = document.createElement('div');
        msgElement.innerText = msg;
        this.element.appendChild(msgElement);
    }
} 