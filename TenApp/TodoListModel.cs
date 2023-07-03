using System.ComponentModel.DataAnnotations;

public class TodoListModel
{
    public readonly List<Guid> Fresh = new();
    public readonly List<Guid> Archived = new();
    public readonly Dictionary<Guid, TodoModel> Todos = new();

    public TodoListModel()
    {
        for (var ii = 0; ii < 10; ++ii) {
            var id = Guid.NewGuid();
            Fresh.Add(id);
            Todos.Add(id, new());
        }
    }

    public void Archive(int ii)
    {
        var freshId = Guid.NewGuid();
        Todos.Add(freshId, new());

        var oldId = Fresh[ii];
        Fresh[ii] = freshId;

        Archived.Add(oldId);
    }
}
