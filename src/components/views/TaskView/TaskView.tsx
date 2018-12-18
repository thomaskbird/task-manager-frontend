import * as React from "react";
import "./TaskView.scss";

export interface TaskViewProps {}

interface State {}

export class TaskView extends React.Component<TaskViewProps, State> {
  public static readonly displayName = "Tasks";

  constructor(props: TaskViewProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={"TaskView"}>
        Task
      </div>
    );
  }
}