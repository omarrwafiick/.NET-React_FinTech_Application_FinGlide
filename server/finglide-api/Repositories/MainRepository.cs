using System.Linq.Expressions;
using finglide_api.Contracts;
using finglide_api.Data;
using finglide_api.models;
using Microsoft.EntityFrameworkCore;

namespace finglide_api.Repositories
{
    public class MainRepository<T> : IMainRepository<T> where T : class ,IBaseEntity
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public MainRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        } 

        public async Task<List<T>> Get() => await _applicationDbContext.Set<T>().ToListAsync();
        public async Task<List<T>> Get(Expression<Func<T, object>> include) => await _applicationDbContext.Set<T>().Include(include).ToListAsync();
        public async Task<T> Get(int id) => await _applicationDbContext.Set<T>().FindAsync(id);
        public async Task<T> Get(int id, Expression<Func<T, object>> include) => await _applicationDbContext.Set<T>().Include(include).SingleOrDefaultAsync(x=>x.Id==id);
  
        public Task<bool> Create(T model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }
        public Task<bool> Update(T model)
        {
            throw new NotImplementedException();
        }
 
    }
}