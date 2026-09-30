using Microsoft.AspNetCore.Mvc;
using ClothingStoreAPI.Models;

namespace ClothingStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private static List<Item> items = new List<Item>
        {
            new Item
            {
                Name = "Oversized T-Shirt",
                Code = "1",
                Brand = "Uniqlo",
                UnitPrice = 799
            },

            new Item
            {
                Name = "Classic Hoodie",
                Code = "2",
                Brand = "Nike",
                UnitPrice = 2499
            },

            new Item
            {
                Name = "Straight Cargo Pants",
                Code = "3",
                Brand = "H&M",
                UnitPrice = 1599
            },

            new Item
            {
                Name = "Basic Polo Shirt",
                Code = "4",
                Brand = "Lacoste",
                UnitPrice = 1899
            },

            new Item
            {
                Name = "Denim Jacket",
                Code = "5",
                Brand = "Levi's",
                UnitPrice = 2999
            },

            new Item
            {
                Name = "Relaxed Jogger Pants",
                Code = "6",
                Brand = "Adidas",
                UnitPrice = 1799
            }
        };

        [HttpGet]
        public ActionResult<List<Item>> GetItems()
        {
            return Ok(items);
        }

        [HttpGet("{code}")]
        public ActionResult<Item> GetItem(string code)
        {
            var item = items.FirstOrDefault(
                x => x.Code.Equals(code, StringComparison.OrdinalIgnoreCase)
            );

            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }
    }
}