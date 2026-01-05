# Asset Groups

## Overview

Asset Groups provide a hierarchical organizational structure for categorizing and managing assets. Groups enable efficient asset administration through logical categorization, supporting bulk operations, streamlined filtering, and inheritance of group-level configurations. Asset Groups can be nested to create parent-child relationships that reflect organizational taxonomy.

Multiple assets can be assigned to a single asset group, and assets can belong to multiple groups simultaneously.

## Field Reference

The following fields are available when configuring an Asset Group:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the asset group | Mobile Devices |
| **Parent Asset Group** | No | Optional parent group for hierarchical organization | IT Equipment |
| **Description** | No | Detailed information about the group's purpose and scope | Smartphones and tablets used by field personnel |

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)

## Managing Asset Groups

### Viewing Asset Groups

The Asset Groups page displays all groups in a hierarchical tree structure, providing a clear visualization of parent-child relationships and organizational taxonomy. The tree view interface provides the following capabilities:

* **Hierarchical Navigation** - Expand and collapse group nodes to explore nested structures
* **Search** - Locate groups by keyword or identifier
* **Visual Relationships** - Understand parent-child associations at a glance

### Creating Asset Groups

To create a new asset group:

1. Navigate to the Asset Groups page
2. Locate the **Create Asset Group** form below the tree view
3. Complete the required fields
4. Optionally select a parent asset group for hierarchical organization
5. Populate the description field to document the group's purpose
6. Submit the form to create the asset group

### Updating Asset Groups

To modify an existing asset group:

1. Locate the asset group in the tree view
2. Select the asset group entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the asset group fields as required
5. Submit the form to save changes

### Deleting Asset Groups

To remove an asset group:

1. Navigate to the asset group's detail page
2. Navigate to the **Overview** section
3. Select the **Delete** option
4. Confirm the deletion by entering the asset group name as requested

**Warning:** Ensure the asset group is no longer associated with active assets before deletion. Child asset groups should be reassigned or deleted prior to removing parent groups.

## Asset Management within Groups

### Viewing Group Members

The asset group detail page includes an **Assets** section that displays all assets currently assigned to the group in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific assets within the group
* **Direct Navigation** - Select asset entries to access their detail pages
* **Member Overview** - Understand group composition and assignments

### Adding Assets to Groups

Assets are assigned to groups from the individual asset detail page:

1. Navigate to the asset's detail page (see Assets documentation)
2. Navigate to the **Add to Asset Groups** section
3. Review available asset groups
4. Select the desired groups for asset membership
5. Submit the request to confirm assignments
6. Use the filter option to search by asset group name

### Removing Assets from Groups

Assets can be removed from groups from the individual asset detail page:

1. Navigate to the asset's detail page (see Assets documentation)
2. Navigate to the **Asset Groups** section
3. Review currently assigned asset groups
4. Select the groups from which to remove the asset
5. Submit the removal request to confirm
6. Use the filter option to search by asset group name

## Use Case Example

**Scenario:** An organization manages diverse asset types across multiple departments and needs to organize them for reporting, policy enforcement, and lifecycle management.

**Solution:** Create a hierarchical asset group structure:

**IT Equipment** (Parent)

* **Computing Devices** (Child)
  * Desktop Computers
  * Laptop Computers
  * Tablets
* **Mobile Devices** (Child)
  * Smartphones
  * Mobile Hotspots
* **Network Equipment** (Child)
  * Switches
  * Routers
  * Firewalls

**Office Equipment** (Parent)

* **Furniture** (Child)
  * Desks
  * Chairs
  * Conference Tables
* **Peripherals** (Child)
  * Monitors
  * Printers
  * Scanners

Assign assets to appropriate groups based on their type and function. For example, a laptop might belong to both "Laptop Computers" and a department-specific group like "Finance Department Equipment."

**Benefits:**

* Hierarchical organization reflecting asset taxonomy
* Simplified asset discovery through categorization
* Efficient bulk operations on asset categories
* Flexible multi-group assignments for complex relationships
* Clear visibility into asset portfolio composition
* Streamlined reporting by asset category or type
* Consistent policy application across asset groups