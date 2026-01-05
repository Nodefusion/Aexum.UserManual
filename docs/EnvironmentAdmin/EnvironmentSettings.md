# Environment Settings

Manage environment settings with update action.

## Environment Settings Update

## Field Reference

The following fields are available when configuring a Team:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Microsoft Tenant ID** | No | Microsoft cloud tenant guid | f0c19f51-0827-45fd-a1de-83b54d414614 |
| **From Email Address** | Yes | Email address used for sending notifications | DoNotReply@email.aexum.com |
| **Email Provider** | Yes | Email service provider used for sending notifications | Aexum Provided |

## Email Provider

When Aexum system needs to send email notifications (example Asset is assigned to a user, by using email template), it can use different email providers based on the configuration set in Environment Settings.

**Aexum Provided** - Utilize Aexum's built-in email service for sending notifications without additional configuration.
**Microsoft Graph** - Utilize Microsoft Graph API for sending notifications, requiring configuration of Microsoft Tenant ID and appropriate permissions.
**SMTP** - Utilize SMTP protocol for sending notifications, requiring configuration of SMTP server details(server, port, username, password, ssl)

## Best Practices

* Use a dedicated email address for the From Email Address to manage replies and bounces effectively.
* Bigger organizations use better control over email delivery by using custom email from address via SMTP or by using Microsoft Graph requiring use of own Microsoft Graph or SMTP server. Smaller and simpler setups can use Aexum Integrated email provider and Aexum from address.

## Related Documentation

* [Environments](../OrganizationAdmin/Environments.md) - Managing Environments within an Organization
