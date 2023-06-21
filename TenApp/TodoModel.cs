using System.ComponentModel.DataAnnotations;

public class TodoModel
{
    [Required]
    [StringLength(20, ErrorMessage = "Task title is too long.")]
    public string Title { get; set; } = string.Empty;
}
