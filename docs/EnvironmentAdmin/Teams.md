# Teams

## Overview

Teams provide an organizational structure for grouping users based on functional responsibilities, project assignments, or collaborative requirements. Teams facilitate efficient user administration and collaborative workflows. Team membership enables targeted notifications, shared responsibilities, and streamlined access control.

Later Assets can be assigned to Teams instead to individual users for better management of group responsibilities.

Multiple users can be assigned to a single team, and users can belong to multiple teams simultaneously.

## Field Reference

The following fields are available when configuring a Team:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the team | IT Support Team |
| **Description** | No | Detailed information about the team's purpose and responsibilities | Team responsible for help desk operations and technical support requests |

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)

## Managing Teams

### Viewing Teams

The Teams page displays all team entries in a tabular grid format. The grid interface provides the following capabilities:

* **Search** - Locate teams by keyword or identifier
* **Manage View** - Customize visible columns to display relevant information
* **Sorting** - Order records by any column header
* **Filtering** - Apply column-level filters to refine the displayed results

### Creating Teams

To create a new team:

1. Navigate to the Teams page
2. Select the **Create Team** option
3. Complete the required fields in the team form
4. Review optional fields and populate as needed
5. Submit the form to create the team

### Updating Teams

To modify an existing team:

1. Locate the team in the grid view
2. Select the team entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the team fields as required
5. Submit the form to save changes

### Deleting Teams

**Note:** Teams do not support deletion operations yet.

## Member Management within Teams

### Viewing Team Members

The team detail page includes an **Assigned Members** section that displays all users currently assigned to the team in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific users by name
* **Direct Navigation** - Select user entries to access their detail pages
* **Membership Overview** - Understand team composition and current assignments

### Adding Members to Teams

To add users to a team:

1. Navigate to the team's detail page
2. Navigate to the **Add Members** section
3. Review available users in the grid
4. Use the search filter to locate specific users by name
5. Select the users to add to the team
6. Submit the request to confirm member additions

### Removing Members from Teams

To remove users from a team:

1. Navigate to the team's detail page
2. Navigate to the **Assigned Members** section
3. Review currently assigned users
4. Use the search filter to locate specific users by name
5. Select the users to remove from the team
6. Submit the removal request to confirm

## Use Case Example

**Scenario:** An organization requires collaborative team structures for project-based work, departmental functions, and cross-functional initiatives.

**Solution:** Create teams aligned with organizational needs:

**Functional Teams:**

* **IT Support Team** - Help desk technicians and support specialists
* **Development Team** - Software developers and engineers
* **Quality Assurance Team** - QA engineers and testers

**Project Teams:**

* **Cloud Migration Project** - IT architects, developers, and operations staff
* **ERP Implementation** - Business analysts, developers, and department representatives

**Administrative Teams:**

* **Asset Administrators** - Staff responsible for asset management and tracking
* **Security Team** - Security analysts and compliance officers

Assign users to appropriate teams based on their roles and responsibilities. For example, a senior developer might be a member of both "Development Team" and "Cloud Migration Project" teams.

**Benefits:**

* Organized user grouping by function and responsibility
* Simplified permission and access control management
* Efficient communication and notification distribution
* Clear visibility into team composition and collaboration structures
* Streamlined project-based access provisioning
* Flexible multi-team assignments for cross-functional roles
* Enhanced accountability and responsibility tracking

## Related Documentation

* [Environment Users](../EnvironmentAdmin/EnvironmentUsers.md) - Managing individual user accounts and profiles
* [Assets](../Environment/Assets.md) - Managing individual asset assignment
