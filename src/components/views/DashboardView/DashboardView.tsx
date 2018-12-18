import * as React from "react";
import "./DashboardView.scss";

export interface DashboardViewProps {}

interface State {}

export class DashboardView extends React.Component<DashboardViewProps, State> {
  public static readonly displayName = "Dashboard";

  constructor(props: DashboardViewProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
