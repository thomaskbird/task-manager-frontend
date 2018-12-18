import * as React from "react";
import "./LabelView.scss";

export interface LabelViewProps {}

interface State {}

export class LabelView extends React.Component<LabelViewProps, State> {
  public static readonly displayName = "Lists";

  constructor(props: LabelViewProps, context: any) {
    super(props, context);

    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={"LabelView"}>
        Task
      </div>
    );
  }
}