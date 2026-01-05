---
slug: /
sidebar_position: 1
---

# Aexum User Manual

Welcome to the Aexum User Manual. This comprehensive guide provides detailed information about using the Aexum asset management platform to track, manage, and optimize your organization's assets throughout their lifecycle.

## Introduction

Aexum is an enterprise asset management solution that enables organizations to maintain accurate inventory records, track asset assignments, manage vendor relationships, and ensure compliance with organizational policies. The platform supports multi-environment configurations, role-based access control, and hierarchical organizational structures.

## Getting Started

### Access Points

* **Production Environment**: [https://app.aexum.com](https://app.aexum.com)
* **Public Preview Environment**: [https://app-preview.aexum.com](https://app-preview.aexum.com)

### Authentication Requirements

Access to Aexum requires a valid and active [Nodefusion Account](https://login.nodefusion.com). For detailed information about account management, refer to the [Nodefusion Account User Manual](https://account-manual.nodefusion.com).

## Platform Navigation

### Application Header

The application header, located at the top of each page, provides access to essential platform functions:

* **User Identity** - Displays the authenticated user's display name
* **Site Settings** - Access to application configuration and preferences
* **Notifications** - View system notifications and alerts
* **Feedback** - Submit feedback and support requests
* **Authentication** - Sign in or sign out of the application

### Root Dashboard

The root dashboard provides a centralized view of organizations and environments accessible to the authenticated user. From this view, users can:

* View all organizations and their associated environments
* Navigate to organization home pages by selecting the organization name
* Navigate to environment home pages by selecting the environment name
* Access organization management functions (edit, delete) where permissions allow
* Access environment management functions (edit, delete, create) where permissions allow

### Navigation Menu

The navigation menu structure adapts based on the current context (root, organization, or environment level).

#### Root Level Navigation

* **[About](./About.md)** - Application version information and documentation links

#### Organization Level Navigation

* **Home** - Organization details including creation date, region, and country
* **[Organization Roles](./OrganizationAdmin/OrganizationRoles.md)** - Organization-level permission management for user access control
* **[Environments](./OrganizationAdmin/Environments.md)** - Environment listing and creation interface for the organization
* **[Users](../OrganizationAdmin/Users.md)** - Directory of users within the organization with search and profile access
* **Edit Organization** - Edit organization details such as name, region, and country
* **[Activity Log](./Reference/ActivityLogs.md)** - View and manage organization activity logs

#### Environment Level Navigation

**Core Functions:**

* **[Home](./Environment/index.md)** - Environment dashboard and key information
* **[Vendors](./Environment/Vendors.md)** - Vendor management including creation, viewing, and editing vendor records
* **[Asset Catalogs](./Environment/AssetCatalogs.md)** - Asset catalog templates with creation and management capabilities
* **[Assets](./Environment/Assets.md)** - Asset inventory with creation, assignment, and lifecycle tracking, label printing

**Administration Functions:**

* **[Teams](./EnvironmentAdmin/Teams.md)** - Team creation and membership management for collaborative access
* **[Environment Settings](./EnvironmentAdmin/EnvironmentSettings.md)** - Configuration for email providers, notifications, and system integration
* **[Permission Groups](./EnvironmentAdmin/PermissionGroups.md)** - Group-based permission management for efficient access control
* **[Permission Roles](./EnvironmentAdmin/PermissionRoles.md)** - Role definition and permission assignment
* **[Locations](./EnvironmentAdmin/Locations.md)** - Hierarchical location structure for asset placement tracking
* **[Asset Groups](./EnvironmentAdmin/AssetGroups.md)** - Logical asset categorization and organization
* **[Vendor Groups](./EnvironmentAdmin/VendorGroups.md)** - Hierarchical vendor categorization and management
* **[Business Units](./EnvironmentAdmin/BusinessUnits.md)** - Organizational unit structure for asset ownership and accountability
* **[Email Templates](./EnvironmentAdmin/EmailTemplate.md)** - Management of email templates for notifications and communications
* **[Activity Log](./Reference/ActivityLogs.md)** - View and manage environment activity logs
* **[Environment Users](./EnvironmentAdmin/EnvironmentUsers.md)** - User directory and management (environment level)

## Core Concepts

### Organizations

Organizations represent the top-level entity in the Aexum hierarchy. Each organization can contain multiple environments and maintains its own user permissions and access controls.

### Environments

Environments provide isolated workspaces within an organization. Each environment maintains separate asset inventories, vendor relationships, and administrative configurations while sharing organization-level user directories.

### Assets

Assets are individual items tracked within the system, created from Asset Catalog templates. Each asset maintains instance-specific information including serial numbers, assignments, locations, and lifecycle status including asset label printing with QR codes

### Asset Catalogs

Asset Catalogs serve as templates that define specifications and properties for categories of assets. Catalogs standardize asset creation and ensure consistent data collection across similar items.

### Vendors

Vendors represent external organizations that provide products or services. The system tracks manufacturers, suppliers, resellers, and warranty providers with support for hierarchical vendor relationships.

### Permissions

The platform implements role-based access control (RBAC) through a combination of Permission Roles, Permission Groups, and direct user assignments. This layered approach enables flexible and granular access management. Roles are available on organization and environment levels.

List of all permissions can be found in the [Permission Reference](./Reference/PermissionReference.md) documentation.

## Additional information

* [Changelog](./Changelog.md) - Detailed list of platform updates and release notes
* [Roadmap](./Roadmap.md) - Upcoming features and planned enhancements
* [About](./About.md) - Application version information and documentation links

## Related Documentation

* [Nodefusion Account User Manual](https://account-manual.nodefusion.com) - Documentation for managing Nodefusion Accounts
* **Aexum Website**: [https://www.aexum.com](https://www.aexum.com)
