import * as React from "react";
import "./Sidebar.scss";
import {Profile} from "../Profile/Profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Label} from "../../../interfaces";
import {MOCKS} from "../../../services/mocks";

export interface SidebarProps {
  onToggleSlidePane(): void;
  onToggleModal(
    type: string
  ): void;
}

interface State {
  labels: Label[] | undefined;
}

export class Sidebar extends React.Component<SidebarProps, State> {
  public static readonly displayName = "Sidebar";

  constructor(props: SidebarProps, context: any) {
    super(props, context);

    this.state = {
      labels: undefined
    };
  }

  public componentDidMount(): void {
    this.setState({
      labels: MOCKS.labels
    })
  }

  public render(): JSX.Element {
    return (
      <div className={"Sidebar"}>
        <Profile/>

        <ul className={"Sidebar__link-list"}>
        {this.state.labels ? this.state.labels.map((label, idx) => {
          return (
            <li key={idx}>
              <FontAwesomeIcon
                icon="list-alt"
                className={"Sidebar__link-list--label"}
              />

              {label.name}
            </li>
          );
        }) : (undefined)}
        </ul>

        <button
          className={"btn btn-light"}
          onClick={() => {
            this.props.onToggleSlidePane();
          }}
        >Toggle Slide Pane</button>
        <button
          className={"btn btn-light Sidebar__add-label-btn"}
          onClick={() => {
            this.props.onToggleModal("labelAdd");
          }}
        >
          <FontAwesomeIcon
            icon="plus"
            className={"Sidebar__add-label"}
          />

          Label
        </button>
      </div>
    );
  }
}
