using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(string sort, int? brandId, int? typeId)
            :base(q => 
                (!brandId.HasValue || q.ProductBrandId == brandId) && 
                (!typeId.HasValue || q.ProductTypeId == typeId)
            )
        {
            AddInclude(q => q.ProductType);
            AddInclude(q => q.ProductBrand);
            AddOrderBy(q => q.Name);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort) 
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