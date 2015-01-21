function getAttendees(peopleInvited, responses){
  
}



// test
var people = ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 
              'Jack Frost', 'Cupid', 'Father Time'];
var responses = [ 
     {name: 'Easter Bunny', response: 'declined'}, 
     {name: 'Jack Frost', response: 'declined'}, 
     {name: 'Tooth Fairy', response: 'accepted'} 
   ]

console.log(getAttendees(people, responses) === ['Tooth Fairy', 'Frosty the Snowman', 'Cupid', 'Father Time'])
