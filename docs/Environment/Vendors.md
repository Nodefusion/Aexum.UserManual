# Vendors

## Overview

A Vendor represents an external organization that provides products or services to your enterprise. Vendors encompass manufacturers, suppliers, resellers, warranty providers, and other business partners. The system facilitates comprehensive vendor management through create, read, update, and delete operations, including organization of vendors into logical groupings.

## Field Reference

The following fields are available when configuring a Vendor:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the vendor organization | Lenovo USA |
| **Parent Vendor** | No | In case that it has a parent organization, specify the unique identifier for the parent vendor | Lenovo |
| **Address1** | No | Primary address line for the vendor organization | 1234 Elm Street |
| **Address2** | No | Secondary address line for the vendor organization | Suite 567 |
| **City** | No | City where the vendor organization is located | Springfield |
| **Postal Code** | No | Postal code for the vendor organization's location | 12345 |
| **Country** | No | Country where the vendor organization is located | USA |
| **ERP Code** | No | Enterprise Resource Planning (ERP) code for the vendor organization from external system and for possible integration | VEND-12345 |
| **VAT ID** | No | Value Added Tax identification number for the vendor organization | VAT-67890 |
| **Description** | No | Detailed information about the vendor and their services | Global technology company providing notebooks, desktops, and IT services |

## Additional Features

* Version History
* Comments
* Role Based Access Control (RBAC) via Permission Roles

## Managing Vendors

### Viewing Vendors

The Vendors page displays all vendor entries in a tabular grid format. The grid interface provides the following capabilities:

* **Search** - Locate catalogs by keyword or identifier
* **Manage View** - Customize visible columns to display relevant information
* **Data Export** - Export catalog data for external reporting or analysis
* **Data Import** - Bulk import catalog entries from formatted files
* **Sorting** - Order records by any column header
* **Filtering** - Apply column-level filters to refine the displayed results

### Creating Vendors

To create a new vendor:

1. Navigate to the Vendors page
2. Select the **Create Vendor** option
3. Complete the required fields in the vendor form
4. Review optional fields and populate as needed
5. Submit the form to create the vendor

### Updating Vendors

To modify an existing vendor:

1. Locate the vendor in the grid view
2. Select the vendor entry to open its detail page
3. Modify the vendor fields as required
4. Submit the form to save changes

### Deleting Vendors

To remove a vendor:

1. Navigate to the vendor's detail page
2. Select the **Delete** option
3. Confirm the deletion by entering the vendor name as requested

**Warning:** Ensure the vendor is no longer associated with active asset catalogs or assets records before deletion.

## Vendor Groups

One Vendor can be added to multiple Vendor Groups. Vendor Groups help in organizing vendors into logical categories for easier management and bulk operations. Please refer to the [Vendor Groups](../Environment%20Admin/VendorGroups.md) documentation for more details on managing vendor groups.

## Use Case Example

**Scenario:** An organization manages relationships with multiple vendors supplying various product categories and services.

**Solution:** Create vendor records for each business partner:

* **Manufacturer Vendors** - Lenovo, Dell, HP (equipment manufacturers)
* **Supplier Vendors** - Nodefusion, TechDistributor (authorized resellers)
* **Warranty Vendors** - Lenovo, AppleCare, CompuServe (warranty and support providers)

**Benefits:**

* Centralized vendor information management
* Simplified vendor categorization and organization
* Efficient bulk vendor operations through grouping
* Improved supplier relationship tracking
* Enhanced procurement process efficiency
