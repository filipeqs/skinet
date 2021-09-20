using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams productParams)
            :base(q => 
                (!productParams.BrandId.HasValue || q.ProductBrandId == productParams.BrandId) && 
                (!productParams.TypeId.HasValue || q.ProductTypeId == productParams.TypeId)
            )
        {
        }
    }
}