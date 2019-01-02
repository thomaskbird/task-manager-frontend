import * as React from "react";
import "./ListItemIndexView.scss";
import {List} from "../../../interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface ListItemIndexViewProps {
  list: List;
}

interface State {}

export class ListItemIndexView extends React.Component<ListItemIndexViewProps, State> {
  public static readonly displayName = "ListItemIndexView";

  constructor(props: ListItemIndexViewProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={"ListItemIndexView"}>
        <FontAwesomeIcon
          icon={this.props.list.completed_at ? "check-square" : "square"}
          className={"ListItemIndexView__toggle-completed-btn"}
        />

        <span className={"ListItemIndexView__list-title"}>
          {this.props.list.name}
        </span>


        <FontAwesomeIcon
          icon={"thumbtack"}
          className={"ListItemIndexView__toggle-pinned-btn"}
        />

        <FontAwesomeIcon
          icon={"star"}
          className={"ListItemIndexView__toggle-star-btn"}
        />
      </div>
    );
  }
}
