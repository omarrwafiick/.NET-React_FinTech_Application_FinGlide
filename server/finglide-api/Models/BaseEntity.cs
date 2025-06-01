using System.ComponentModel.DataAnnotations;
using finglide_api.Contracts;

namespace finglide_api.models
{
    public class BaseEntity : IBaseEntity
    { 
        [Key]
        public int Id { get; set; }
    }
}