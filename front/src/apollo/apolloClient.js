import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://45.119.146.248:4000/gql',
});

export default client;