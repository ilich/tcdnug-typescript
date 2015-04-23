class TextWriter {
    element: HTMLElement;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId);
        if (!this.element) {
            throw new Error(elementId + " is not found");
        }

        this.element.innerHTML = "";
    }

    write(msg: number|string|boolean) {
        var msgElement = document.createElement("div");
        msgElement.textContent = msg.toString();
        this.element.appendChild(msgElement);
    }
} 