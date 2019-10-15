let people = [
    {
        id: 1,
        name: "chj",
        age: 26,
        gender: "male"
    },
    {
        id: 2,
        name: "chj2",
        age: 17,
        gender: "male"
    },
    {
        id: 3,
        name: "chj3",
        age: 38,
        gender: "female"
    },
];

const getPersonById = id => people.filter(person => person.id === id)[0];
const addPerson = (name, age, gender) => {
    const id = people.length + 1;
    people.push({
        id,
        name,
        age,
        gender
    });
    return people[people.length - 1];
};
const deletePersonById = id => {
    const index = people.findIndex(person => person.id === id);
    if (index < 0) return null;
    return people.splice(index, 1)[0];
};
const updatePersonNameById = (id, name) => {
    const person = getPersonById(id);
    if (!person) return null;
    person.name = name;
    return person;
};


export {people, getPersonById, addPerson, deletePersonById, updatePersonNameById};