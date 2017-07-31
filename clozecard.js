var ClozeCard = function(text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "......")

    if(!this.fullText.includes(this.cloze)){
		console.log("Oh no! The full text doesn't include " + "'" + this.cloze + "'");
        return;
	};
    
};

module.exports = ClozeCard;