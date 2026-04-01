using WarehouseInventory_Claude.Models.Interfaces;

namespace WarehouseInventory_Claude.Models;

public class Item : IItem
{
    public string Identification { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
}