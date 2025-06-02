using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace finglide_api.Dtos
{
    public record PortfolioDto([Required] string UserId, [Required] string Symbol);
}