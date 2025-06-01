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

        public async Task<IEnumerable<T>> GetAsync()
            => await _applicationDbContext.Set<T>().ToListAsync();

        public async Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> condition)
            => await _applicationDbContext.Set<T>().Where(condition).ToListAsync();

        public async Task<IEnumerable<T>> GetAsync(Expression<Func<T, object>> include)
            => await _applicationDbContext.Set<T>().Include(include).ToListAsync();

        public async Task<T> GetAsync(int id)
            => await _applicationDbContext.Set<T>().FindAsync(id);

        public async Task<T> GetAsync(int id, Expression<Func<T, object>> include)
            => await _applicationDbContext.Set<T>().Include(include).SingleOrDefaultAsync(x => x.Id == id);

        public IQueryable<T> Get(Expression<Func<T, bool>> condition)
            => _applicationDbContext.Set<T>().Where(condition).AsQueryable();

        public IQueryable<T> Get(int skip, int take)
            => _applicationDbContext.Set<T>().Skip(skip).Take(take).AsQueryable(); 

        public async Task<int> CreateAsync(T model)
        {
            var stock = await _applicationDbContext.Set<T>().AddAsync(model);
            var result = await _applicationDbContext.SaveChangesAsync();
            return result > 0 ? stock.Entity.Id : -1;
        }

        public async Task<bool> DeleteAsync(T model)
        {
            _applicationDbContext.Set<T>().Remove(model);
            var result = await _applicationDbContext.SaveChangesAsync();
            return result > 0;
        }

        public async Task<bool> UpdateAsync(T model)
        {
            _applicationDbContext.Set<T>().Update(model);
            var result = await _applicationDbContext.SaveChangesAsync();
            return result > 0;
        }

        public async Task<bool> IsExistsAsync(int id)
            => await _applicationDbContext.Set<T>().AnyAsync(x => x.Id == id);

        public async Task<bool> IsExistsAsync(Expression<Func<T, bool>> condition)
            => await _applicationDbContext.Set<T>().Where(condition).AnyAsync();

    }
}