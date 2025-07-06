using System.ComponentModel.DataAnnotations;

public class EditModel
{
    public Guid Id;
    public TodoModel? Todo = null;
    public bool OtherOpen = false;

    public EditModel(Guid Id)
    {
        this.Id = Id;
    }
}
