

using System.Linq.Expressions;

namespace finglide_api.Contracts
{
    public interface IMainRepository<T> 
    {
        Task<List<T>> Get();
        Task<List<T>> Get(Expression<Func<T, bool>> condition);
        Task<List<T>> Get(Expression<Func<T, object>> include);
        Task<T> Get(int id);
        Task<T> Get(int id, Expression<Func<T, object>> include); 
        Task<int> Create(T model);
        Task<bool> Update(T model);
        Task<bool> Delete(T model);
    }
}