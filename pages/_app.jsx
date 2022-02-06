import {ApolloProvider} from "@apollo/client";
import client from '../src/services/client';
import '../styles/global.scss';
import {AppProvider} from "@/services/context";

const App = ({Component, pageProps}) => (
    <ApolloProvider client={client}>
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    </ApolloProvider>
);

export default App;