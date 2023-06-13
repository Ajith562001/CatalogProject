using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using Product_Catalog.Controllers;
using Product_Catalog.Entity;
using System.Collections.Generic;
using System.Linq;

namespace Product_Catalog.Tests
{
    [TestFixture]
    public class CategoryControllerTests
    {
        private CategoryController _controller;

        [SetUp]
        public void Setup()
        {
            _controller = new CategoryController();
        }

        //[Test]
        //public void GetAllCategories_WhenCalled_ReturnsAllCategories()
        //{
        //    // Arrange
        //    var expectedCategories = new List<Category>
        //    {
        //        new Category { CategoryNo = 1, CategoryName = "Category 1" },
        //        new Category { CategoryNo = 2, CategoryName = "Category 2" },
        //        new Category {CategoryNo = 3, CategoryName = "Category 3"}
        //    };

        //    // Act
        //    var result = _controller.GetAllCategories() as OkObjectResult;
        //    var actualCategories = result.Value as List<Category>;

        //    // Assert
        //    Assert.IsNotNull(result);
        //    Assert.AreEqual(200, result.StatusCode);
        //    Assert.IsNotNull(actualCategories);
        //    Assert.AreEqual(expectedCategories.Count, actualCategories.Count);

        //    for (int i = 0; i < expectedCategories.Count; i++)
        //    {
        //        Assert.AreEqual(expectedCategories[i].CategoryNo, actualCategories[i].CategoryNo);
        //        Assert.AreEqual(expectedCategories[i].CategoryName, actualCategories[i].CategoryName);
        //    }
        //}

        //[Test]
        //public void AddCategories_ValidCategory_ReturnsOkResult()
        //{
        //    // Arrange
        //    var category = new Category { Id = 4, Name = "New Category" };

        //    // Act
        //    var result = _controller.AddCategories(category) as OkResult;

        //    // Assert
        //    Assert.IsNotNull(result);
        //    Assert.AreEqual(200, result.StatusCode);

        //    // Additional assertion to verify if the category was added
        //    using (var context = new CatalogContext())
        //    {
        //        var addedCategory = context.Categories.Find(category.Id);
        //        Assert.IsNotNull(addedCategory);
        //        Assert.AreEqual(category.Name, addedCategory.Name);
        //    }
        //}

        [Test]
        public void Delete_ValidId_ReturnsOkResult()
        {
            // Arrange
            var id = 0;

            // Act
            var result = _controller.Delete(id) as OkResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(200, result.StatusCode);

            // Additional assertion to verify if the category was deleted
            using (var context = new CatalogContext())
            {
                var deletedCategory = context.Categories.Find(id);
                Assert.IsNull(deletedCategory);
            }
        }

        //[Test]
        //public void Delete_InvalidId_ReturnsNotFoundResult()
        //{
        //    // Arrange
        //    var id = 3;

        //    // Act
        //    var result = _controller.Delete(id) as NotFoundResult;

        //    // Assert
        //    Assert.IsNotNull(result);
        //    Assert.AreEqual(400, result.StatusCode);
        //}

        //[Test]
        //public void Delete_IdEqualToOne_ReturnsBadRequestResult()
        //{
        //    // Arrange
        //    var id = 1;

        //    // Act
        //    var result = _controller.Delete(id) as BadRequestResult;

        //    // Assert
        //    Assert.IsNotNull(result);
        //    Assert.AreEqual(400, result.StatusCode);
        //}

        //[Test]
        //public void GetAllProduct_ReturnsOkWithListOfProducts()
        //{
        //    // Arrange
        //    var controller = new ProductController();

        //    // Act
        //    var result = controller.GetAllProduct();

        //    // Assert
        //    Assert.IsInstanceOf<OkObjectResult>(result);
        //    var okResult = (OkObjectResult)result;
        //    Assert.IsInstanceOf<List<Entity.Product>>(okResult.Value);
        //}

        //[Test]
        //public void GetByProductNo_WithValidNo_ReturnsOkWithListOfProducts()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    const int validNo = 12345;

        //    // Act
        //    var result = controller.GetByProductNo(validNo);

        //    // Assert
        //    Assert.IsInstanceOf<OkObjectResult>(result);
        //    var okResult = (OkObjectResult)result;
        //    Assert.IsInstanceOf<List<Entity.Product>>(okResult.Value);
        //}

        //[Test]
        //public void GetByProductNo_WithInvalidNo_ReturnsNotFound()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    const int invalidNo = 99999;

        //    // Act
        //    var result = controller.GetByProductNo(invalidNo);

        //    // Assert
        //    Assert.IsInstanceOf<NotFoundResult>(result);
        //}

        //[Test]
        //public void AddProduct_WithValidProduct_ReturnsOk()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    var validProduct = new Entity.Product { ProductNo = 67890 };

        //    // Act
        //    var result = controller.AddProduct(validProduct);

        //    // Assert
        //    Assert.IsInstanceOf<OkResult>(result);
        //}

        //[Test]
        //public void AddProduct_WithNullProduct_ReturnsBadRequest()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    Entity.Product nullProduct = null;

        //    // Act
        //    var result = controller.AddProduct(nullProduct);

        //    // Assert
        //    Assert.IsInstanceOf<BadRequestResult>(result);
        //}

        //[Test]
        //public void UpdateProduct_WithValidProduct_ReturnsOk()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    var validProduct = new Entity.Product { ProductNo = 12345 };

        //    // Act
        //    var result = controller.UpdateProduct(validProduct);

        //    // Assert
        //    Assert.IsInstanceOf<OkResult>(result);
        //}

        //[Test]
        //public void UpdateProduct_WithNullProduct_ReturnsBadRequest()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    Entity.Product nullProduct = null;

        //    // Act
        //    var result = controller.UpdateProduct(nullProduct);

        //    // Assert
        //    Assert.IsInstanceOf<BadRequestResult>(result);
        //}

        //[Test]
        //public void Delete_WithValidNo_ReturnsOk()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    const int validNo = 12345;

        //    // Act
        //    var result = controller.Delete(validNo);

        //    // Assert
        //    Assert.IsInstanceOf<OkResult>(result);
        //}

        //[Test]
        //public void Delete_WithInvalidNo_ReturnsNotFound()
        //{
        //    // Arrange
        //    var controller = new ProductController();
        //    const int invalidNo = 99999;

        //    // Act
        //    var result = controller.Delete(invalidNo);

        //    // Assert
        //    Assert.IsInstanceOf<NotFoundResult>(result);
        //}

    }

}
