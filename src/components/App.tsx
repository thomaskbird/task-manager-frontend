import * as React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { LoginView } from "./views/LoginView/LoginView";
import { WrapperView } from "./views/WrapperView/WrapperView";

export interface AppProps {
  config?: object;
}

interface State {}

export class App extends React.Component<AppProps, State> {
  public static readonly displayName = "App component";

  constructor(props: AppProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <>
          <Route
            exact={true}
            path={"/"}
            component={LoginView}
          />
          <Route
            path={"/dashboard"}
            component={WrapperView}
          />
        </>
      </BrowserRouter>
    );
  }
}
