# Email Template Types and Properties

This document provides detailed information about the different email template types available in Aexum and the variables that can be used within each template type.

## Email Template Types

Each email template type corresponds to a specific event or notification trigger within the Aexum system. The available variables depend on the template type.

### Example Template

**Type**: AssetAssignment

**Purpose**: Sent when assets are assigned to a user or team

**Available Variables**:

* `{{DisplayName}}` - The name of the user or team receiving the assignment
* `{{Host}}` - The Aexum web application endpoint (if configured)

**Available Item Properties** (within `<foreach>` blocks):

* `{{item.AssetName}}` - Name of the assigned asset
* `{{item.SerialNumber}}` - Serial number of the assigned asset
* `{{item.AssetId}}` - Unique identifier of the asset
* `{{item.EnvironmentId}}` - Environment identifier
* `{{item.PeriodStart}}` - Assignment start date/time
* `{{item.PeriodEnd}}` - Assignment end date/time

**Example Template**:

```html
<p>Dear {{DisplayName}},</p>
<p>The following equipment has been assigned to you:</p>
<ul>
<foreach>
    <li>
        <strong>{{item.AssetName}}</strong> - 
        <a href="{{Host}}/environments/{{item.EnvironmentId}}/assets/{{item.AssetId}}/edit">
            {{item.SerialNumber}}
        </a>
        <br/>Assignment Period: {{item.PeriodStart}} to {{item.PeriodEnd}}
    </li>
</foreach>
</ul>
<p>Please confirm receipt of this equipment.</p>
```

## Using Template Variables

### Simple Variables

Simple variables are replaced with a single value:

```html
<p>Hello {{DisplayName}},</p>
```

### Foreach Loops

The `<foreach>` block iterates over a collection of items. Each property within the loop must be prefixed with `item.`:

```html
<ul>
<foreach>
    <li>{{item.AssetName}} - {{item.SerialNumber}}</li>
</foreach>
</ul>
```

### URL Construction

Combine the `{{Host}}` variable with item properties to create clickable links:

```html
<a href="{{Host}}/environments/{{item.EnvironmentId}}/assets/{{item.AssetId}}/edit">
    View Asset
</a>
```

## Notes

* All variables are case-sensitive
* Missing or undefined variables will be replaced with empty strings
* HTML tags within the Body property should be properly closed
* The `<foreach>` tag is a special construct for iteration and is not a standard HTML tag