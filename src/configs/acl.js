import { AbilityBuilder, Ability } from '@casl/ability'

export const AppAbility = Ability

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (role, subject, permissionData) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  {
    permissionData?.map(permission => {
      // ** checking permission role id with role[role id]
      // ** SYNTAX : can(['read','add','view','update','delete'],'MODULE_ALIAS_NAME')

      can(['read', 'add', 'view', 'update', 'delete'], 'inventory-machine')
      can(['read', 'add', 'view', 'update', 'delete'], 'inventory-parts')
      can(['read', 'add', 'view', 'update', 'delete'], 'orders-current')
      can(['read', 'add', 'view', 'update', 'delete'], 'orders-complete')
      can(['read', 'add', 'view', 'update', 'delete'], 'customers')
      can(['read', 'add', 'view', 'update', 'delete'], 'vendors')
      can(['read', 'add', 'view', 'update', 'delete'], 'repairing')
      can(['read', 'add', 'view', 'update', 'delete'], 'basic')
      can(['read', 'add', 'view', 'update', 'delete'], 'parts')
      can(['read', 'add', 'view', 'update', 'delete'], 'machines')
      can(['read', 'add', 'view', 'update', 'delete'], 'users')
      if (permission.role_u_id === role) {
        // ** checking permission
        if (permission.view === true) {
          can('read', permission.module.alias_name)
          can('view', permission.module.alias_name)
        }
        if (permission.add === true) {
          can('add', permission.module.alias_name)
        }
        if (permission.delete === true) {
          can('delete', permission.module.alias_name)
        }
        if (permission.update === true) {
          can('update', permission.module.alias_name)
        }
        if (permission.status === true) {
          can('status', permission.module.alias_name)
        }
      }
    })
  }

  return rules
}

export const buildAbilityFor = (role, subject, permissionData) => {
  return new AppAbility(defineRulesFor(role, subject, permissionData), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object.type
  })
}

export const defaultACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
