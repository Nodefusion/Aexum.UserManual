# Email Templates

Email templates in Aexum are used to send automated notifications to users when specific events occur within the system. 
Each template is associated with a specific EmailTemplateType that determines when and how the template is used.

## Email Template Properties

An email template requires:

* Type - defines the intent or purpose for which this template will be used (e.g., Asset Assignment, Asset Return)
* Language - the language/culture code for this template (e.g., "en-US", "hr-HR")
* Subject - the email subject line (supports template variables)
* Body - the email body content in HTML format (supports template variables)
* IsDefault - indicates whether this is the default template for the specified Type and Language combination

Other properties:
* EnvironmentId - the environment to which this template belongs
* DeletedState - indicates if the template has been deleted (None, User, Environment, System)
* CreatedBy/ModifiedBy - audit tracking
* CreatedOn/ModifiedOn - timestamp tracking

## Email Template Types

### AssetAssignment

Used when assets are assigned to a user or team.

Available Variables:

* {{DisplayName}} - The name of the user or team receiving the assignment
* {{Host}} - The Aexum web application endpoint (if configured)

Available Item Properties (within <foreach> blocks):

* {{item.AssetName}} - Name of the assigned asset
* {{item.SerialNumber}} - Serial number of the assigned asset
* {{item.AssetId}} - Unique identifier of the asset
* {{item.EnvironmentId}} - Environment identifier
* {{item.PeriodStart}} - Assignment start date/time
* {{item.PeriodEnd}} - Assignment end date/time (optional)

Example Template:

<p>By accepting this equipment, I accept the following terms:</p>
<ol>
    <li>I acknowledge that I have received the specified equipment and accept responsibility for it.</li>
    <li>I will use the specified equipment exclusively for business purposes.</li>
</ol>
<p>Assigned equipment list:</p>
<ul>
    <foreach>
        <li><strong>{{item.AssetName}}</strong> - <a href="{{Host}}/environments/{{item.EnvironmentId}}/assets/{{item.AssetId}}/edit">{{item.SerialNumber}}</a></li>
    </foreach>
</ul>


### AssetReturn

Used when assets are returned by a user or team.

Available Variables:

* {{DisplayName}} - The name of the user or team returning the equipment
* {{Host}} - The Aexum web application endpoint (if configured)

Available Item Properties (within <foreach> blocks):

* {{item.AssetName}} - Name of the returned asset
* {{item.SerialNumber}} - Serial number of the returned asset
* {{item.AssetId}} - Unique identifier of the asset
* {{item.EnvironmentId}} - Environment identifier

Example template: 

<p>I confirm that I have returned the equipment:</p>
<p>The equipment has been returned to the Corporate IT department and will be unassigned after verification of its condition.</p>
<p>Returned equipment list:</p>
<ul>
    <foreach>
        <li><strong>{{item.AssetName}}</strong> - <a href="{{Host}}/environments/{{item.EnvironmentId}}/assets/{{item.AssetId}}/edit">{{item.SerialNumber}}</a></li>
    </foreach>
</ul>

## Writing Email Templates

### Variable Substitution

Variables are enclosed in double curly braces: {{VariableName}}. When the email is sent, these placeholders are replaced with actual values.

### HTML Formatting

Email templates support full HTML formatting:

* Use <p>, <ol>, <ul>, <li> for structure
* Use <strong>, <em> for emphasis
* Use <a href="..."> for links
* Inline CSS styling is supported

### Multi-Language Support

Create separate templates for each language by specifying the appropriate Language property (e.g., "en-US", "hr-HR"). The system will automatically select the template matching the recipient's language preference.

## Email Templates View Page

In the email templates view page, users have two tabs:

### Overview Tab

Displays a grid of all email templates in the current environment. Users can:
* View all email templates with their Type, Language, and Subject
* Filter templates by various criteria
* Click on a template to navigate to the edit page
* See which templates are marked as default

### Create Tab

Allows users to create a new email template by:

* Selecting the template Type from a dropdown
* Entering the Language code
* Writing the Subject line (with template variables)
* Composing the Body in HTML (with template variables and foreach blocks)
* Marking the template as default (optional)
* Clicking the Create button to save

## Email Templates Edit Page

In the email template edit page, users have multiple tabs:

Overview Tab

Contains the email template form with all editable fields:
* Type (read-only after creation)
* Language
* Subject
* Body (HTML editor)
* IsDefault checkbox

Actions available:
* Update - saves changes to the template
* Delete - removes the template (requires confirmation)

Comments Tab

Displays comments related to this email template, allowing team collaboration and notes about template changes.

Version History Tab

Shows all previous versions of this email template with:
* Version ID
* Created by (user display name)
* Created on (timestamp)
* Link to view version comparison

Users can click on a version to compare it with the current version or another historical version.