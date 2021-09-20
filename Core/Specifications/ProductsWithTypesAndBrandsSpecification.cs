using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams productParams)
            :base(q => 
                (string.IsNullOrWhiteSpace(productParams.Search) || q.Name.ToLower().Contains(productParams.Search)) &&
                (!productParams.BrandId.HasValue || q.ProductBrandId == productParams.BrandId) && 
                (!productParams.TypeId.HasValue || q.ProductTypeId == productParams.TypeId)
            )
        {
            AddInclude(q => q.ProductType);
            AddInclude(q => q.ProductBrand);
            AddOrderBy(q => q.Name);
            AppplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);

            if (!string.IsNullOrWhiteSpace(productParams.Sort))
            {
                switch (productParams.Sort) 
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id) 
            : base(q => q.Id == id)
        {
            AddInclude(q => q.ProductType);
            AddInclude(q => q.ProductBrand);
        }
    }
}