import {Label} from "../interfaces";

export const MOCKS = {
  labels: [
    {
      id: 1,
      name: "Groceries",
      slug: "groceries",
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    },
    {
      id: 2,
      name: "Work Tasks",
      slug: "work-tasks",
      created_at: "2018-03-11 12:00:00",
      updated_at: "2019-08-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    },
    {
      id: 3,
      name: "Todo",
      slug: "todo",
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    }
  ],
  lists: [
    {
      id: 1,
      parent_id: 0,
      name: "Thomas",
      slug: "thomas",
      note: "A set of tasks for Thomas",
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    },
    {
      id: 2,
      parent_id: 1,
      name: "Thomas",
      slug: "thomas",
      note: "A set of tasks for Grace",
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    },
    {
      id: 3,
      parent_id: 0,
      name: "Thomas",
      slug: "thomas",
      note: "Tasks for anybody",
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    }
  ],
  tasks: [
    {
      id: 1,
      list_id: 1,
      text: "This is the first task of the list",
      due_at: undefined,
      completed_at: undefined,
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    },
    {
      id: 2,
      list_id: 2,
      text: "This is the second task text of the second list",
      due_at: undefined,
      completed_at: undefined,
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    },
    {
      id: 3,
      list_id: 2,
      text: "This is the third task of the second list",
      due_at: undefined,
      completed_at: undefined,
      created_at: "2018-10-11 12:00:00",
      updated_at: "2018-10-11 12:00:00",
      deleted_at: "2018-10-11 12:00:00"
    }
  ]
};
