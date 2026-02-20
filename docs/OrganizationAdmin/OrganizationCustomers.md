# Organization Customers

Every Organization can manage relationships with other partner organizations as customers. Customers represent partner organizations that have granted you delegated access or permissions. Only customer relationships that the partner has explicitly approved will appear on the Customers page.

## Overview

The Customers page displays a grid of all customer (partner organization) relationships associated with your organization—these are only the partners who have given permission. Users with the `CustomersAdministration` permission can access this page to view and manage customer relationships. Partners that have not yet granted permission will not appear in this list.

## Customer Management

### Viewing Customers

The Customers page displays all customer relationships in a sortable and filterable grid format:

* **Search** - Locate customers by partner organization name using case-insensitive search
* **Sorting** - Order customer records by organization name or other columns
* **Selection** - Select one or more customers using checkboxes for bulk operations
* **Refresh** - Reload the customer list to view latest data

### Export Customers

Users can export customer data to CSV format:

1. Navigate to the **Customers** page
2. Optionally select specific customers using checkboxes
3. Click the **Export** action in the grid ribbon
4. The CSV file exports all selected customers or the complete customer list

**Note:** Exported data includes Partner Organization names and is suitable for external reporting or analysis.

### Delete Customer Relationships

To remove customer relationships:

1. Navigate to the **Customers** page
2. Select one or more customers using checkboxes
3. Click the **Delete** button in the grid ribbon
4. Confirm the deletion in the confirmation dialog

When a customer relationship is deleted:
* All associated permission groups are cascade-deleted
* All access and permissions for that customer are permanently removed
* Audit logs record the deletion action

**Warning:** Deleting customer relationships is irreversible. All permission groups and access for the selected customers will be permanently removed. Ensure no critical partnerships depend on these relationships before proceeding.

## Related Documentation

* [Organization Customers Administration](./OrganizationCustomersAdmin.md) - Creating and configuring customer permission groups
* [Organization](./Organization.md) - Managing your Organization
* [Organization Roles](./OrganizationRoles.md) - Managing roles at the organization level

