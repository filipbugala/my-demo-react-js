import * as React from 'react';
import Header from './components/Header';
import SearchBooks from './components/SearchBooks';
import BookDetails from './components/BookDetails';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/"component={SearchBooks} />
          <Route path="/books/:id" component={BookDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
