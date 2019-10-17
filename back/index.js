import {GraphQLServer} from 'graphql-yoga';
import {resolvers} from './graphql/resolvers';
import path from 'path';
// cors
import {whitelist} from './cors/whitelist';
import cors from 'cors';
// session
import session from 'express-session';
// passport
import passport from './middleware/passport-facebook';
// auth
import jwt from 'jsonwebtoken';

const server = new GraphQLServer({
    typeDefs: "./graphql/schema.graphql",
    resolvers,
    options: {
        static: 'public',
        endpoint: '/',
        playground: '/playground',
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

// session
server.express.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));

// passport
server.express.use(passport.initialize());
server.express.use(passport.session());

// routing
server.express.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

server.express.get('/auth/facebook', passport.authenticate('facebookLogin'));

server.express.get('/auth/facebook/callback',
    passport.authenticate('facebookLogin', {
        successRedirect: '/login_success',
        failureRedirect: '/login_fail'
    }));

server.express.get('/login_success', ensureAuthenticated, function (req, res) {
    const token = jwt.sign({
            id: req.user.id,
            displayName: req.user.displayName
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h',
            issuer: 'einere',
            subject: 'userInfo'
        });

    res.send(token);
});
server.express.get('/login_fail', ensureAuthenticated, function (req, res) {
    res.redirect('/');
});

server.express.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
    // 로그인이 되어 있으면, 다음 파이프라인으로 진행
    if (req.isAuthenticated()) {
        return next();
    }
    // 로그인이 안되어 있으면, login 페이지로 진행
    res.redirect('/');
}

server.start(() => {
    console.log('graphQL server is running!');
});