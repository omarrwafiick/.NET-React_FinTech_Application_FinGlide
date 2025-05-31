using System.ComponentModel.DataAnnotations; 

namespace finglide_api.models
{
    public class BaseEntity
    { 
        [Key]
        public int Id { get; set; }
    }
}