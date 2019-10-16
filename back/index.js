import {express, GraphQLServer} from 'graphql-yoga';
import {resolvers} from './graphql/resolvers';
// cors
import {whitelist} from './cors/whitelist';
import cors from 'cors';

const server = new GraphQLServer({
    typeDefs: "./graphql/schema.graphql",
    resolvers,
    options: {
        static: 'public'
    }
});

// cors
server.express.use(cors({
    origin: function (origin, callback) {
        callback(whitelist.indexOf(origin) > -1 || !origin ? null : new Error('Not allowed by CORS'), true);
        // 만약 서버 - 서버 api로 사용하고 싶으면 아래와 같이 코딩한다
        // 참고 : https://expressjs.com/en/resources/middleware/cors.html
        // callback(whitelist.indexOf(origin) > -1 || !origin ? null : new Error('Not allowed by CORS'), true);
    },
    methods: "GET, POST, PATCH, DELETE",
    credentials: true,
}));

server.start(async () => {
    console.log('graphQL server is running!');
});