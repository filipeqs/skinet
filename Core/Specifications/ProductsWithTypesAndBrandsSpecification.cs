using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification()
        {
            AddInclude(q => q.ProductType);
            AddInclude(q => q.ProductBrand);
        }

        public ProductsWithTypesAndBrandsSpecification(int id) 
            : base(q => q.ProductTypeId == id)
        {
            AddInclude(q => q.ProductType);
            AddInclude(q => q.ProductBrand);
        }
    }
}