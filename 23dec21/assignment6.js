var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Pradnya',
        'marks': 88,
      },
      {
        'name': 'Onkar',
        'marks': 89,
      },
      {
        'name': 'Sanket',
        'marks': 77,
      },
      {
        'name': 'chiki',
        'marks': 79,
      },
      {
       'name': 'Vaishnavi',
       'marks': 67,
      },
      {
       'name': 'Lasya',
       'marks': 77,
      },
      {
       'name': 'Jay',
       'marks': 87,
      }
    ],
  };

for(var j = 0; j < g_class.students.length; j++){
    if(g_class.students[j].marks >= 85 ){
        console.log(g_class.students[j].name);
    }


} 