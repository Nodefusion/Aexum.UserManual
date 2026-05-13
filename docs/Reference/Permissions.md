# Permissions

This article lists the permissions for Aexum Web Api resource providers, which are used in built-in roles. You can use these permissions in your own Aexum custom permission roles to provide granular access control to resources in Aexum. Aexum is using a role-based access control (RBAC) model to manage permissions. The permissions are always evolving.

Two main scopes exist in Aexum: Environment and Organization.

## Permission Mapping

| Scope | Resource | Action | Permission | Description
| -- | -- | -- | -- | --
| Organization | Organization | Update | OrganizationUpdate | Ability to modify organization information |
| Organization | Organization | Delete | OrganizationDelete | Ability to delete the organization |
| Organization | Audit Logs | Read | OrganizationAuditLogsRead | Ability to view organization audit logs |
| Organization | Recycle Bin | Manage | OrganizationRecycleBinManage | Ability to view and restore deleted organization-scoped records |
| Organization | Environment | Create | EnvironmentCreate | Ability to create new environments |
| Organization | Environment | Update | EnvironmentUpdate | Ability to modify existing environments |
| Organization | Environment | Delete | EnvironmentDelete | Ability to remove environments from the organization |
| Organization | Organization User | Update | OrganizationUserUpdate | Ability to edit users on organization level |
| Organization | Permission Role Assignments | Update | OrganizationPermissionRoleAssignmentUpdate | Ability to modify organization permission role assignments |
| Organization | Customers Administration | Access | CustomersAdministration | Ability to access Customers Administration and assign or unassign members to customer permission groups |
| Environment | General Access | Use | BasicUser | Basic access to environment features |
| Environment | Environment | Read | EnvironmentRead | Ability to view environment information |
| Environment | Environment Settings | Read | EnvironmentSettingsRead | Ability to view environment settings |
| Environment | Environment Settings | Update | EnvironmentSettingsUpdate | Ability to modify environment settings |
| Environment | Business Unit | Create | BusinessUnitsCreate | Ability to create new business units |
| Environment | Business Unit | Read | BusinessUnitsRead | Ability to view business unit information |
| Environment | Business Unit | Update | BusinessUnitsUpdate | Ability to modify existing business units |
| Environment | Business Unit | Delete | BusinessUnitsDelete | Ability to remove business units from the system |
| Environment | Location | Create | LocationsCreate | Ability to create new locations |
| Environment | Location | Read | LocationsRead | Ability to view location information |
| Environment | Location | Update | LocationsUpdate | Ability to modify existing locations |
| Environment | Location | Delete | LocationsDelete | Ability to remove locations from the system |
| Environment | Permission Group | Create | PermissionGroupsCreate | Ability to create new permission groups |
| Environment | Permission Group | Read | PermissionGroupsRead | Ability to view permission group information |
| Environment | Permission Group | Update | PermissionGroupsUpdate | Ability to modify existing permission groups |
| Environment | Permission Group | Delete | PermissionGroupsDelete | Ability to remove permission groups from the system |
| Environment | Permission Role | Create | PermissionRolesCreate | Ability to create new permission roles |
| Environment | Permission Role | Read | PermissionRolesRead | Ability to view permission role information |
| Environment | Permission Role | Update | PermissionRolesUpdate | Ability to modify existing permission roles |
| Environment | Permission Role | Delete | PermissionRolesDelete | Ability to remove permission roles from the system |
| Environment | User | Read | UsersRead | Ability to view user information |
| Environment | User | Update | UsersUpdate | Ability to modify existing users |
| Environment | User | Delete | UsersDelete | Ability to remove users from the environment |
| Environment | Team | Create | TeamsCreate | Ability to create new teams |
| Environment | Team | Read | TeamsRead | Ability to view team information |
| Environment | Team | Update | TeamsUpdate | Ability to modify existing teams |
| Environment | Team | Delete | TeamsDelete | Ability to remove teams from the system |
| Environment | Asset Catalog | Create | AssetCatalogsCreate | Ability to create new asset catalog entries
| Environment | Asset Catalog | Read | AssetCatalogsRead | Ability to view asset catalog information
| Environment | Asset Catalog | Update | AssetCatalogsUpdate | Ability to modify existing asset catalogs
| Environment | Asset Catalog | Delete | AssetCatalogsDelete | Ability to remove asset catalogs from the system
| Environment | Asset | Create | AssetsCreate | Ability to create new asset entries |
| Environment | Asset | Read | AssetsRead | Ability to view asset information |
| Environment | Asset | Update | AssetsUpdate | Ability to modify existing assets |
| Environment | Asset | Delete | AssetsDelete | Ability to remove assets from the system |
| Environment | Asset Connection | Create | AssetConnectionsCreate | Ability to create new asset connections |
| Environment | Asset Connection | Read | AssetConnectionsRead | Ability to view asset connection information |
| Environment | Asset Connection | Update | AssetConnectionsUpdate | Ability to modify existing asset connections |
| Environment | Asset Connection | Delete | AssetConnectionsDelete | Ability to remove asset connections from the system |
| Environment | Asset Assignment | Create | AssetAssignmentsCreate | Ability to create new asset assignments |
| Environment | Asset Assignment | Read | AssetAssignmentsRead | Ability to view asset assignment information |
| Environment | Asset Assignment | Update | AssetAssignmentsUpdate | Ability to modify existing asset assignments |
| Environment | Asset Assignment | Delete | AssetAssignmentsDelete | Ability to remove asset assignments from the system |
| Environment | Asset Group | Create | AssetGroupsCreate | Ability to create new asset groups |
| Environment | Asset Group | Read | AssetGroupsRead | Ability to view asset group information |
| Environment | Asset Group | Update | AssetGroupsUpdate | Ability to modify existing asset groups |
| Environment | Asset Group | Delete | AssetGroupsDelete | Ability to remove asset groups from the system |
| Environment | Asset Reference | Create | AssetReferencesCreate | Ability to create new asset references |
| Environment | Asset Reference | Read | AssetReferencesRead | Ability to view asset reference information |
| Environment | Asset Reference | Update | AssetReferencesUpdate | Ability to modify existing asset references |
| Environment | Asset Reference | Delete | AssetReferencesDelete | Ability to remove asset references from the system |
| Environment | Asset Catalog Reference | Create | AssetCatalogReferencesCreate | Ability to create new asset catalog references |
| Environment | Asset Catalog Reference | Read | AssetCatalogReferencesRead | Ability to view asset catalog reference information |
| Environment | Asset Catalog Reference | Update | AssetCatalogReferencesUpdate | Ability to modify existing asset catalog references |
| Environment | Asset Catalog Reference | Delete | AssetCatalogReferencesDelete | Ability to remove asset catalog references from the system |
| Environment | Vendor | Create | VendorCreate | Ability to create new vendor entries
| Environment | Vendor | Read | VendorRead | Ability to view vendor information
| Environment | Vendor | Update | VendorUpdate | Ability to modify existing vendors
| Environment | Vendor | Delete | VendorDelete | Ability to remove vendors from the system
| Environment | Vendor Group | Create | VendorGroupsCreate | Ability to create new vendor groups
| Environment | Vendor Group | Read | VendorGroupsRead | Ability to view vendor group information
| Environment | Vendor Group | Update | VendorGroupsUpdate | Ability to modify existing vendor groups
| Environment | Vendor Group | Delete | VendorGroupsDelete | Ability to remove vendor groups from the system
| Environment | Comment | Create | CommentsCreate | Ability to create new comments |
| Environment | Comment | Read | CommentsRead | Ability to view comments |
| Environment | Comment | Update | CommentsUpdate | Ability to modify existing comments |
| Environment | Comment | Delete | CommentsDelete | Ability to remove comments from the system |
| Environment | Audit Logs | Read | EnvironmentAuditLogsRead | Ability to view environment audit logs |
| Environment | Recycle Bin | Manage | EnvironmentRecycleBinManage | Ability to view and restore deleted environment-scoped records |