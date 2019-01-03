import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Timestamps {
  created_at: string;
  updated_at: string;
  deleted_at: string | undefined;
}

export interface ActionTimestamps {
  remind_at: string | undefined;
  due_at: string | undefined;
  completed_at: string | undefined;
}

export interface Label extends Timestamps {
  id: number;
  name: string;
  slug: string;
}

export enum CommentType {
  list = "List",
  task = "Task"
}

export interface Comment extends Timestamps {
  id: number;
  user_id: number;
  target_id: number;
  comment_type: CommentType;
}
export interface List extends Timestamps, ActionTimestamps  {
  id: number;
  parent_id: number;
  name: string;
  slug: string;
  note: string;
}

export interface Task extends Timestamps, ActionTimestamps {
  id: number;
  list_id: number;
  text: string;
  order: number;
}

export enum ModalDataType {
  list = "List",
  label = "Label",
  settings = "Settings"
}

export interface ModalData {
  type: ModalDataType;
}

export interface ApiConfigHeaders {
  "user-agent": string;
  "content-type": string;
  Authorization?: string;
}

export interface ApiConfig {
  cache: string;
  credentials: string;
  headers: ApiConfigHeaders;
  mode: string;
  redirect: string;
  referrer: string;
}

export interface SlidePaneListData {
  list: List;
  tasks: Task[];
  comments: Comment[];
}

export enum SupportedTextInputIconTypes {
  calendar = "calendar",
  clock = "clock",
  pencil = "pencil-alt",
  checkbox = "square",
  add = "plus",
  paperclip = "paper-clip",
  comment = "comment",
  plus = "plus"
}
