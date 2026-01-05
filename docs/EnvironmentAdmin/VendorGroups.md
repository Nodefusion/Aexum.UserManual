# Vendor Groups

## Overview

Vendor Groups provide a hierarchical organizational structure for categorizing and managing vendors. Groups enable efficient vendor administration through logical categorization, supporting bulk operations, streamlined filtering, and inheritance of group-level configurations. Vendor Groups can be nested to create parent-child relationships that reflect organizational taxonomy.

Multiple vendors can be assigned to a single vendor group, and vendors can belong to multiple groups simultaneously.

## Field Reference

The following fields are available when configuring a Vendor Group:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the vendor group | Nodefusion |
| **Parent Vendor Group** | No | Optional parent group for hierarchical organization | Technology Providers |
| **Description** | No | Detailed information about the group's purpose and scope | Organizations that manufacture computer hardware and equipment |

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)

## Managing Vendor Groups

### Viewing Vendor Groups

The Vendor Groups page displays all groups in a hierarchical tree structure, providing a clear visualization of parent-child relationships and organizational taxonomy. The tree view interface provides the following capabilities:

* **Hierarchical Navigation** - Expand and collapse group nodes to explore nested structures
* **Search** - Locate groups by keyword or identifier
* **Visual Relationships** - Understand parent-child associations at a glance

### Creating Vendor Groups

To create a new vendor group:

1. Navigate to the Vendor Groups page
2. Locate the **Create Vendor Group** form below the tree view
3. Complete the required fields
4. Optionally select a parent vendor group for hierarchical organization
5. Populate the description field to document the group's purpose
6. Submit the form to create the vendor group

### Updating Vendor Groups

To modify an existing vendor group:

1. Locate the vendor group in the tree view
2. Select the vendor group entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the vendor group fields as required
5. Submit the form to save changes

### Deleting Vendor Groups

To remove a vendor group:

1. Navigate to the vendor group's detail page
2. Navigate to the **Overview** section
3. Select the **Delete** option
4. Confirm the deletion by entering the vendor group name as requested

**Warning:** Ensure the vendor group is no longer associated with active vendors before deletion. Child vendor groups should be reassigned or deleted prior to removing parent groups.

## Vendor Management within Groups

### Viewing Group Members

The vendor group detail page includes a **Vendors** section that displays all vendors currently assigned to the group in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific vendors within the group
* **Direct Navigation** - Select vendor entries to access their detail pages
* **Member Overview** - Understand group composition and assignments

### Adding Vendors to Groups

Vendors are assigned to groups from the individual vendor detail page:

1. Navigate to the vendor's detail page (see [Vendors](../Environment/Vendors.md) documentation)
2. Navigate to the **Add to Vendor Groups** section
3. Review available vendor groups
4. Select the desired groups for vendor membership
5. Submit the request to confirm assignments
6. Use the filter option to search by vendor group name

### Removing Vendors from Groups

Vendors can be removed from groups from the individual vendor detail page:

1. Navigate to the vendor's detail page (see [Vendors](../Environment/Vendors.md) documentation)
2. Navigate to the **Vendor Groups** section
3. Review currently assigned vendor groups
4. Select the groups from which to remove the vendor
5. Submit the removal request to confirm
6. Use the filter option to search by vendor group name

## Use Case Example

**Scenario:** An organization procures hardware, software, and services from numerous vendors across different categories and regions.

**Solution:** Create a hierarchical vendor group structure:

**Technology Providers** (Parent)

* **Hardware Manufacturers** (Child)
  * Lenovo, Dell, HP
* **Software Vendors** (Child)
  * Microsoft, Adobe, Oracle
* **Service Providers** (Child)
  * Cloud Services, Managed IT, Support Services

**Regional Suppliers** (Parent)

* **North America** (Child)
  * US-based distributors and resellers
* **EMEA** (Child)
  * European and Middle Eastern partners
* **APAC** (Child)
  * Asia-Pacific suppliers

Assign vendors to appropriate groups based on their services and location. For example, "Dell" might belong to both "Hardware Manufacturers" and "North America" groups.

**Benefits:**

* Hierarchical organization reflecting business taxonomy
* Simplified vendor discovery through categorization
* Efficient bulk operations on vendor categories
* Flexible multi-group assignments for complex relationships
* Clear visibility into vendor portfolio composition
* Streamlined reporting by vendor category or region

## Related Documentation

* [Vendors](../Environment/Vendors.md) - Managing individual vendor accounts and profiles
