# Assets

## Overview

Assets represent individual physical or digital items tracked within the system. Each asset is created from an Asset Catalog template and contains instance-specific information such as serial numbers, ownership, location, and assignment history. Assets support comprehensive lifecycle management including procurement, assignment, maintenance, and disposal tracking.

## Field Reference

The following fields are available when configuring an Asset:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the asset instance | Notebook123 |
| **Asset Type** | Yes | Classification that determines available fields and system functionality. *This field is immutable after creation.* | Notebook |
| **Asset Catalog** | Yes | Template defining the asset specifications and properties | Lenovo ThinkPad T14s |
| **Location** | Yes | Physical or logical location where the asset is situated | Building A - Floor 3 |
| **Business Unit** | Yes | Organizational unit responsible for the asset | IT Department |
| **Parent Asset** | No | Parent asset in a hierarchical relationship | John's Notebooks |
| **Supplier Vendor** | No | Authorized supplier or distribution partner | Nodefusion |
| **Warranty Vendor** | No | Organization providing warranty services | Lenovo |
| **Warranty Start Date** | No | Date when the warranty coverage begins | 2026-01-15 |
| **Warranty End Date** | No | Date when the warranty coverage ends | 2028-01-15 |
| **Serial Number** | No | Manufacturer's unique serial number | PF3A2B3C |
| **ERP Code** | No | Enterprise Resource Planning (ERP) code for the asset organization from external system and for possible integration | FA-12345 |
| **Description** | No | Comprehensive product specifications and details | Lenovo ThinkPad T14s Gen 2, Intel Core i7, 16GB RAM, 512GB SSD |

Other Fields (such as: Manufacturer, Country of Origin etc.) are inherited from the selected Asset Catalog.

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* [Comments](../Reference/Comments.md) - Adding notes and discussions to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)
* Asset Connections - Link related assets together
* Asset Assignments - Track user and team assignments
* Asset Groups - Organize assets into logical categories
* QR Code generation

## Managing Assets

### Viewing Assets

The Assets page displays all asset entries in a tabular grid format. The grid interface provides the following capabilities:

* **Search** - Locate assets by keyword, serial number, or identifier
* **Manage View** - Customize visible columns to display relevant information
* **Data Export** - Export asset data for external reporting or analysis
* **Data Import** - Bulk import asset entries from formatted files
* **Sorting** - Order records by any column header
* **Filtering** - Apply column-level filters to refine the displayed results

You can also display Asset QR code that can be used to scan or print the physical label for easier identification.

### Creating Assets

To create a new asset:

1. Navigate to the Assets page
2. Select the **Create Asset** option
3. Select the Asset Catalog template from available options
4. Complete all required fields (Name, Location, Business Unit)
5. Review optional fields and populate as needed (Serial Number, ERP Code)
6. Submit the form to create the asset

**Note:** The Asset Catalog selection determines available fields and system functionality. Choose the appropriate catalog template carefully.

### Updating Assets

To modify an existing asset:

1. Locate the asset in the grid view
2. Select the asset entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the asset fields as required
5. Submit the form to save changes

### Deleting Assets

To remove an asset:

1. Navigate to the asset's detail page
2. Navigate to the **Overview** section
3. Select the **Delete** option
4. Confirm the deletion by entering the asset name as requested

**Warning:** Ensure the asset has no active assignments or critical connections before deletion. Consider updating the asset status to "Retired" instead of deleting to maintain historical records.

## Asset Connections

Asset Connections enable the establishment of relationships between related assets. Connections facilitate tracking of asset dependencies, component relationships, and associated equipment.

### Viewing Asset Connections

The asset detail page includes an **Asset Connections** section that displays all connections associated with the asset in a grid format. The grid interface provides:

* **Filter by Connection Type** - Display specific relationship types
* **Filter by Asset Name** - Locate connections to specific assets
* **Direct Navigation** - Select connection entries to access detail pages

### Creating Asset Connections

To create a connection between assets:

1. Navigate to the primary asset's detail page
2. Navigate to the **Asset Connections** section
3. Select the **Create Asset Connection** option
4. Specify the connection type and related asset
5. Submit the form to establish the connection

### Managing Asset Connections

To modify or remove asset connections:

1. Navigate to the asset's detail page
2. Navigate to the **Asset Connections** section
3. Select the connection entry to open its detail page
4. Modify connection details or select the **Delete** option
5. Submit the form to confirm changes

## Asset Assignments

Asset Assignments track the allocation of assets to users or teams for specific periods. Assignments maintain accountability, support compliance requirements, and enable accurate asset utilization reporting.

### Viewing Asset Assignments

The asset detail page includes an **Asset Assignments** section that displays all assignments associated with the asset in a grid format. The grid interface provides:

* **Filter by Asset Name** - Locate specific assigned assets
* **Filter by User/Team Name** - Display assignments for specific recipients
* **Filter by Type** - Show user or team assignments
* **Assignment History** - Review past and current assignments

### Creating Asset Assignments

To assign an asset to a user or team:

1. Navigate to the asset's detail page
2. Navigate to the **Asset Assignments** section
3. Select the **Create Asset Assignment** option
4. Specify the assignment type (User or Team)
5. Select the recipient user or team
6. Optionally specify assignment period dates
7. Submit the form to create the assignment

**Note:** Email notifications are sent to assigned users based on configured email templates and user culture preferences.

### Managing Asset Assignments

To modify or remove asset assignments:

1. Navigate to the asset's detail page
2. Navigate to the **Asset Assignments** section
3. Select the assignment entry to open its detail page
4. Modify assignment details or select the **Delete** option
5. Submit the form to confirm changes

**Note:** Removing an assignment may trigger return notifications based on system configuration.

## Use Case Example

**Scenario:** An organization manages a fleet of laptop computers assigned to employees across multiple departments and locations.

**Solution:** Create asset records for each laptop device:

1. **Select Asset Catalog** - Choose "Lenovo ThinkPad T14s" catalog template
2. **Configure Asset Details:**
   * Name: "John Smith - ThinkPad T14s"
   * Serial Number: PF3A2B3C
   * Asset Tag: IT-2024-00123
   * Location: Building A - Floor 3
   * Business Unit: IT Department
   * Warranty End date: 2027-01-15

3. **Establish Connections:**
   * Connect laptop docking station as peripheral
   * Link to monitor accessories

4. **Create Assignment:**
   * Assign to user: John Smith
   * Assignment period: 2024-01-15 to ongoing
   * Email notification sent to user confirming assignment

5. **Track Lifecycle:**
   * Monitor warranty expiration dates
   * Track maintenance and upgrade history through comments

**Benefits:**

* Comprehensive asset tracking from procurement to disposal
* Accurate assignment records and user accountability
* Warranty and maintenance schedule management
* Location and business unit tracking for inventory control
* Historical record preservation through version history
* Automated notifications for assignments and returns
* Reporting capabilities for compliance and auditing
* Integration with asset catalogs for standardized specifications

## Print Asset Labels

You can use Print Asset Labels feature on particular one assets, or for selected assets from the Assets grid view.

Options:

* Show QR Code - include QR code on the printed label
* Show Grid Lines - for easier paper cutting
* Show Asset Name
* Show Asset Serial
* Label Size: 2cm
* Paper Size: 2cm

### Best practice for Asset Labels

* Include QR code when possible to print and scan it
* Do not use Asset Name if you expect long text, QR code could have bigger resolution and hard to print/scan correctly

New Print Preview window will be opened where you can print the labels directly or save them as PDF for later use.

## Related Documentation

* [Asset Catalogs](../Environment/AssetCatalogs.md) - Managing asset templates and
* [Asset Types](../Environment/AssetTypes.md) - Managing asset classifications
* [Business Units](../EnvironmentAdmin/BusinessUnits.md) - Managing organizational units and asset ownership
* [Locations](../EnvironmentAdmin/Locations.md) - Managing physical and logical asset locations
* [Email Templates](../EnvironmentAdmin/EmailTemplates.md) - Configuring email notifications for asset assignments
* [Vendors](../Environment/Vendors.md) - Managing vendor accounts and profiles
