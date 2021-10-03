import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ImportationMovies from "./components/ImportationMovies";
import AdditionMovies from "./components/AdditionMovies";
import DeletionMovies from "./components/DeletionMovies";
import SortedSearchedMovies from "./components/SortedSearchedMovies";
import GettingMovie from "./components/GettingMovies";

const App = () => {
  return (
    <div className="App">
      <h2 className="pt-4 mb-4">Movies Catalog</h2>
      <Switch>
        <Route path="/import" component={ImportationMovies} />
        <Route path="/add" component={AdditionMovies} />
        <Route path="/delete" component={DeletionMovies} />
        <Route path="/search" component={SortedSearchedMovies} />
        <Route path="/info" component={GettingMovie} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
