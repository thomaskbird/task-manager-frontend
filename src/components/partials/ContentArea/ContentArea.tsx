import * as React from "react";
import "./ContentArea.scss";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DashboardView } from "../../views/DashboardView/DashboardView";
import { LabelView } from "../../views/LabelView/LabelView";
import { TaskView } from "../../views/TaskView/TaskView";

export interface ContentAreaProps {}

interface State {}

export class ContentArea extends React.Component<ContentAreaProps, State> {
  public static readonly displayName = "Content Area";

  constructor(props: ContentAreaProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={"ContentArea"}>
        <BrowserRouter>
          <>
            <Route
              path={"/dashboard"}
              component={DashboardView}
            />
            <Route
              path={"/tasks"}
              component={TaskView}
            />
            <Route
              path={"/lists"}
              component={LabelView}
            />
          </>
        </BrowserRouter>
      </div>
    );
  }
}