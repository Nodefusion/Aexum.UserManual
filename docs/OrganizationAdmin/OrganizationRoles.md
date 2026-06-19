# Organization Roles

Organization Roles define permissions and access levels for users within an organization. Roles are assigned at the organization level and determine what actions and resources users can access or modify. Organization Roles are built-in and cannot be customized; they provide predefined permission sets for common organizational responsibilities.

## Overview

The Organization Roles page provides centralized management of role assignments within your organization. Users with the `OrganizationPermissionRoleAssignmentUpdate` permission can view all available roles and manage role member assignments. The page uses a role-based interface allowing administrators to assign and remove users from roles.

Organization Roles represent predefined permission sets that align with organizational responsibilities, enabling streamlined access control and simplified user management.

## Built-in Organization Roles

The following built-in Organization Roles are available:

| Role Name | Description | Capabilities |
| -- | -- | -- |
| **Organization Owner** | Full access to all organization-level settings and configurations | User management, billing, organization-wide policies, environment management, customer administration, role assignment |
| **Organization Administrator** | Manage organization settings, users, and permissions | Settings management, user management, permission assignment, cannot access billing, role assignment |
| **OrganizationGlobalAdmin** | Full access to all organization-level settings and configurations | Equivalent to Organization Owner role |
| **OrganizationAdmin** | Manage organization settings, users, and permissions | Equivalent to Organization Administrator role |
| **EnvironmentAdmin** | Manage organization environments and environment-specific settings | Environment creation, configuration, user assignment to environments, role assignment for environments |
| **UserAdmin** | Manage organization users and user assignments | User management, permission assignment, user access control |
| **CustomersAdministration** | Manage organization customers and customer relationships | Customer relationship management, customer permission groups, partner relationship administration |

## Managing Organization Roles

### Viewing Organization Roles

The Organization Roles Overview page displays all available built-in roles:

1. Navigate to the **Organization Roles** page
2. The Overview tab displays all organization roles in a grid format
3. View available roles by name
4. Use the search field to locate specific roles
5. Click on a role name link or double-click a row to manage role members

### Searching Roles

Users can search for specific organization roles:

* **Search by Role Name** - Enter role name to filter roles
* **Case-Insensitive Matching** - Search is not case-sensitive
* **Partial Text Support** - Search matches partial role names

### Exporting Roles

To export organization role data:

1. Navigate to the **Organization Roles** page
2. Optionally select specific roles using checkboxes
3. Click the **Export** button in the grid ribbon
4. CSV file downloads with selected or all role records

Exported data includes role names for reporting and documentation.

### Managing Role Members

#### Viewing Assigned Members

To view users assigned to a specific role:

1. Navigate to the **Organization Roles** page
2. Click on a role name link or double-click the row
3. Navigate to the **Assigned Members** tab
4. View the list of users currently assigned to the role in a grid format
5. Use search to locate specific members by display name

#### Assigning Users to Roles

To assign users to a role:

1. Navigate to the **Organization Roles** page
2. Click on a role name to open the role detail page
3. Navigate to the **Add Member** tab
4. View available users not yet assigned to the role
5. Use the search field to locate specific users by display name
6. Select one or more users using checkboxes
7. Click the **Add** button in the grid ribbon to assign users to the role

**Note:** Users assigned to a role may need to re-authenticate to access updated permissions.

#### Removing Users from Roles

To unassign users from a role:

1. Navigate to the **Organization Roles** page
2. Click on a role name to open the role detail page
3. Navigate to the **Assigned Members** tab
4. Select one or more members using checkboxes
5. Click the **Delete** button in the grid ribbon to remove users from the role
6. Confirm the removal action

**Warning:** Removing users from roles immediately revokes associated permissions. Users will lose access to resources governed by that role upon confirmation.

#### Searching Members

The member grid provides search functionality:

* **Search by User Display Name** - Enter name to filter members
* **Case-Insensitive Matching** - Search is not case-sensitive
* **Partial Text Support** - Search matches partial user names

#### Exporting Members

To export role member data:

1. Navigate to a role detail page
2. Navigate to the **Assigned Members** or **Add Member** tab
3. Optionally select specific members using checkboxes
4. Click the **Export** button in the grid ribbon
5. CSV file downloads with selected or all member records

Exported data includes user display names for reporting and auditing.

## Role Hierarchy and Permissions

Organization Roles follow a hierarchical permission model:

* **Owner/GlobalAdmin** - Highest permission level with complete control
* **Administrator/Admin** - Administrative permissions excluding billing access
* **Environment Admin** - Environment-specific management permissions
* **User Admin** - User management permissions
* **Customers Administration** - Customer relationship management permissions

Users inherit all permissions associated with all assigned roles. When a user is assigned multiple roles, they receive the combined permissions from each role.

## Environment Integration

Users assigned organization roles automatically receive corresponding access to associated environments:

1. Users with **EnvironmentAdmin** role gain administrative access to all organization environments
2. Users with **Organization Owner/Administrator** roles gain access to all environments within the organization
3. Environment-level permissions are automatically synchronized with organization role assignments

**Note:** Users may receive additional environment-specific roles that complement their organization-level roles.

## Permission Assignment Requirements

Role member assignment requires the `OrganizationPermissionRoleAssignmentUpdate` permission:

* User must have explicit permission to assign or remove role members
* Only authorized administrators can modify role memberships
* All changes are logged in audit trails
* Notifications may be sent to affected users based on configuration

## Related Documentation

* [Organization Users](./OrganizationUsers.md) - Managing users at the organization level
* [Environment Permission Roles](../EnvironmentAdmin/PermissionRoles.md) - Managing roles at the environment level
* [Reference - Permissions](../Reference/Permissions.md) - Comprehensive list of permissions available
* [Organization](./Organization.md) - Managing organizations and their configurations
