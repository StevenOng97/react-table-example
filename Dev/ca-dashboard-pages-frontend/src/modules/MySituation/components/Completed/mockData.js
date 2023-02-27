import avatar from '../../../../assets/images/Navbar/5.png';

const initialValue = [
  {
    users: [{ avatar }, { avatar }],
    rating: 5,
    results: 'Helpful',

    situationAndSolution:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea sapiente suscipit fugit, esse cum quo. Odio quasi soluta possimus magni magnam! Cupiditate necessitatibus id aliquid autem consectetur natus minus?',
    formalDate: new Date(),
  },
  {
    users: [{ avatar }],
    rating: 4.5,
    results: 'Partially Helpful',

    situationAndSolution:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea sapiente suscipit fugit, esse cum quo. Odio quasi soluta possimus magni magnam! Cupiditate necessitatibus id aliquid autem consectetur natus minus?',
    formalDate: new Date(),
  },
  {
    users: [{ avatar }],
    rating: 3.5,
    results: 'Unhelpful',
    situationAndSolution:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea sapiente suscipit fugit, esse cum quo. Odio quasi soluta possimus magni magnam! Cupiditate necessitatibus id aliquid autem consectetur natus minus?',
    formalDate: new Date(),
  },
];

export default initialValue;
