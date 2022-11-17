exports.seed = (knex) => {
  return knex('products').insert([
        
    {
      id: 1,
        offering: 'Yoga',
        description: "Flow, breathe, pose! ",
        teacher: 'Helena',
        image: 'Imges/Images/yoga.png',
        time: '11:00AM',
        date:'11/11/2022', 
        location: 'Enspiral Dev Academy',
    },
    {
      id: 2,
        offering: 'Dance',
        description:  "Move your body",
        teacher: 'Johnny', 
        image: 'Imges/Images/dance.png',
        time: '11:00PM',
        date: '09/09/2022',
        country: 'Enspiral Dev Academy',
    },
    {
      id: 3,
        offering: 'Voice',
        description: "Breathe from your diaphram, unearth the voice inside you",
        teacher:'Richard',
        image:'Imges/Images/theatre.png',
        time: '10:00AM',
        date:'12/12/2022',
        country: 'Enspiral Dev Academy',
    },
    {
      id: 4,
        offering: 'Meditation',
        description:
        "Get in touch with your silent self, where does your mind sit in stilness, where can we wander in the breath of life?",
        teacher:'Ahmad',
        image:'Imges/Images/meditation.png',
        time: '09:00AM',
        date:'10/12/2022',
        country: 'Enspiral Dev Academy',
    },
    {
      id: 5,
        offering: 'Cooking',
        description:
        "Nourish your body, nourish your mind",
        teacher:'Clementine',
        image:'Imges/Images/cooking.png',
        time: '05:00PM',
        date:'09/12/2022',
        country: 'Enspiral Dev Academy',
    },
    {
      id: 6,
        offering: 'Journalling',
        description:
        "Observe not absorb, go on write about it",
        teacher:'Ana',
        image:'Imges/Images/journaling.png',
        time: '09:30AM',
        date:'28/11/2022',
        country: 'Enspiral Dev Academy',
    },
  ])
}
