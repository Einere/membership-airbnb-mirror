import {gql} from "apollo-boost";

const query = {
    getUsers: gql`
        {
            getUsers {
                id,
                facebookId,
                displayName
            }
        }
    `,
    getRooms: gql`
        {
            getRooms {
                id,
                image,
                title,
                capacity,
                showerRoom,
                options
            }
        }
    `

};


export default query;