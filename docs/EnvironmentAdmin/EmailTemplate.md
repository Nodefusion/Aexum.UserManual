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

## Template Configuration

### IsDefault Property

The `IsDefault` property determines template selection behavior:

* **System Default Templates** - When no custom template exists for a specific Type and Language combination, the system utilizes built-in default templates
* **Environment Custom Templates** - Custom templates can be designated as default for specific Type and Language combinations
* **Single Default Rule** - Only one template can be marked as default per Type and Language combination. To designate a different template as default, first remove the `IsDefault` flag from the current default template, then apply it to the new template

### Variable Substitution

Variable Substitution is supported on both the Subject and Body fields of email templates.

Variables are enclosed in double curly braces: `{{VariableName}}`. During email transmission, these placeholders are dynamically replaced with actual values from the system.

**Example:**

```text
Subject: Asset Assignment - {{AssetName}}
```

```text
Body: Hello {{UserName}}, asset {{AssetName}} (Serial: {{SerialNumber}}) has been assigned to you.
```

### Body HTML Formatting

Email templates support comprehensive HTML formatting capabilities:

* **Structure Elements** - `<p>`, `<ol>`, `<ul>`, `<li>`, `<table>`, `<div>`
* **Text Formatting** - `<strong>`, `<em>`, `<u>`, `<h1>` through `<h6>`
* **Links** - `<a href="...">Link Text</a>`
* **Inline CSS** - Style attributes for custom formatting
* **Images** - `<img>` tags with external URL sources

### Multi-Language Support

Email templates support multiple languages through culture-specific configurations. The system automatically selects the appropriate template based on recipient culture preferences.

**Important:** Email delivery respects individual user culture settings, not application interface language. While the system interface may be available in limited languages, email templates can be created in any culture code to accommodate diverse user preferences.

**Template Selection Process:**

1. Identify the recipient's culture preference setting
2. Match the Email Template Type to the triggering event
3. Select template matching both culture and type
4. Fall back to default template if no culture-specific match exists

**Example Scenario:**

When an asset is assigned to a team, each member receives an individual notification. If a user has culture set to "hr-HR" (Croatian) and a Croatian template exists for the Asset Assignment type, the user receives the email in Croatian. Users with "en-US" culture receive the English version.

## Managing Email Templates

### Viewing Email Templates

Email template administration is performed through the Email Templates management interface. Templates are organized by Type and Language for efficient navigation and maintenance.

### Creating Email Templates

To create a new email template:

1. Navigate to the Email Templates management page
2. Select the **Create Email Template** option
3. Select the Email Template Type from available options
4. Specify the Language (culture code)
5. Enter the Subject line with optional variable placeholders
6. Compose the Body content using HTML formatting
7. Optionally set the `IsDefault` flag if this should be the default template
8. Submit the form to create the template

### Updating Email Templates

To modify an existing email template:

1. Locate the template in the management interface
2. Select the template entry to open its detail page
3. Modify the Subject, Body, or IsDefault fields as required
4. Submit the form to save changes

**Note:** Type and Language fields are typically immutable after creation to maintain template organization integrity.

### Deleting Email Templates

To remove an email template:

1. Navigate to the template's detail page
2. Select the **Delete** option
3. Confirm the deletion when prompted

**Warning:** Ensure a default template exists for the Type and Language combination before deleting templates. Removing all custom templates will cause the system to revert to built-in defaults.

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
