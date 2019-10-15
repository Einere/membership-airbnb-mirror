import {addPerson, deletePersonById, getPersonById, people, updatePersonNameById} from "./db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getPersonById(id),
    },
    Mutation: {
        addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
        updatePersonNameById: (_, {id, name}) => updatePersonNameById(id, name),
        deletePersonById: (_, {id}) => deletePersonById(id),
    }
};

export {resolvers};