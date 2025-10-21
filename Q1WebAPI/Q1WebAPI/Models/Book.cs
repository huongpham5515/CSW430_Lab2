using System.ComponentModel.DataAnnotations;

namespace Q1WebAPI.Models
{
    public class Book
    {
        [Key]
        public int bookId { get; set; }
        [MaxLength(200)]
        public string? name { get; set; }
        public string? description { get; set; }

        public double? price { get; set; }

        public string? note { get; set; }

    }
}
