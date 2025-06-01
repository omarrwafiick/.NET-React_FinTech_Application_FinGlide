using System.Linq.Expressions;
using finglide_api.Contracts;
using finglide_api.Data; 
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
        public async Task<List<T>> Get(Expression<Func<T, bool>> condition) => await _applicationDbContext.Set<T>().Where(condition).ToListAsync();
        public async Task<List<T>> Get(Expression<Func<T, object>> include) => await _applicationDbContext.Set<T>().Include(include).ToListAsync();
        public async Task<T> Get(int id) => await _applicationDbContext.Set<T>().FindAsync(id);
        public async Task<T> Get(int id, Expression<Func<T, object>> include) => await _applicationDbContext.Set<T>().Include(include).SingleOrDefaultAsync(x=>x.Id==id);

        public async Task<int> Create(T model)
        {
            var stock = await _applicationDbContext.Set<T>().AddAsync(model);
            var result = await _applicationDbContext.SaveChangesAsync();
            return result > 0 ? stock.Entity.Id : -1;
        }

        public async Task<bool> Delete(T model)
        { 
            await Task.Run(() => _applicationDbContext.Set<T>().Remove(model));
            var result = await _applicationDbContext.SaveChangesAsync();
            return result > 0;
        }
        public async Task<bool> Update(T model)
        {
            await Task.Run(()=>_applicationDbContext.Set<T>().Update(model));
            var result = await _applicationDbContext.SaveChangesAsync();
            return result > 0;
        }
 
    }
}