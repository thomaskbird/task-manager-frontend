import * as React from "react";
import "./SlidePane.scss";

export interface SlidePaneProps {}

interface State {}

export class SlidePane extends React.Component<SlidePaneProps, State> {
    public static readonly displayName = "Slide Pane";

    constructor(props: SlidePaneProps, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className={"SlidePane animated"}>
                Slide Pane
            </div>
        );
    }
}