interface Timestamps {
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface ActionTimestamps {
  due_at: string;
  completed_at: string;
}

export interface Label extends Timestamps {
  id: number;
  name: string;
  slug: string;
}

export interface List extends Timestamps, ActionTimestamps  {
  id: number;
  name: string;
  slug: string;
  note: string;
}

export interface Task extends Timestamps, ActionTimestamps {
  id: number;
  name: string;
  slug: string;
}