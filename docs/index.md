---
slug: /
sidebar_position: 1
---

# Aexum User Manual

## Getting Started

* [https://www.aexum.com](https://www.aexum.com)
* [https://app.aexum.com](https://app.aexum.com)

### Nodefusion Account Login

For use of Aexum, requirement is to have valid and active Nodefusion Account on [https://login.nodefusion.com](https://login.nodefusion.com), or check [Nodefusion Account User Manual](https://account-manual.nodefusion.com )

### Root page

In page header, top right corner of root page there is login/logout button.
When logged in, page will display users Display Name.
Next to display name are Site Settings button that opens site settings panel, Notifications button that opens notifications panel and Feedback button which opens feedback panel.

Under page header, there is view of organizations and environments.
View of organizations and their environments which user has rights to view.
In root page, user can click on buttons to either edit or delete organization next to organization name.
User can also click on name of organization to go to organization home page.
Under organization name is grid with environments in that organization and buttons to edit or delete those environments.
Also, when user clicks on environment name, it takes them to that environment home page.
There is button to create new environmnet for organization under grid of environments that takes user to create environments page.

### Navmenus

Navmenu is changed based status if user is on environment page or on organization related page.
If user is on root page, there is only About tab in navmenu to click on.

#### Organization navmenu

In organization navmenu user can select next tabs:

* Home - when clicked, opens page where user sees details for his organization such as Create On datetime, region where organization is and country of organization
* Permissions - when clicked, opens organization permission page where user can change organization permissions for users in that organization
* Environmnets - when clicked, opens page that displays Organizations environments for that organization. User can type new environment Name in field New Environment Name, and when
user clicks create button, new environment is created with name that user wrote. Under create form, there is environments grid with envrionments that are in organizations. In grid there
is Actions column which has two buttons with edit or delete environment action. User can also click on environment name that takes user to that environment home page
* Users - when clicked, opens page where user can view all users currently in organization. User can search other users by name in search field. When user clicks on name of user in grid,
it opens user information page with details such as Display Name of user, Email and Account Status (enabled or disabled)
* About - when clicked, opens page with deatils about Application Name, WebAssembly Version and WebApi version. Also has link that takes user to Aexum User Manual page

#### Environment navmenu

In environmnet navmenu user can select next tabs:

* Home - when clicked, opens page where user sees details for his environmnet
* Vendors - when clicked, opens page where user can see grid with vendors for his environment with search field above grid in Overview tab. In Create Vendor tab, user can 
create new vendor for his environment. User can also click on name of vendor in grid which will take user to Vendor edit page
* Asset Catalogs - when clicked, opens page where user can see grid with asset catalogs for his environmnet with search field above grid in Overview tab. In Create Asset Catalog
tab, user can create new asset catalog for his environment. User can also click on name of asset catalog which will take user to asset catalog edit page, when clicked on asset group name it will
take user to asset group edit page, when clicked on manufacturer, supplier or warranty vendor name, it will take user to vendor edit page
* Assets - when clicked, opens page where user can see grid with assets in for his environment with search field above grid in Overview tab. In Create Asset tab, user can create
new asset for his environment. User can also click on name of asset to take him to asset edit page, on business unit name to take user to business unit edit page, on location name to take user to 
location edit page, on supplier or warranty vendor name to take user to vendor edit page, on parent asset name to take user to asset edit page, asset catalog name to take user to asset catalog edit page
* Admin - when user clicks on admin tab, it opens/closes view of tabs that are connected with admin part of environment
* Admin/Environment Settings - when clicked, takes user to environment settings page where user can edit settings for environment such as email provider, from email address, microsoft tenant id...
* Admin/Users - when clicked, redirects user to users page in organization
* Admin/Teams - when clicked, takes user to team page with grid of teams that are in environment with search field above grid in Overview tab. In Create Team tab, user can create new team for his environment.
User can also click on team name in grid to open team edit page.
* Admin/Permission Groups - when clicked, opens page with grid of groups in environment with search field above grid in Overview tab. In Create Permission Group user can create new permission group for environment. User
can also click on group name in grid to take user to permission group edit page
* Admin/Permission Roles - when clicked, opens page with grid of roles in environment with search field above grid in Overview tab. In Create Role tab user can create new role for environment. User can also click
on role name in grid to tkae him to permission role edit page
* Admin/Locations - when clicked, opens page with tree view of locations in environment. Create new location form is under tree view of locations when user creates new location for environment. User can also click on 
location name in tree view to open location edit page
* Admin/Asset Groups - when clicked, opens page with tree view of asset groups in environmnet. Create new asset group form is under tree view of asset groups. User can also click on name of asset group in tree view
which opens asset group edit page
* Admin/Vendor Groups - when clicked, opens page with tree view of vendor groups in environment. Create new vendor group form is under tree view of asset groups. User can also click on name of vendor group in tree view
which opens vendor group edit page
* Admin/Business Units - when clicked, opens page with tree view of business units in environment. Create new business unit form is under tree view of business units when user creates new business units for environment. User can also click on business units name in tree view to open business units edit page
* About - when clicked, opens page with deatils about Application Name, WebAssembly Version and WebApi version. Also has link that takes user to Aexum User Manual page

### Organizations home page

In organization home page user can find organization name on top of page with two buttons to edit or delete organization.
Under name, there are details about organization such as Create On datetime, region where organization is and country of organization.

### Preview version

There is Public Preview version of Aexum on different URL: [https://app-preview.aexum.com](https://app-preview.aexum.com)
