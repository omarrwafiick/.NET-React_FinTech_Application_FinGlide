

using System.Linq.Expressions;

namespace finglide_api.Contracts
{
    public interface IMainRepository<T> 
    {
        Task<List<T>> Get();
        Task<List<T>> Get(Expression<Func<T, object>> include);
        Task<T> Get(int id);
        Task<T> Get(int id, Expression<Func<T, object>> include); 
        Task<bool> Create(T model);
        Task<bool> Update(T model);
        Task<bool> Delete(int id);
    }
}