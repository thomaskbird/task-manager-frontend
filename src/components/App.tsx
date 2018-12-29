import * as React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { LoginView } from "./views/LoginView/LoginView";
import { WrapperView } from "./views/WrapperView/WrapperView";
import { Api } from "../services/Api";

/**
 * Font Awesome - Any icon to be used in the components must be imported here
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faPlus,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTimes,
  faPlus,
  faChevronUp,
  faChevronDown
);

export interface AppProps {
  config?: object;
}

interface State {
  /**
   * Api object
   */
  api: any;
}

export class App extends React.Component<AppProps, State> {
  public static readonly displayName = "App component";

  constructor(props: AppProps, context: any) {
    super(props, context);

    this.state = {
      api: new Api()
    };
  }

  public componentDidMount(): void {
    this.state.api.get("/api/users").then(users => {
      console.log("users", users);
    });
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
