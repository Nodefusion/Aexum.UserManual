# Locations

## Overview

Locations provide a hierarchical organizational structure for categorizing and tracking the physical placement of Assets. Locations enable efficient asset management through logical categorization, supporting spatial tracking, inventory control, and location-based reporting. Locations can be nested to create parent-child relationships that reflect organizational facility structures.

Multiple assets can be assigned to a single location.

## Field Reference

The following fields are available when configuring a Location:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the location | Floor 3 |
| **Parent Location** | No | Optional parent location for hierarchical organization | Building A |
| **Description** | No | Detailed information about the location's purpose and characteristics | Third floor office space with 50 workstations |
| **Address1** | No | Primary address line for the vendor organization | 1234 Elm Street |
| **Address2** | No | Secondary address line for the vendor organization | Suite 567 |
| **City** | No | City where the vendor organization is located | Springfield |
| **Postal Code** | No | Postal code for the vendor organization's location | 12345 |
| **Country** | No | Country where the vendor organization is located | USA |

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* [Comments](../Reference/Comments.md) - Adding notes and discussions to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)

## Managing Locations

### Viewing Locations

The Locations page displays all locations in a hierarchical tree structure, providing a clear visualization of parent-child relationships and facility taxonomy. The tree view interface provides the following capabilities:

* **Hierarchical Navigation** - Expand and collapse location nodes to explore nested structures
* **Search** - Locate locations by keyword or identifier
* **Visual Relationships** - Understand parent-child associations at a glance

### Creating Locations

To create a new location:

1. Navigate to the Locations page
2. Locate the **Create Location** form below the tree view
3. Complete the required fields
4. Optionally select a parent location for hierarchical organization
5. Populate the description field to document the location's characteristics
6. Submit the form to create the location

### Updating Locations

To modify an existing location:

1. Locate the location in the tree view
2. Select the location entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the location fields as required
5. Submit the form to save changes

### Deleting Locations

To remove a location:

1. Navigate to the location's detail page
2. Navigate to the **Overview** section
3. Select the **Delete** option
4. Confirm the deletion by entering the location name as requested

**Warning:** Ensure the location is no longer associated with active assets before deletion. Child locations should be reassigned or deleted prior to removing parent locations.

## Asset Management within Locations

### Viewing Assets by Location

The location detail page includes an **Assets** section that displays all assets currently assigned to the location in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific assets within the location
* **Direct Navigation** - Select asset entries to access their detail pages for location updates
* **Location Inventory** - Understand asset distribution and placement

## Use Case Example

**Scenario:** An organization operates multiple facilities with complex internal structures requiring precise asset tracking.

**Solution:** Create a hierarchical location structure:

**Headquarters** (Parent)

* **Building A** (Child)
  * Floor 1 - Reception
  * Floor 2 - IT Department
  * Floor 3 - Finance Department
* **Building B** (Child)
  * Floor 1 - Manufacturing
  * Floor 2 - Quality Control
* **Warehouse** (Child)
  * Storage Zone A
  * Storage Zone B

**Regional Office - EMEA** (Parent)

* **London Office** (Child)
  * Floor 1 - Sales
  * Floor 2 - Marketing

Assign assets to specific locations to maintain accurate spatial tracking. For example, laptops assigned to "Floor 2 - IT Department" or equipment stored in "Storage Zone A."

**Benefits:**

* Hierarchical organization reflecting facility structures
* Accurate asset location tracking and inventory control
* Simplified asset discovery by physical location
* Efficient location-based reporting and auditing
* Clear visibility into asset distribution across facilities
* Streamlined asset transfers and relocation management

## Related Documentation

* [Assets](../Environment/Assets.md) - Managing individual asset accounts and profiles
