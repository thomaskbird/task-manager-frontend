# Task Manager

## Data types
| Type                      | Description                   |
|---------------------------|-------------------------------|
| Label                     | A group of lists              |
| List                      | A list of tasks               |
| Task                      | An individual task            |
| Assignments               | Tasks assigned                |
| Reminders                 | Reminders of tasks            |
|

## Data Type Properties

### Labels
| Column                    | Default       | Description                    | Required      | Unique   |
|---------------------------|---------------|--------------------------------|---------------|----------|
| id                        | auto          | Unique identifier              | auto          | yes      |
| name                      | na            | Name of the label              | yes           | no       |
| slug                      | na            | Url friendly version of name   | yes/auto      | no       |
| created_at                | timestamp     | Created timestamp              | yes/auto      | no       |
| updated_at                | timestamp     | Updated timestamp              | yes/auto      | no       |
| deleted_at                | timestamp     | Deleted timestamp              | yes/auto      | no       |

### Lists
| Column                    | Default       | Description                    | Required      | Unique   |
|---------------------------|---------------|--------------------------------|---------------|----------|
| id                        | auto          | Unique identifier              | auto          | yes      |
| name                      | na            | Name of the label              | yes           | no       |
| slug                      | na            | Url friendly version of name   | yes/auto      | no       |
| note                      | na            | A note on the list             | no            | no       |
| due_at                    | timestamp     | Due timestamp                  | no            | no       |
| completed_at              | timestamp     | Completed timestamp            | no            | no       |
| created_at                | timestamp     | Created timestamp              | yes/auto      | no       |
| updated_at                | timestamp     | Updated timestamp              | yes/auto      | no       |
| deleted_at                | timestamp     | Deleted timestamp              | yes/auto      | no       |

### Tasks
| Column                    | Default       | Description                    | Required      | Unique   |
|---------------------------|---------------|--------------------------------|---------------|----------|
| id                        | auto          | Unique identifier              | auto          | yes      |
| name                      | na            | Name of the label              | yes           | no       |
| slug                      | na            | Url friendly version of name   | yes/auto      | no       |
| due_at                    | timestamp     | Due timestamp                  | no            | no       |
| completed_at              | timestamp     | Completed timestamp            | no            | no       |
| created_at                | timestamp     | Created timestamp              | yes/auto      | no       |
| updated_at                | timestamp     | Updated timestamp              | yes/auto      | no       |
| deleted_at                | timestamp     | Deleted timestamp              | yes/auto      | no       |