function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.isWorthIt = function() {
	var weightCrew = this.crew * 1.5;

	if (this.draft - weightCrew > 20) {
		return true;
	} else {
		return false;
	}
}