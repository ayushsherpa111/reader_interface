import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeComponent } from "./components/Home/HomeComponent";
import { ChapterComponent } from "./components/Chapters/ChaptersComponent";

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/chapters" component={ChapterComponent} />
                <Route path="/" render={() => <h1>404</h1>} />
            </Switch>
        </BrowserRouter>
    );
}
