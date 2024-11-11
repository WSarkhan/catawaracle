module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'What type of component?',
    choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your component?',
  },
];
