const Pattern = {
  username: new RegExp('^[a-zA-Z0-9]*$'),
  email: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?!.* ).{8,}'),
  onlyNumber: new RegExp('^(0|[1-9][0-9]*)$'),
};

const industryOptions = [
  { label: 'Information Technology', value: 'informationTechnology' },
  { label: 'Financial Services', value: 'financialServices' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Industrials', value: 'industrials' },
  { label: 'Professional Services', value: 'professionalServices' },
];

const careerStageOptions = [
  { label: 'Entry Level', value: 'New' },
  { label: 'Junior Level', value: 'Junior' },
  { label: 'Middle Level', value: 'Middle' },
  { label: 'Senior Level', value: 'Senior' },
];

const organizationStageOptions = [
  { label: '< 100 employees', value: 'small' },
  { label: '100-1000 employees', value: 'medium' },
  { label: '1000 - 10000 employees', value: 'large' },
  { label: '> 10000 employees', value: 'huge' },
];

const domainOptions = {
  informationTechnology: [
    { label: 'Software Development', value: 'Software Development' },
    { label: 'Cloud Service', value: 'Cloud Service' },
    { label: 'E-Commerce', value: 'E-Commerce' },
    { label: 'Online Streaming', value: 'Online Streaming' },
    {
      label: 'Telecommunication Equipment',
      value: 'Telecommunication Equipment',
    },
    { label: 'Networking Equipment', value: 'Networking Equipment' },
    { label: 'Mobile Phones', value: 'Mobile Phones' },
    { label: 'Personal Computers', value: 'Personal Computers' },
    { label: 'Electronic Equipment', value: 'Electronic Equipment' },
    { label: 'Semiconductors', value: 'Semiconductors' },
  ],
  financialServices: [
    { label: 'Retail Banking', value: 'Retail Banking' },
    { label: 'Commercial Banking', value: 'Commercial Banking' },
    { label: 'Investment Banking', value: 'Investment Banking' },
    { label: 'Asset Management', value: 'Asset Management' },
    { label: 'Fund Management', value: 'Fund Management' },
    { label: 'Venture Capital', value: 'Venture Capital' },
    { label: 'Fintech', value: 'Fintech' },
  ],
  healthcare: [
    { label: 'Healthcare Equipment', value: 'Healthcare Equipment' },
    { label: 'Healthcare Technology', value: 'Healthcare Technology' },
    { label: 'Biotechnology', value: 'Biotechnology' },
    { label: 'Pharmaceuticals', value: 'Pharmaceuticals' },
    {
      label: 'Life Sciences Tools & Services',
      value: 'Life Sciences Tools & Services',
    },
  ],
  industrials: [
    { label: 'Passenger Cars', value: 'Passenger Cars' },
    { label: 'Automotive Engines', value: 'Automotive Engines' },
    { label: 'Automotive Spare Parts', value: 'Automotive Spare Parts' },
    { label: 'Industrial Machinery', value: 'Industrial Machinery' },
    { label: 'Construction Machinery', value: 'Construction Machinery' },
    {
      label: 'Electrical Components & Equipment',
      value: 'Electrical Components & Equipment',
    },
    {
      label: 'Construction & Engineering',
      value: 'Construction & Engineering',
    },
  ],
  professionalServices: [
    {
      label: 'Human Resource & Employment Services',
      value: 'Human Resource & Employment Services',
    },
    { label: 'Legal Services', value: 'Legal Services' },
    { label: 'Tax & Accounting Services', value: 'Tax & Accounting Services' },
    { label: 'Business Consulting', value: 'Business Consulting' },
  ],
};

const functionOptions = [
  {
    label: 'General Business Management',
    value: 'General Business Management',
  },
  { label: 'Finance ', value: 'Finance' },
  { label: 'Accounting', value: 'Accounting' },
  { label: 'Audit', value: 'Audit' },
  { label: 'Tax ', value: 'Tax ' },
  { label: 'HR', value: 'HR' },
  { label: 'Legal', value: 'Legal' },
  { label: 'Compliance', value: 'Compliance' },
  { label: 'IT', value: 'IT' },
  { label: 'Communications', value: 'Communications' },
  { label: 'Research', value: 'Research' },
  { label: 'Analysis', value: 'Analysis' },
  { label: 'Product Management', value: 'Product Management' },
  { label: 'Project Management', value: 'Project Management' },
  { label: 'Development & Engineering', value: 'Development & Engineering' },
  { label: 'Procurement', value: 'Procurement' },
  { label: 'Logistics', value: 'Logistics' },
  { label: 'Production & Manufacturing', value: 'Production & Manufacturing' },
  {
    label: 'Quality Assurance & Control ',
    value: 'Quality Assurance & Control ',
  },
  { label: 'Business Operations', value: 'Business Operations' },
  {
    label: 'Sales & Client Relationship',
    value: 'Sales & Client Relationship',
  },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Banking', value: 'Banking' },
  { label: 'Loan Processing', value: 'Loan Processing' },
  { label: 'Credit Analysis', value: 'Credit Analysis' },
  { label: 'Financial Advisory', value: 'Financial Advisory' },
  { label: 'Investment Banking', value: 'Investment Banking' },
  { label: 'Underwriting', value: 'Underwriting' },
  { label: 'Asset Management', value: 'Asset Management' },
  { label: 'Fund Management', value: 'Fund Management' },
  { label: 'Consultant', value: 'Consultant' },
  { label: 'Tax Advisory', value: 'Tax Advisory' },
  { label: 'Lawyer', value: 'Lawyer' },
  { label: 'HR Consulting', value: 'HR Consulting' },
];

const countryOptions = [
  { label: 'United States', value: 'United States' },
  { label: 'China', value: 'China' },
];

export {
  Pattern,
  industryOptions,
  domainOptions,
  organizationStageOptions,
  careerStageOptions,
  functionOptions,
  countryOptions,
};
