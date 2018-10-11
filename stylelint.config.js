module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores', 'value', 'global-import']
      }
    ],
    'unit-whitelist': ['em', 'rem', 's', '%'],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local']
      }
    ],
    'block-no-empty': false
  }
}
