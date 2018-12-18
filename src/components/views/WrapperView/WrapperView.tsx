import * as React from "react";
import "./WrapperView.scss";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../../partials/Sidebar/Sidebar";
import { ContentArea } from "../../partials/ContentArea/ContentArea";

export interface WrapperViewProps {}

interface State {}

export class WrapperView extends React.Component<WrapperViewProps, State> {
  public static readonly displayName = "Dashboard";

  constructor(props: WrapperViewProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <div className={"WrapperView"}>
          <Sidebar/>
          <ContentArea/>
        </div>
      </BrowserRouter>
    );
  }
}
