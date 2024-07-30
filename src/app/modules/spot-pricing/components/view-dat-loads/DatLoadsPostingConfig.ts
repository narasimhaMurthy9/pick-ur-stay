export const loadsPostingConfig = {
  columns: [
    {
      field: 'origin',
      header: 'Origin',
      sort: true,
      width:'8rem'
    },
    {
      field: 'originDeadhead',
      header: 'DH-O',
      sort: true,
      width:'6rem'
    },
    {
      field: 'destination',
      header: 'Destination',
      sort: true,
      width:'9rem'
    },
    {
      field: 'destinationDeadhead',
      header: 'DH-D',
      sort: true,
      width:'6rem'
    },
    {
      field: 'equipmentType',
      header: 'Trailer',
      sort: false,
      width:'6rem'
    },
    {
      field: 'availability',
      header: 'Pickup',
      sort: true,
      width:'6rem'
    },
    {
      field: 'tripLength',
      header: 'Trip (miles)',
      sort: true,
      width:'8rem'
    },
    {
      field: 'companyName',
      header: 'Company',
      sort: true,
      width:'10rem'
    },
    {
      field: 'age',
      header: 'Age',
      sort: true,
      width:'5rem'
    },
    {
      field: 'rate',
      header: 'Rate(rpm)',
      sort: true,
      width:'9rem'
    },
  ],
};
