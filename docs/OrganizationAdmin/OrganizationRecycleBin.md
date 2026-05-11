# Organization Recycle Bin

## Overview

The Organization Recycle Bin provides a safety net for soft-deleted entities managed at the organization level. When environments or users are deleted, they are not permanently removed but instead moved to a recoverable state (`DeletedState = Organization`). The Recycle Bin allows authorized organization administrators to browse and restore these records.

The Organization Recycle Bin is accessible to users with the `OrganizationRecycleBinManage` permission.

## Supported Entity Types

The following entity types are tracked in the Organization Recycle Bin:

| Entity Type | Description |
| -- | -- |
| **Environments** | Soft-deleted environments belonging to the organization |
| **Users** | Soft-deleted user accounts belonging to the organization |

## Deletion States

Aexum uses a multi-state soft-delete model (`OrganizationDeletedState`) for organization-level entities to allow granular control over the lifecycle of deleted records:

| State | Value | Description |
| -- | -- | -- |
| **None** | 0 | Active — record is visible and fully operational |
| **Organization** | 1 | Soft-deleted — recoverable within the Organization Recycle Bin |
| **System** | 2 | System hold — requires platform-admin intervention to restore (no self-service) |

When an environment or user is deleted, it transitions from `None → Organization`. The Organization Recycle Bin displays all records in the `Organization` state. Restoring a record transitions it back from `Organization → None`.

**Note:** Organizations themselves, when deactivated, are set to `System` state and cannot be self-restored through this UI.

## Accessing the Organization Recycle Bin

Navigate to the Organization Recycle Bin via:

**Organization → Recycle Bin**

The page is visible in the navigation menu only if the current user has the `OrganizationRecycleBinManage` permission for the active organization.

## Using the Recycle Bin

### Viewing Deleted Records

1. Navigate to **Organization → Recycle Bin**
2. Select the desired entity type from the **Entity Type** dropdown (`Environments` or `Users`)
3. The grid will load soft-deleted records for the selected type, sorted by deletion date descending

The grid displays the following columns:

| Column | Description |
| -- | -- |
| **Name** | Name of the deleted record (environment name or user display name) |
| **Description** | Additional context — for Users this shows the email address |
| **Deleted On** | Date and time the record was soft-deleted |
| **Deleted By** | Display name or ID of the user who performed the deletion |

All columns support search filtering. Column visibility can be toggled.

### Restoring Records

To restore one or more soft-deleted records:

1. Navigate to **Organization → Recycle Bin**
2. Select the entity type from the **Entity Type** dropdown
3. Select one or more records using the checkbox column
4. Click the **Restore** button in the toolbar
5. The selected records will transition from `DeletedState = Organization` back to `DeletedState = None` and become active again

**Note:** Restoring an environment does not automatically restore the environment's own soft-deleted entities (business units, assets, etc.). Those remain in `EnvironmentDeletedState = Environment` and must be restored separately via the [Environment Recycle Bin](../EnvironmentAdmin/EnvironmentRecycleBin.md).

### Pagination

The grid supports server-side pagination:

* Use the **Items per page** dropdown to control the page size
* Use the page number buttons to navigate between pages
* The total item count is displayed when results are available

### Exporting Data

Use the **Export** option in the toolbar to export the currently displayed (or selected) recycle bin records to CSV format.

## Permissions

| Permission | Description |
| -- | -- |
| `OrganizationRecycleBinManage` | Required to view and restore soft-deleted organization-scoped records |

This permission is configured via Organization [Roles](../OrganizationAdmin/OrganizationRoles.md).

## Additional Features

* Role Based Access Control (RBAC) via Organization [Roles](../OrganizationAdmin/OrganizationRoles.md)
* [Activity Logs](../Reference/ActivityLogs.md) — Restore operations are recorded as `RecordRestoredOrganization` audit events

## Related Documentation

* [Environment Recycle Bin](../EnvironmentAdmin/EnvironmentRecycleBin.md) — Recycle bin for environment-scoped entities
* [Environments](../OrganizationAdmin/Environments.md) — Managing environment records
* [Organization Users](../OrganizationAdmin/OrganizationUsers.md) — Managing user accounts