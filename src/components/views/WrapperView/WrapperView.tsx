import * as React from "react";
import "./WrapperView.scss";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../../partials/Sidebar/Sidebar";
import { ContentArea } from "../../partials/ContentArea/ContentArea";
import {SlidePane} from "../../partials/SlidePane/SlidePane";
import {Modal} from "../../partials/Modal/Modal";
import {ModalData, ModalDataType} from "../../../interfaces";

export interface WrapperViewProps {}

interface State {
  isSlidePaneOpen: boolean;
  isModalOpen: boolean;
  modalData: ModalData | undefined;
}

export class WrapperView extends React.Component<WrapperViewProps, State> {
  public static readonly displayName = "Dashboard";

  constructor(props: WrapperViewProps, context: any) {
    super(props, context);

    this.state = {
      isSlidePaneOpen: false,
      isModalOpen: false,
      modalData: undefined
    };
  }

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <div className={this.state.isSlidePaneOpen ? "WrapperView SlidePane__open" : "WrapperView"}>
          <Sidebar
            onToggleSlidePane={() => {
              this.toggleSidePane();
            }}
            onToggleModal={(type) => {
              this.openModal(type);
            }}
          />
          <ContentArea/>
          <SlidePane />
          <Modal
            isOpen={this.state.isModalOpen}
            modalData={this.state.modalData}
            onClosed={() => {
              this.closeModal();
            }}
          />
        </div>
      </BrowserRouter>
    );
  }

  private toggleSidePane(): void {
    this.setState({ isSlidePaneOpen: !this.state.isSlidePaneOpen });
  }

  private openModal(type?: string): void {

    switch(type) {
      case "listAdd":
        this.setState({
          modalData: {
            type: ModalDataType.list
          }
        });
      break;
    }

    this.setState({
      isModalOpen: true
    });
  }

  private closeModal(): void{
    this.setState({
      isModalOpen: false
    });
  }
}
