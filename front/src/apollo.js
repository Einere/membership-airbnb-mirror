import ApolloClient, {gql} from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
});

client
.query({
    query: gql`
        {
            rates(currency: "USD") {
                currency
            }
        }
    `
})
.then(result => console.log(result));

export default client;