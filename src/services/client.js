import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const API_TOKEN = process.env.GITHUB_TOKEN;
const API_URI = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
    uri: API_URI,
});

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${API_TOKEN}`,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
