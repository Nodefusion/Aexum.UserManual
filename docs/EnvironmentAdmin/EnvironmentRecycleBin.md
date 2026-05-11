# Environment Recycle Bin

## Overview

The Environment Recycle Bin provides a safety net for soft-deleted entities within a specific environment. When records are deleted by users, they are not permanently removed but instead moved to a recoverable state (`DeletedState = Environment`). The Recycle Bin allows authorized users to browse and restore these records before they are permanently purged or escalated to a higher deletion level.

The Environment Recycle Bin is accessible to users with the `EnvironmentRecycleBinManage` permission.

## Supported Entity Types

The following entity types are tracked in the Environment Recycle Bin:

| Entity Type | Description |
| -- | -- |
| **Asset Assignments** | Soft-deleted assignments linking assets to users or teams |
| **Asset Catalogs** | Deleted asset catalog templates |
| **Asset Connections** | Deleted connections between related assets |
| **Asset Groups** | Deleted asset group definitions |
| **Assets** | Deleted individual asset records |
| **Business Units** | Deleted organizational business units |
| **Email Templates** | Deleted environment-level email templates |
| **Locations** | Deleted physical or logical locations |
| **Teams** | Deleted team definitions |
| **Vendor Groups** | Deleted vendor group definitions |
| **Vendors** | Deleted vendor records |

## Deletion States

Aexum uses a multi-state soft-delete model (`EnvironmentDeletedState`) to allow granular control over the lifecycle of deleted records:

| State | Value | Description |
| -- | -- | -- |
| **None** | 0 | Active — record is visible and fully operational |
| **Environment** | 1 | Soft-deleted — recoverable within the Environment Recycle Bin |
| **Organization** | 2 | Soft-deleted at organization level — not currently used for environment-scope entities |
| **System** | 3 | System hold — requires platform-admin intervention to restore |

When a user deletes a record, it transitions from `None → Environment`. The Recycle Bin displays all records in the `Environment` state. Restoring a record transitions it back from `Environment → None`.

## Accessing the Environment Recycle Bin

Navigate to the Environment Recycle Bin via:

**Environment Admin → Recycle Bin**

The page is visible in the navigation menu only if the current user has the `EnvironmentRecycleBinManage` permission for the active environment.

## Using the Recycle Bin

### Viewing Deleted Records

1. Navigate to **Environment Admin → Recycle Bin**
2. Select the desired entity type from the **Entity Type** dropdown
3. The grid will load soft-deleted records for the selected type, sorted by deletion date descending

The grid displays the following columns:

| Column | Description |
| -- | -- |
| **Name** | Name of the deleted record |
| **Description** | Additional context about the record (entity-specific) |
| **Deleted On** | Date and time the record was soft-deleted |
| **Deleted By** | Display name or ID of the user who performed the deletion |

All columns support search filtering. Column visibility can be toggled.

### Restoring Records

To restore one or more soft-deleted records:

1. Navigate to **Environment Admin → Recycle Bin**
2. Select the entity type from the **Entity Type** dropdown
3. Select one or more records using the checkbox column
4. Click the **Restore** button in the toolbar
5. The selected records will transition from `DeletedState = Environment` back to `DeletedState = None` and become active again

**Note:** Only records in `DeletedState = Environment` are shown and eligible for restoration. Records in `DeletedState = System` cannot be restored through the UI and require platform-admin intervention.

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
| `EnvironmentRecycleBinManage` | Required to view and restore soft-deleted environment-scoped records |

This permission is configured via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md).

## Additional Features

* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)
* [Activity Logs](../Reference/ActivityLogs.md) — Restore operations are recorded as `RecordRestoredEnvironment` audit events

## Related Documentation

* [Assets](../Environment/Assets.md) — Managing individual asset records
* [Business Units](../EnvironmentAdmin/BusinessUnits.md) — Managing organizational units
* [Locations](../EnvironmentAdmin/Locations.md) — Managing physical and logical locations
* [Organization Recycle Bin](../OrganizationAdmin/OrganizationRecycleBin.md) — Recycle bin for organization-level entities