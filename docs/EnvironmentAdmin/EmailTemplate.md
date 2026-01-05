# Email Templates

## Overview

Email Templates enable automated communication within the system by defining standardized message formats for specific events and notifications. Each template is associated with a defined Email Template Type that determines when the template is utilized. Templates support multi-language configurations, variable substitution, and HTML formatting to deliver personalized and professional communications to users.

## Field Reference

The following fields are available when configuring an Email Template:

| Field | Required | Description | Example |
| -- | -- | -- | -- |
| **Type** | Yes | Defines the event or purpose triggering this template | Asset Assignment, Asset Return |
| **Subject** | Yes | Email subject line with support for variable substitution | Asset Assigned: {{AssetName}} |
