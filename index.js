/** @format */

function createPerson(name, age) {
	return {
		name,
		age,
		friends: [],
	};
}

function addPersonAsFriend(personA, personB) {
	person.friends.push(other);
	return person;
}

module.exports = {
	createPerson,
	addPersonAsFriend,
};
