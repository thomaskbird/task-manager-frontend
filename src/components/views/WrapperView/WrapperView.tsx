import * as React from "react";
import "./WrapperView.scss";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../../partials/Sidebar/Sidebar";
import { ContentArea } from "../../partials/ContentArea/ContentArea";
import {SlidePane} from "../../partials/SlidePane/SlidePane";
import {Modal} from "../../partials/Modal/Modal";
import { ModalData, ModalDataType, SlidePaneListData } from "../../../interfaces";

export interface WrapperViewProps {}

interface State {
  isSlidePaneOpen: boolean;
  isModalOpen: boolean;
  modalData: ModalData | undefined;
  slidepaneMockListData: SlidePaneListData | undefined;
}

export class WrapperView extends React.Component<WrapperViewProps, State> {
  public static readonly displayName = "Dashboard";

  constructor(props: WrapperViewProps, context: any) {
    super(props, context);

    this.state = {
      isSlidePaneOpen: false,
      isModalOpen: false,
      modalData: undefined,
      slidepaneMockListData: undefined
    };
  }

  public componentDidMount(): void {
    const slidepaneMockListData: SlidePaneListData = {
      list: {
        id: 1,
        parent_id: 0,
        name: "First test list",
        slug: "first-test-list",
        note: "",
        due_at: undefined,
        completed_at: undefined,
        created_at: "2019-01-01 00:00:00",
        updated_at: "2019-01-01 00:00:00",
        deleted_at: undefined
      },
      tasks: [],
      comments: []
    };

    this.setState({
      slidepaneMockListData: slidepaneMockListData
    })
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
          <SlidePane
            listData={this.state.slidepaneMockListData}
          />
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
