# Permissions

This article lists the permissions for Aexum Web Api resource providers, which are used in built-in roles. You can use these permissions in your own Aexum  custom permission roles to provide granular access control to resources in Aexum. Aexum is using a role-based access control (RBAC) model to manage permissions. The permissions are always evolving.

Two main scopes exists in Aexum: Environment and Organization.

| Scope | Resource | Action | Permission | Description
| -- | -- | -- | -- | --
| Environment | Asset Catalog | Create | AssetCatalogsCreate | Ability to create new asset catalog entries
| Environment | Asset Catalog | Read | AssetCatalogsRead | Ability to view asset catalog information
| Environment | Asset Catalog | Update | AssetCatalogsUpdate | Ability to modify existing asset catalogs
| Environment | Asset Catalog | Delete | AssetCatalogsDelete | Ability to remove asset catalogs from the system
| Environment | Vendor | Create | VendorsCreate | Ability to create new vendor entries
| Environment | Vendor | Read | VendorsRead | Ability to view vendor information
| Environment | Vendor | Update | VendorsUpdate | Ability to modify existing vendors
| Environment | Vendor | Delete | VendorsDelete | Ability to remove vendors from the system
| Environment | Vendor Group | Create | VendorGroupsCreate | Ability to create new vendor groups
| Environment | Vendor Group | Read | VendorGroupsRead | Ability to view vendor group information
| Environment | Vendor Group | Update | VendorGroupsUpdate | Ability to modify existing vendor groups
| Environment | Vendor Group | Delete | VendorGroupsDelete | Ability to remove vendor groups from the system
