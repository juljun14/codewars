function getAttendees(peopleInvited, responses){

  for(i = 0; i < responses.length; i++) {
  	if (responses[i].response === 'declined') {
  		var peopleIndex = peopleInvited.indexOf(responses[i].name);
  		peopleInvited.splice(peopleIndex, 1)
  	}
  }
  return peopleInvited;

}