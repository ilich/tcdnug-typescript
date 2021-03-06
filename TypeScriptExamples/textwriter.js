var TextWriter = (function () {
    function TextWriter(elementId) {
        this.element = document.getElementById(elementId);
        if (!this.element) {
            throw new Error(elementId + " is not found");
        }
        this.element.innerHTML = "";
    }
    TextWriter.prototype.write = function (msg) {
        var msgElement = document.createElement("div");
        msgElement.textContent = msg.toString();
        this.element.appendChild(msgElement);
    };
    return TextWriter;
})();
//# sourceMappingURL=textwriter.js.map