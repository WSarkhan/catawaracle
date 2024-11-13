module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'What type of component?',
    choices: ['Atom', 'Foundation', 'Molecule', 'Organism', 'Template', 'Page'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your component?',
  },
];
