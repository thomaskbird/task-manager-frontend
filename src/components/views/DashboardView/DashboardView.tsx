import * as React from "react";
import "./DashboardView.scss";
import {ListAddForm} from "../../partials/forms/ListAddForm/ListAddForm";
import {List} from "../../../interfaces";
import {MOCKS} from "../../../services/mocks";
import {ListItemIndexView} from "../../partials/ListItemIndexView/ListItemIndexView";

export interface DashboardViewProps {}

interface State {
  lists: List[] | undefined;
}

export class DashboardView extends React.Component<DashboardViewProps, State> {
  public static readonly displayName = "Dashboard";

  constructor(props: DashboardViewProps, context: any) {
    super(props, context);

    this.state = {
      lists: []
    };
  }

  public componentDidMount(): void {
    this.setState({
      lists: MOCKS.lists
    })
  }

  public render(): JSX.Element {
    return (
      <div className={"DashboardView"}>
        <ListAddForm
          onSubmit={(vals) => {
            console.log("submit", vals);
          }}
        />

        {this.state.lists ? this.state.lists.map((list, idx) => {
          return (
            <ListItemIndexView
              key={idx}
              list={list}
            />
          )
        }) : (undefined)}

      </div>
    );
  }
}
