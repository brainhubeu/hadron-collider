module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
    validate: input => {
      if (/^([A-Za-z\-_\d])+$/.test(input)) {
        return true;
      } else {
        return 'Project name can only include letters, nubmers, underscores and hyphens.';
      }
    },
  },
  {
    type: 'confirm',
    name: 'typescript',
    message: 'Do you want TypeScript support?',
    default: false,
  },
  {
    type: 'checkbox',
    name: 'packages',
    message: 'Select features:',
    choices: [
      { name: 'hadron-express', checked: true },
      { name: 'hadron-typeorm' },
      { name: 'hadron-validation' },
    ],
  },
];

