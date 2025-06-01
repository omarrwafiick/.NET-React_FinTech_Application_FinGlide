

using System.Linq.Expressions;

namespace finglide_api.Contracts
{
    public interface IMainRepository<T> 
    { 
        Task<IEnumerable<T>> GetAsync();  
        Task<IEnumerable<T>> GetAsync(Expression<Func<T, object>> include);
        IQueryable<T> Get(Expression<Func<T, bool>> condition);
        IQueryable<T> Get(int skip, int take);  
        Task<bool> IsExistsAsync(int id);
        Task<bool> IsExistsAsync(Expression<Func<T, bool>> condition);
        Task<T> GetAsync(int id);
        Task<T> GetAsync(int id, Expression<Func<T, object>> include); 
        Task<int> CreateAsync(T model);
        Task<bool> UpdateAsync(T model);
        Task<bool> DeleteAsync(T model);
    }
}