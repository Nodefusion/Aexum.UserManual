# Business Units

## Overview

Business Units provide a hierarchical organizational structure for categorizing and managing assets according to organizational divisions, departments, or cost centers. Business Units enable efficient asset administration through logical categorization, supporting financial tracking, departmental accountability, and business-aligned reporting. Business Units can be nested to create parent-child relationships that reflect organizational hierarchy.

Multiple assets can be assigned to a single business unit.

## Field Reference

The following fields are available when configuring a Business Unit:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Name** | Yes | Unique identifier for the business unit | IT Department |
| **Parent Business Unit** | No | Optional parent business unit for hierarchical organization | Technology Division |
| **Description** | No | Detailed information about the business unit's purpose and responsibilities | Information Technology department responsible for infrastructure and application support |

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* [Comments](../Reference/Comments.md) - Adding notes and discussions to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)

## Managing Business Units

### Viewing Business Units

The Business Units page displays all units in a hierarchical tree structure, providing a clear visualization of parent-child relationships and organizational taxonomy. The tree view interface provides the following capabilities:

* **Hierarchical Navigation** - Expand and collapse business unit nodes to explore nested structures
* **Search** - Locate business units by keyword or identifier
* **Visual Relationships** - Understand parent-child associations at a glance

### Creating Business Units

To create a new business unit:

1. Navigate to the Business Units page
2. Locate the **Create Business Unit** form below the tree view
3. Complete the required fields
4. Optionally select a parent business unit for hierarchical organization
5. Populate the description field to document the unit's purpose and responsibilities
6. Submit the form to create the business unit

### Updating Business Units

To modify an existing business unit:

1. Locate the business unit in the tree view
2. Select the business unit entry to open its detail page
3. Navigate to the **Overview** section
4. Modify the business unit fields as required
5. Submit the form to save changes

### Deleting Business Units

To remove a business unit:

1. Navigate to the business unit's detail page
2. Navigate to the **Overview** section
3. Select the **Delete** option
4. Confirm the deletion by entering the business unit name as requested

**Warning:** Ensure the business unit is no longer associated with active assets before deletion. Child business units should be reassigned or deleted prior to removing parent units.

## Asset Management within Business Units

### Viewing Assets by Business Unit

The business unit detail page includes an **Assets** section that displays all assets currently assigned to the business unit in a grid format. The grid interface provides:

* **Search and Filter** - Locate specific assets within the business unit
* **Direct Navigation** - Select asset entries to access their detail pages for business unit updates
* **Unit Portfolio** - Understand asset allocation and ownership by department

## Use Case Example

**Scenario:** An organization needs to track asset ownership and costs across multiple departments and divisions for financial reporting and accountability.

**Solution:** Create a hierarchical business unit structure:

**Corporate** (Parent)

* **Technology Division** (Child)
  * IT Department
  * Software Development
  * Data Analytics
* **Operations Division** (Child)
  * Manufacturing
  * Quality Assurance
  * Supply Chain
* **Business Functions** (Child)
  * Finance Department
  * Human Resources
  * Marketing

**Regional Operations** (Parent)

* **North America** (Child)
  * US Sales
  * Canada Operations

* **EMEA** (Child)
  * UK Office
  * Germany Office

Assign assets to specific business units to maintain departmental accountability. For example, laptops assigned to "IT Department" or manufacturing equipment allocated to "Manufacturing."

**Benefits:**

* Hierarchical organization reflecting corporate structure
* Departmental asset ownership and accountability tracking
* Cost center allocation and financial reporting capabilities
* Simplified asset discovery by organizational unit
* Efficient budget planning and resource allocation
* Clear visibility into departmental asset portfolios
* Streamlined chargeback and cost distribution processes

## Related Documentation

* [Assets](../Environment/Assets.md) - Managing individual asset accounts and profiles
