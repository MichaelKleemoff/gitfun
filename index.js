/** @format */

function createPerson(name, age) {
	return {
		name,
		age,
		friends: [],
	};
}

function addPersonAsFriend(person, friends) {
	person.friends.push(friends);
	return person;
}

module.exports = {
	createPerson,
	addPersonAsFriend,
};
