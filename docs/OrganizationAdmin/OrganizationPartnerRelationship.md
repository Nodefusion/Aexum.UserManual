# Organization Partner Relationships

Partner Relationships enable organizations to establish delegated access and collaboration with other organizations. Partner relationships define the foundation for customer permission groups, allowing controlled access to resources and environments across organizational boundaries.

## Overview

The Partner Relationships page provides a unified interface for managing partnerships with other organizations. Users with the `CustomersAdministration` permission can view existing relationships and create new partnerships. The page supports both relationship discovery and creation through a dual-tab interface.

Partner relationships represent formal connections between your organization and partner organizations, establishing the basis for permission group assignments and delegated access management.

## Managing Partner Relationships

### Viewing Partner Relationships

The Partner Relationships Overview tab displays all established partnerships:

1. Navigate to the **Partner Relationships** page
2. The Overview tab displays all existing partner relationships in a grid format
3. View partnership details by partner organization name
4. Use search and filter options to locate specific partnerships
5. Click on a relationship entry to view or modify details

### Creating Partner Relationships

There are two methods to create a new partner relationship:

#### Method 1: Create Tab

1. Navigate to the **Partner Relationships** page
2. Click the **Create** tab to open the relationship creation form
3. Complete the partner relationship form with:
   * **Partner Organization ID** - Enter the GUID of the partner organization
   * **Create Permission Groups** - Enable checkbox to automatically create permission groups for all environments
   * **Native Permission Role** - Select the permission level (Global Administrator or Global Reader) if creating permission groups
4. Submit the form to establish the relationship

#### Method 2: Quick Add with Query Parameters

Organizations can create partner relationships using query parameters:

1. Navigate to: `/organizations/{organizationId}/partnerrelationships?partnerId={partnerOrgId}&permissionRole={roleName}`
2. The Create tab automatically activates
3. Selected partner and permission role are pre-populated
4. Complete remaining fields and submit

**Note:** Pre-filled parameters reduce form entry time for common partnership scenarios.

### Searching and Filtering

Users can search for partner relationships using following criteria:

* **Partner Organization Name** - Locate partnerships by organization

Search is case-insensitive and supports partial text matching.

### Exporting Partner Relationships

To export partner relationship data:

1. Navigate to the **Partner Relationships** page
2. Optionally select specific relationships using checkboxes
3. Click the **Export** action in the grid ribbon
4. CSV file is downloaded with selected or all partnership records

**Note:** Exported data includes Partner Organization and Organization Partner Id.

## Permission Group Integration

Partner relationships automatically generate or update associated permission groups:

* **Automatic Creation** - Permission groups created when relationship established
* **Cascading Updates** - Changes to relationships propagate to permission groups
* **Member Synchronization** - Permission group members inherit relationship permissions

## Related Documentation

* [Organization Customers](./OrganizationCustomers.md) - Managing customer relationships and partnerships
* [Organization Customers Administration](./OrganizationCustomersAdministration.md) - Managing permissions for customer relationships
* [Organization](./Organization.md) - Managing organizations and their configurations
* [Organization Roles](./OrganizationRoles.md) - Managing roles at the organization level
* [Reference - Permissions](../Reference/Permissions.md) - Comprehensive list of permissions available