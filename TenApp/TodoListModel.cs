using System.ComponentModel.DataAnnotations;

public class TodoListModel
{
    public readonly List<Guid> Archived = new();

    public readonly Dictionary<Guid, TodoModel> Todos = new();

    public readonly List<EditModel> Edits = new();

    public TodoListModel()
    {
        for (var ii = 0; ii < 10; ++ii) {
            var id = Guid.NewGuid();
            Todos.Add(id, new());
            Edits.Add(new(id));
        }
    }

    public void Edit(int index)
    {
         var edit = Edits[index];
         Todos[edit.Id].Title = edit.Todo.Title;
         edit.Todo = null;
    }

    public void EditClick(int index)
    {
         var edit = Edits[index];
         var id = edit.Id;
         if (edit.Todo is null) {
             TodoModel todo = new();
             todo.Title = Todos[id].Title;
             edit.Todo = todo;
         } else {
             edit.Todo = null;
         }
    }

    public void OtherClick(int index)
    {
         var edit = Edits[index];
         edit.OtherOpen = !edit.OtherOpen;
    }

    public void Archive(int index)
    {
        var newId = Guid.NewGuid();
        Todos.Add(newId, new());

        var edit = Edits[index];
        var oldId = edit.Id;
        edit.Id = newId;

        Archived.Add(oldId);
    }
}
