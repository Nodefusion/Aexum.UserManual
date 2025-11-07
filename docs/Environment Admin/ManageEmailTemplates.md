# Manage Email Templates

This guide describes the email template management interface in Aexum, including how to view, create, and edit email templates.

## Email Templates View Page

The email templates view page provides access to all email templates in the current environment. The page contains two main tabs:

### Overview Tab

The Overview tab displays a grid of all email templates in the current environment.

**Features**:
* View all email templates with their Type, Language, and Subject
* Filter templates by various criteria (Type, Language, etc.)
* See which templates are marked as default (indicated in the grid)
* Click on any template row to navigate to the edit page for that template

**Grid Columns**:
* **Type** - The email template type (e.g., Asset Assignment, Asset Return)
* **Language** - The culture code (e.g., "en-US", "hr-HR")
* **Subject** - The email subject line
* **IsDefault** - Indicator showing if this is the default template for the Type/Language combination

### Create Tab

The Create tab allows users to create a new email template.

**Form Fields**:

* **Type** (dropdown) - Select the template type from available options
  * When a type is selected, the form will automatically pre-populate with the current default template for the selected type and the environment's default language
  * This provides a starting point that you can customize for your needs
* **Language** - Enter the culture code (e.g., "en-US", "hr-HR", "de-DE")
* **Subject** - Write the email subject line (supports template variables like `{{DisplayName}}`)
* **Body** - Compose the email body in HTML format
  * Supports template variables
  * Supports `<foreach>` blocks for iterating over collections
  * Full HTML formatting available
* **IsDefault** (checkbox) - Mark this template as the default for the specified Type and Language combination
  * If another template is already marked as default for this combination, you must first uncheck it before setting a new default

**Actions**:
* **Create** - Saves the new email template
* **Cancel** - Discards changes and returns to the Overview tab

## Email Template Edit Page

When you click on an email template in the Overview tab, you are taken to the edit page for that template. The edit page contains multiple tabs:

### Overview Tab

The Overview tab contains the email template form with all editable fields.

**Form Fields**:

* **Type** (read-only) - The template type cannot be changed after creation
* **Language** - The culture code for this template
* **Subject** - The email subject line (supports template variables)
* **Body** - The email body content in HTML format (supports template variables and foreach blocks)
* **IsDefault** (checkbox) - Indicates whether this is the default template
  * Only one template can be marked as default for each Type and Language combination
  * To set a different template as default, first uncheck this property, then mark the new template as default

**Actions**:

* **Update** - Saves changes to the template
* **Delete** - Removes the template from the environment
  * Requires confirmation before deletion
  * System default templates cannot be deleted
  * If you delete a custom default template, the system will fall back to the built-in default

### Comments Tab

The Comments tab displays comments related to this email template.

**Features**:
* View all comments associated with this template
* Add new comments to document changes or provide notes
* Facilitates team collaboration and communication about template modifications
* Comments are timestamped and attributed to the user who created them

### Version History Tab

The Version History tab shows all previous versions of this email template.

**Information Displayed**:
* **Version ID** - Unique identifier for each version
* **Created by** - Display name of the user who created this version
* **Created on** - Timestamp when the version was saved
* **View Comparison** - Link to compare versions

**Features**:
* Click on a version to view its details
* Compare the current version with any historical version
* Compare two historical versions with each other
* Useful for tracking changes over time and reverting to previous versions if needed

## Best Practices

* **Test Templates**: Before setting a template as default, test it thoroughly with sample data
* **Use Comments**: Document significant changes in the Comments tab for team awareness
* **Version Control**: Review version history before making major changes to understand previous modifications
* **Language Coverage**: Create templates for all cultures/languages used by your users
* **HTML Validation**: Ensure your HTML is well-formed to avoid rendering issues in email clients
* **Variable Testing**: Verify that all variables are correctly spelled and will have values when emails are sent

## Related Documentation

* [Email Templates](EmailTemplate.md) - Overview of email template functionality
* [Email Template Types and Properties](EmailTemplateTypesAndProperties.md) - Detailed information about template types and available variables