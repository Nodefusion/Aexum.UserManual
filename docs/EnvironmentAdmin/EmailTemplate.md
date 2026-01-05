# Email Templates

## Overview

Email Templates enable automated communication within the system by defining standardized message formats for specific events and notifications. Each template is associated with a defined Email Template Type that determines when the template is utilized. Templates support multi-language configurations, variable substitution, and HTML formatting to deliver personalized and professional communications to users.

## Field Reference

The following fields are available when configuring an Email Template:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Type** | Yes | Defines the event or purpose triggering this template | Asset Assignment, Asset Return |
| **Subject** | Yes | Email subject line with support for variable substitution | Asset Assigned: {{AssetName}} |
| **Body** | Yes | HTML-formatted email content with support for variable substitution | `<p>Hello {{UserName}},</p><p>Asset {{AssetName}} has been assigned to you.</p>` |
| **Language** | Yes | Culture code specifying the template language | en-US, hr-HR, de-DE |
| **IsDefault** | No | Designates this template as the default for its Type and Language combination | true/false |

## Additional Features

* [Version History](../Reference/VersionHistory.md) - Tracking changes to asset records
* [Comments](../Reference/Comments.md) - Adding notes and discussions to asset records
* Role Based Access Control (RBAC) via Environment [Permission Roles](../EnvironmentAdmin/PermissionRoles.md)
* Variable Substitution
* HTML Formatting Support
* Multi-Language Support

**Benefits:**

* Localized communications respecting user culture preferences
* Consistent messaging across the organization
* Professional presentation through HTML formatting
* Dynamic content through variable substitution
* Centralized template management and version control
* Flexible template customization by event type
* Automatic template selection based on user preferences

## Related Documentation

* [Email Template Types and Properties](EmailTemplateTypesAndProperties.md) - Detailed information about template types and available variables
