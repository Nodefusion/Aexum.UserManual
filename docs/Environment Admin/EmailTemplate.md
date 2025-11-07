# Email Templates

Email templates in Aexum are used to send automated notifications to users when specific events occur within the system. 
Each template is associated with a specific EmailTemplateType that determines when and how the template is used.

## Email Template Properties

An email template has the following properties:

* **Type** - defines the intent or purpose for which this template will be used (e.g., Asset Assignment, Asset Return)
* **Language** - the language/culture code for this template (e.g., "en-US", "hr-HR")
* **Subject** - the email subject line (supports template variables)
* **Body** - the email body content in HTML format (supports template variables)
* **IsDefault** - indicates whether this is the default template for the specified Type and Language combination

### IsDefault Property

The `IsDefault` property determines whether a template serves as the fallback for its Type and Language combination:

* **System Default Templates**: If no custom template exists in the environment for a specific language and type, the system will use the built-in default template
* **Environment Custom Templates**: When creating a custom template in your environment, you can mark it as default for that Type and Language
* **Single Default Rule**: Only one template can be marked as default for each Type and Language combination. To set a different template as default, you must first uncheck the `IsDefault` property on the current default template, then mark the new template as default

## Writing Email Templates

### Variable Substitution

Variables are enclosed in double curly braces: `{{VariableName}}`. When the email is sent, these placeholders are replaced with actual values.

### HTML Formatting

Email templates support full HTML formatting:

* Use `<p>`, `<ol>`, `<ul>`, `<li>` for structure
* Use `<strong>`, `<em>` for emphasis
* Use `<a href="...">` for links
* Inline CSS styling is supported

### Multi-Language Support

Email templates support multiple languages through the Language property (culture code, e.g., "en-US", "hr-HR").

**Important**: Emails are always sent per user, even for team-oriented notifications. The system respects each user's **culture setting** (not the application language setting). While the Aexum application interface may only be available in English, email templates can be created in multiple languages to match user culture preferences.

**Example**: When an asset is assigned to a team, each team member will receive an individual email in their preferred culture language. If a user has their culture set to "hr-HR" and a Croatian template exists for that email type, they will receive the email in Croatian.

The system automatically selects the appropriate template based on:
1. The recipient's culture preference
2. The email template type
3. The availability of a matching template (falls back to default if no match exists)

## Related Documentation

* [Email Template Types and Properties](EmailTemplateTypesAndProperties.md) - Detailed information about template types and available variables
* [Manage Email Templates](ManageEmailTemplates.md) - Guide to the email template management interface