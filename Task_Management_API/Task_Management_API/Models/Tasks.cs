namespace Task_Management_API.Models
{
    public class Tasks
    {
        public Guid id { get; set; }
        public string?  Tittle { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }
    }
}
