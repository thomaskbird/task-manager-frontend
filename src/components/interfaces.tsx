interface Timestamps {
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface ActionTimestamps {
  due_at: string | undefined;
  completed_at: string | undefined;
}

export interface Label extends Timestamps {
  id: number;
  name: string;
  slug: string;
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
  settings = "Settings"
}

export interface ModalData {
  type: ModalDataType;
}