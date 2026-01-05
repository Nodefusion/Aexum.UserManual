# Permission Groups

## Overview

Permission Groups provide a centralized mechanism for managing user access rights and system permissions. Groups enable efficient security administration by bundling users and permission roles together, allowing administrators to assign permissions to multiple users simultaneously through group membership. Permission Groups support role-based access control (RBAC) principles, simplifying permission management across the organization.

Multiple users and multiple permission roles can be assigned to a single permission group, and both users and roles can belong to multiple groups simultaneously.

## Field Reference

The following fields are available when configuring a Permission Group:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the permission group | IT Administrators |
| **Description** | No | Detailed information about the group's purpose and assigned permissions | Group for IT staff with full administrative access to asset management |

## Additional Features

* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)

## Managing Permission Groups

### Viewing Permission Groups

The Permission Groups page displays all group entries in a tabular grid format. The grid interface provides the following capabilities:

* **Search** - Locate groups by keyword or identifier
* **Manage View** - Customize visible columns to display relevant information
* **Sorting** - Order records by any column header
* **Filtering** - Apply column-level filters to refine the displayed results

### Creating Permission Groups

To create a new permission group:

1. Navigate to the Permission Groups page
2. Select the **Create Permission Group** option
3. Complete the required fields in the permission group form
4. Review optional fields and populate as needed
5. Submit the form to create the permission group

### Updating Permission Groups

To modify an existing permission group:

1. Locate the permission group in the grid view
2. Select the permission group entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the permission group fields as required
5. Submit the form to save changes

### Deleting Permission Groups

**Note:** Permission Groups do not support deletion operations. Inactive groups should be documented in the description field or managed through reduced membership and role assignments.

## Member Management

### Viewing Assigned Members

The permission group detail page includes an **Assigned Members** section that displays all users currently assigned to the group in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific users by name
* **Direct Navigation** - Select user entries to access their detail pages
* **Membership Overview** - Understand group composition and current user assignments

### Adding Members to Permission Groups

To add users to a permission group:

1. Navigate to the permission group's detail page
2. Navigate to the **Add Members** section
3. Review available users in the grid
4. Use the search filter to locate specific users by name
5. Select the users to add to the permission group
6. Submit the request to confirm member additions

### Removing Members from Permission Groups

To remove users from a permission group:

1. Navigate to the permission group's detail page
2. Navigate to the **Assigned Members** section
3. Review currently assigned users
4. Use the search filter to locate specific users by name
5. Select the users to remove from the permission group
6. Submit the removal request to confirm

## Permission Role Management

### Viewing Assigned Roles

The permission group detail page includes an **Assigned Roles** section that displays all permission roles currently assigned to the group in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific permission roles by name
* **Direct Navigation** - Select role entries to access their detail pages
* **Role Overview** - Understand what permissions are granted through the group

### Adding Roles to Permission Groups

To add permission roles to a permission group:

1. Navigate to the permission group's detail page
2. Navigate to the **Add Roles** section
3. Review available permission roles in the grid
4. Use the search filter to locate specific roles by name
5. Select the permission roles to add to the group
6. Submit the request to confirm role assignments

### Removing Roles from Permission Groups

To remove permission roles from a permission group:

1. Navigate to the permission group's detail page
2. Navigate to the **Assigned Roles** section
3. Review currently assigned permission roles
4. Use the search filter to locate specific roles by name
5. Select the permission roles to remove from the group
6. Submit the removal request to confirm

## Use Case Example

**Scenario:** An organization needs to manage access control for various departments and functional roles, ensuring appropriate permissions are granted based on job responsibilities.

**Solution:** Create permission groups aligned with organizational roles and responsibilities:

**Administrative Groups:**

* **System Administrators** 
  * Members: IT Admin Team users
  * Roles: Full System Access, User Management, Environment Configuration
  
* **Asset Administrators**
  * Members: Asset Management Team users
  * Roles: Asset Create, Asset Update, Asset Delete, Asset Catalog Management

**Departmental Groups:**

* **Finance Department Access**
  * Members: Finance Team users
  * Roles: Asset Read, Financial Reporting, Cost Center Management

* **HR Department Access**
  * Members: Human Resources Team users
  * Roles: User Read, Team Management, Asset Assignment

**Project-Based Groups:**

* **Cloud Migration Project Team**
  * Members: Project team members from IT, Development, and Operations
  * Roles: Asset Read, Asset Update, Location Management, Business Unit Read

**Benefits:**

* Centralized permission management through group assignments
* Simplified user onboarding and offboarding processes
* Consistent permission application across user groups
* Flexible permission structures supporting matrix organizations
* Clear visibility into access rights and security policies
* Efficient audit and compliance reporting
* Reduced administrative overhead for permission changes
* Support for temporary project-based access requirements
