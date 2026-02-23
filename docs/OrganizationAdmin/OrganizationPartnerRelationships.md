# Organization Partner Relationships

Partner Relationships enable you to give other organizations delegated access to your organization. Partner relationships define the foundation for customer permission groups, allowing controlled access to resources and environments across organizational boundaries.

## Overview

The Partner Relationships page provides a unified interface for giving other organizations partner access to your organization. The defining feature of a partner relationship is that it grants a partner organization access to manage your organization.

**Key Characteristics:**
* **Access Grant** - Partner relationships grant a partner organization permission to manage your organization
* **Partner Management** - Partners manage this access relationship from their Organization Customers page (where your organization appears as a customer)
* **One-Way Visibility** - You don't see yourself in Customer Organization, and the partner doesn't see your organization in their Partner Relationships

Users with the `CustomersAdministration` permission can view existing partner relationships and create new partnerships. The page supports both viewing and creation through a dual-tab interface.

## Managing Partner Relationships

### Viewing Partner Relationships

The Partner Relationships Overview tab displays all established partnerships:

1. Navigate to the **Partner Relationships** page
2. The Overview tab displays all existing partner relationships in a grid format
3. View partnership details by partner organization name
4. Use search and filter options to locate specific partnerships
5. Click on a relationship entry to view or modify details

### Creating Partner Relationships

Creating a partner relationship grants that partner organization access to manage your organization. There are two methods to establish this relationship:

#### Method 1: Create Tab

1. Navigate to the **Partner Relationships** page
2. Click the **Create** tab to open the relationship creation form
3. Complete the partner relationship form with:
   * **Partner Organization ID** - Enter the GUID of the partner organization you want to grant access to
   * **Create Permission Groups** - Enable checkbox to automatically create permission groups for all environments
   * **Native Permission Role** - Select the permission level (Global Administrator or Global Reader) if creating permission groups
4. Submit the form to grant the partner organization access to manage your organization

#### Method 2: Quick Add with Query Parameters

Organizations can create partner relationships using query parameters:

1. Navigate to: `/organizations/{organizationId}/partnerrelationships?partnerId={partnerOrgId}&permissionRole={roleName}`
2. The Create tab automatically activates
3. The partner and permission role are pre-populated
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

Partner relationships automatically generate associated permission groups:

* **Automatic Creation** - Permission groups created when relationship established
* **Member Synchronization** - Permission group members inherit relationship permissions

## Related Documentation

* [Organization Customers](./OrganizationCustomers.md) - Managing customer relationships and partnerships
* [Organization Customers Administration](./OrganizationCustomersAdmin.md) - Managing permissions for customer relationships
* [Organization](./Organization.md) - Managing organizations and their configurations
* [Organization Roles](./OrganizationRoles.md) - Managing roles at the organization level
* [Reference - Permissions](../Reference/Permissions.md) - Comprehensive list of permissions available