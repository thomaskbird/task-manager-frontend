import * as React from "react";
import "./Sidebar.scss";
import {Profile} from "../Profile/Profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface SidebarProps {
  onToggleSlidePane(): void;
  onToggleModal(
    type: string
  ): void;
}

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
        <Profile/>

        <button
          className={"btn btn-light"}
          onClick={() => {
            this.props.onToggleSlidePane();
          }}
        >Toggle Slide Pane</button>
        <button
          className={"btn btn-light Sidebar__add-list-btn"}
          onClick={() => {
            this.props.onToggleModal("listAdd");
          }}
        >
          <FontAwesomeIcon
            icon="plus"
            className={"Sidebar__add-list"}
          />

          List
        </button>
      </div>
    );
  }
}
