# Asset Catalogs

## Overview

An Asset Catalog serves as a template that defines the specifications and properties for a category of assets. Each catalog establishes essential attributes including Asset Type, manufacturer, supplier, warranty provider, SKU, EAN, tariff number, country of origin, and additional metadata.

Asset Catalogs are required before individual asset records can be created within the system.

## Field Reference

The following fields are available when configuring an Asset Catalog:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the asset catalog | Lenovo ThinkPad T14s |
| **Asset Type** | Yes | Classification that determines available fields and system functionality. *This field is immutable after creation.* | Notebook |
| **Manufacturer Vendor** | No | Original equipment manufacturer | Lenovo |
| **Supplier Vendor** | No | Authorized supplier or distribution partner | Nodefusion |
| **Warranty Vendor** | No | Organization providing warranty services | Lenovo |
| **SKU / Product Number** | No | Stock keeping unit or manufacturer product identifier | 20U30035US |
| **EAN** | No | European Article Number (barcode standard) | 1234567890123 |
| **Tariff Number** | No | Harmonized System code for customs and international trade | 8471.30.01 |
| **Country of Origin** | No | Manufacturing country for compliance documentation | China |
| **Description** | No | Comprehensive product specifications and details | Lenovo ThinkPad T14s Gen 2, Intel Core i7, 16GB RAM, 512GB SSD |

## Additional Features

* Version History
* Comments
* Role Based Access Control (RBAC) via Permission Roles

## Managing Asset Catalogs

### Viewing Asset Catalogs

The Asset Catalogs page displays all catalog entries in a tabular grid format. The grid interface provides the following capabilities:

* **Search** - Locate catalogs by keyword or identifier
* **Manage View** - Customize visible columns to display relevant information
* **Data Export** - Export catalog data for external reporting or analysis
* **Data Import** - Bulk import catalog entries from formatted files
* **Sorting** - Order records by any column header
* **Filtering** - Apply column-level filters to refine the displayed results

### Creating Asset Catalog

To create a new Asset Catalog:

1. Navigate to the Asset Catalogs page
2. Select the **Create** option
3. Complete all required fields
4. Review optional fields and populate as needed
5. Submit the form to create the catalog

**Important:** The Asset Type field cannot be modified after catalog creation. Ensure the correct type is selected before submission.

### Updating Asset Catalog

To modify an existing Asset Catalog:

1. Locate the catalog in the grid view
2. Select the catalog entry to open its detail page
3. Modify the editable fields as required
4. Submit the form to save changes

**Note:** The Asset Type field remains immutable and cannot be changed during updates.

### Deleting Asset Catalog

To remove an Asset Catalog:

1. Navigate to the catalog's detail page
2. Select the **Delete** option
3. Confirm the deletion when prompted

**Warning:** Ensure the catalog is no longer associated with active assets before deletion.


## Use Case Example

**Scenario:** An organization maintains an inventory of identical laptop models with varying serial numbers.

**Solution:** Create a single Asset Catalog for "Lenovo ThinkPad T14s" that defines:

* Manufacturer: Lenovo
* Model specifications: Intel Core i7, 16GB RAM, 512GB SSD
* SKU: 20U30035US
* Warranty provider: Lenovo

Individual asset records are then created referencing this catalog, with each record distinguished by unique identifiers such as serial numbers, asset tags, and ownership information. This approach ensures consistency in asset specifications while allowing for instance-specific tracking.

**Benefits:**

* Standardized product specifications across all instances
* Simplified asset creation through template reuse
* Centralized maintenance of model information
* Consistent reporting and inventory management
