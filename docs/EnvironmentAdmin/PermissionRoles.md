# Permission Roles

## Overview

Permission Roles define specific sets of system permissions that control access to features, functions, and data within the application. Roles serve as building blocks for implementing role-based access control (RBAC), enabling administrators to create granular permission sets that align with organizational responsibilities. Permission Roles are assigned to Permission Groups or individual users to grant appropriate access rights.

Multiple permissions can be assigned to a single permission role, and roles can be assigned to multiple permission groups and users.

## Field Reference

The following fields are available when configuring a Permission Role:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the permission role | Asset Manager |
| **Description** | No | Detailed information about the role's purpose and granted permissions | Role providing full access to asset management functions including create, read, update, and delete operations |

## Additional Features

* Role Based Access Control (RBAC) via Permission Roles

## Managing Permission Roles

### Viewing Permission Roles

The Permission Roles page displays all role entries in a tabular grid format. The grid interface provides the following capabilities:

* **Search** - Locate roles by keyword or identifier
* **Manage View** - Customize visible columns to display relevant information
* **Sorting** - Order records by any column header
* **Filtering** - Apply column-level filters to refine the displayed results

### Creating Permission Roles

To create a new permission role:

1. Navigate to the Permission Roles page
2. Select the **Create Permission Role** option
3. Complete the required fields in the permission role form
4. Review optional fields and populate as needed
5. Submit the form to create the permission role

### Updating Permission Roles

To modify an existing permission role:

1. Locate the permission role in the grid view
2. Select the permission role entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the permission role fields as required
5. Submit the form to save changes

**Note:** Permission Roles do not support deletion operations. Inactive roles should be documented in the description field or managed through removal from all permission groups.

## Permission Management

### Viewing Assigned Permissions

The permission role detail page includes an **Assigned Permissions** section that displays all system permissions currently assigned to the role in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific permissions by name
* **Permission Details** - Understand what system access is granted by this role
* **Assignment Overview** - Review the complete permission set included in the role

### Adding Permissions to Roles

To add system permissions to a permission role:

1. Navigate to the permission role's detail page
2. Navigate to the **Add Permissions** section
3. Review available system permissions in the grid
4. Use the search filter to locate specific permissions by name
5. Select the permissions to add to the role
6. Submit the request to confirm permission assignments

### Removing Permissions from Roles

To remove system permissions from a permission role:

1. Navigate to the permission role's detail page
2. Navigate to the **Assigned Permissions** section
3. Review currently assigned permissions
4. Use the search filter to locate specific permissions by name
5. Select the permissions to remove from the role
6. Submit the removal request to confirm

## Use Case Example

**Scenario:** An organization requires granular permission management to ensure users have appropriate access based on their job functions while maintaining security and compliance.

**Solution:** Create permission roles aligned with functional responsibilities:

**Administrative Roles:**

* **System Administrator Role**
  * Permissions: All system permissions including user management, environment configuration, and security settings
  * Assignment: System Administrators permission group

* **Asset Administrator Role**
  * Permissions: AssetsCreate, AssetsRead, AssetsUpdate, AssetsDelete, AssetCatalogsCreate, AssetCatalogsUpdate, AssetCatalogsDelete
  * Assignment: Asset Administrators permission group

**Operational Roles:**

* **Asset Manager Role**
  * Permissions: AssetsRead, AssetsUpdate, AssetAssignment, AssetReturn, LocationsRead, BusinessUnitsRead
  * Assignment: Asset Management Team permission group

* **Asset Viewer Role**
  * Permissions: AssetsRead, AssetCatalogsRead, LocationsRead, BusinessUnitsRead, VendorsRead
  * Assignment: All Employees permission group

**Department-Specific Roles:**

* **Finance Asset Reporter Role**
  * Permissions: AssetsRead, AssetCatalogsRead, VendorsRead, ExportData, FinancialReporting
  * Assignment: Finance Department Access permission group

* **IT Support Role**
  * Permissions: AssetsRead, AssetsUpdate, AssetAssignment, TeamRead, UsersRead
  * Assignment: IT Support Team permission group
**Benefits:**

* Granular permission control aligned with job responsibilities
* Reusable role definitions across multiple permission groups
* Simplified permission auditing and compliance reporting
* Clear separation of duties and least-privilege access
* Flexible role composition supporting complex organizational structures
* Reduced security risks through appropriate access restrictions
* Streamlined permission changes affecting multiple users
* Consistent permission application across the organization
