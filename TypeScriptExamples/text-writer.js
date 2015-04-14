var TextWriter = (function () {
    function TextWriter(elementId) {
        this.element = document.getElementById(elementId);
    }
    TextWriter.prototype.write = function (msg) {
        var msgElement = document.createElement('div');
        msgElement.innerText = msg;
        this.element.appendChild(msgElement);
    };
    return TextWriter;
})();
//# sourceMappingURL=text-writer.js.map