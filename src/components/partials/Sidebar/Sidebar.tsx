import * as React from "react";
import "./Sidebar.scss";

export interface SidebarProps {}

interface State {}

export class Sidebar extends React.Component<SidebarProps, State> {
  public static readonly displayName = "Sidebar";

  constructor(props: SidebarProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={"Sidebar"}>
        Sidebar
      </div>
    );
  }
}
