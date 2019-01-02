import * as React from "react";
import "./SlidePane.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlidePaneListData, SupportedTextInputIconTypes } from "../../../interfaces";
import { IconFormInput } from "../IconFormInput/IconFormInput";

export interface SlidePaneProps {
    listData: SlidePaneListData | undefined;
}

interface State {}

/**
 * Slide Pane header
 * Due date:
 * Remind me:
 * Task List:
 * Add task:
 * Note:
 * Comments
 */
export class SlidePane extends React.Component<SlidePaneProps, State> {
    public static readonly displayName = "Slide Pane";

    constructor(props: SlidePaneProps, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return this.props.listData ? (
            <div className={"SlidePane animated"}>
                <div className="SlidePane__header">
                  <FontAwesomeIcon
                    icon="square"
                    className={"SlidePane__header-completed-toggle-button"}
                  />

                  <span className={"SlidePane__header-title-text"}>
                    {this.props.listData.list.name}
                  </span>

                  <FontAwesomeIcon
                    icon="star"
                    className={"SlidePane__header-favorite-toggle-button"}
                  />
                </div>
                <div className={"SlidePane__content-section"}>
                    <IconFormInput
                      placeholderText={"Due..."}
                      icon={SupportedTextInputIconTypes.calendar}
                      val={this.props.listData.list.due_at}
                      onChange={(event) => {
                        console.log("event", event);
                      }}
                    />
                  <IconFormInput
                    placeholderText={"Reminder..."}
                    icon={SupportedTextInputIconTypes.clock}
                    val={this.props.listData.list.remind_at}
                    onChange={(event) => {
                      console.log("event", event);
                    }}
                  />
                  <IconFormInput
                    placeholderText={"Enter note..."}
                    icon={SupportedTextInputIconTypes.pencil}
                    val={this.props.listData.list.due_at}
                    onChange={(event) => {
                      console.log("event", event);
                    }}
                  />
                </div>
            </div>
        ) : <></>;
    }
}