# WarehouseLogisticsAPI-Claude

This is the API to manipulate the inventory of Items in a warehouse. It will process either individual requests or a BillofLading from a shipment to update the warehouse Inventory by increasing and removing quantities as available. The UnloadedDate will show if the Inventory will be updated in the future or is part of the current Inventory. You will also be able to start checking a warehouse's Item by SKU and UnloadedDate to see current Inventory. 

BillOfLading processing will handle one warehouse at a time. There will be a lookup table for logistics transfer times between warehouses.

BillOfLading will eventually have the option to be tied to one or more Orders. An optional column for Order primary key will be needed for line requests in the BillOfLading which relate to the Order.