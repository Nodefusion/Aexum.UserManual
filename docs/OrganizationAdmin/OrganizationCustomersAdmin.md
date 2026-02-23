# Organization Customer Administration

Customer Administration provides centralized management and member assignment for existing permission groups. This section handles viewing, searching, and member management for permission groups created through Partner Relationships where the partner has granted permission.

## Overview

The Customer Administration page displays all permission groups from customer partners in a comprehensive grid interface. Only permission groups from partners who have explicitly granted you access will appear on this page. Users with the `CustomersAdministration` permission can view permission groups, search and filter them, manage member assignments, and export data. The page focuses on operational member management rather than permission group configuration.

**Note:** Customer Permission Groups are created automatically when establishing Partner Relationships with partners who have granted permission. This administration section manages member assignments and provides visibility into existing groups from approved customer relationships.

## Managing Customer Administration

### Viewing Customer Administration

The Customer Administration page displays all permission groups from approved customer partners in a grid format. These are only the permission groups created by partners who have granted you access:

1. Navigate to the **Customers Admin** page
2. View the complete list of customer permission groups with columns showing:
   * Permission Group name (clickable link)
   * Customer Environment
   * Customer Organization
   * Description
3. Double-click a group or click on the group name link to open its detail page

### Searching and Filtering

Users can search for specific permission groups using multiple criteria:

* **Group Name** - Search by permission group name
* **Customer Organization** - Filter by partner organization name
* **Customer Environment** - Filter by customer environment
* **Case-Insensitive Matching** - Search is not case-sensitive
* **Partial Text Support** - Search matches partial text

### Export Customer Administration

To export permission group data:

1. Navigate to the **Customers Admin** page
2. Optionally select specific permission groups using checkboxes
3. Click the **Export** button in the grid ribbon
4. CSV file downloads with selected or all permission groups

**Note:** Exported data includes Descriptions, Permission Group Name, Customer Organization Name, and Customer Environment Name for reporting and analysis.

### Refreshing Data

Click the **Refresh** button in the grid ribbon to reload the latest permission group data from the server.

### Managing Customer Permission Group Members

#### Viewing Customer Permission Group Details

The Permission Group Edit page displays detailed information and member management:

1. Navigate to the **Customers Admin** page
2. Click on a permission group name or double-click the row
3. The page displays three tabs:
   * **Overview** - Read-only group information
   * **Assigned Members** - Users currently with access
   * **Add Members** - Available users for assignment

#### Overview Tab

The Overview tab displays read-only permission group configuration:

* **Name** - Group identifier (read-only)
* **Description** - Group purpose documentation (read-only)
* **Partner Organization** - Associated partner organization (read-only)
* **Customer Environment** - Target environment (read-only)

**Note:** To modify these settings, update or create new permission groups through Partner Relationships.

#### Assigned Members Tab

The Assigned Members tab manages users currently assigned to the permission group:

1. Navigate to the **Assigned Members** tab
2. View the list of users currently with access to this permission group
3. Use the search field to locate specific members by display name
4. Select one or more members using checkboxes
5. Click the **Delete** button to remove users from the group
6. Click the **Export** button to export member list as CSV

**Features:**
* Search by user display name (case-insensitive, partial match)
* Batch removal of members
* CSV export of member list
* Refresh data to reflect latest changes

**Warning:** Removing members from a permission group immediately revokes their access and permissions. Users will lose access to resources governed by this permission group.

#### Add Members Tab

The Add Members tab manages user assignment to the permission group:

1. Navigate to the **Add Members** tab
2. View available users not yet assigned to this permission group
3. Use the search field to locate specific users by display name
4. Select one or more users using checkboxes
5. Click the **Add** button to assign users to the group
6. Click the **Export** button to export available member list as CSV

**Features:**
* Search by user display name (case-insensitive, partial match)
* Batch assignment of members
* CSV export of available member list
* Refresh data to reflect latest changes

**Note:** Users assigned to a permission group may need to re-authenticate to access updated permissions.

## Customer Permission Group Creation and Management

Customer permission groups are created automatically through Partner Relationships when the partner grants permission:

1. **Permission Grant** - The partner must first grant you access and permission
2. **Creation** - When a Partner Relationship is established with a partner who has granted permission, and "Create Permission Groups" is enabled
3. **Automatic Scoping** - Groups are created for all current organization environments
4. **Native Role Assignment** - Groups inherit the selected native permission role
5. **Member Assignment** - Members added through this administration section
6. **Modification** - Member assignments can be changed; group settings remain read-only

To create or modify permission group configuration, navigate to **Partner Relationships**.

## Related Documentation

* [Organization Partner Relationships](./OrganizationPartnerRelationships.md) - Creating and managing partner relationships and permission groups
* [Organization Customers](./OrganizationCustomers.md) - Viewing and managing customer relationships
* [Organization Roles](./OrganizationRoles.md) - Managing organization-level role assignments
* [Organization Users](./OrganizationUsers.md) - Managing users at the organization level
* [Reference - Permissions](../Reference/Permissions.md) - Comprehensive list of permissions available