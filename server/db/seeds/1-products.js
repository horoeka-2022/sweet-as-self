exports.seed = (knex) => {
  return knex('products').insert([
        
    {
      id: 1,
        offering: 'Yoga',
        description: "Flow into nourishing postures. Breathe new life into your body. Get ready, now pose! Learn how to use breathe and alignment to ground yourself. This is an open class which is suited to all levels. ",
        teacher: 'Helena',
        image: 'Imges/Images/yoga.png',
        time: '11:00AM',
        date:'11/12/2022', 
        location: 'Enspiral Dev Academy',
    },
    {
      id: 2,
        offering: 'Dance',
        description:  "Dont take off your dancing shoes, theres more than one thing on your mind. The most pertinenet being this jiving workshop! I wana see all you componenets and slices on the d floor. We will laugh, sweat and (happy) cry. Lets feel the rhythm! Move your body!",
        teacher: 'Johnny', 
        image: 'Imges/Images/dance.png',
        time: '11:00PM',
        date: '30/11/2022',
        location: 'Enspiral Dev Academy',
    },
    {
      id: 3,
        offering: 'Voice',
        description: "Join Rich for an expiremtal workshop in intuitive voice. Breathe from your diaphram and unearth the voice inside you. Content warning: may contain riddles",
        teacher:'Rich',
        image:'Imges/Images/theatre.png',
        time: '10:00AM',
        date:'12/12/2022',
        location: 'Enspiral Dev Academy',
    },
    {
      id: 4,
        offering: 'Meditation',
        description:
        "Get in touch with your silent self, how does your soul sit in stillness, where can we wander in the breath of life? In this safe space, let us practise body scan, box breathing with the aid of our handy dandy clock.",
        teacher:'Ahmad',
        image:'Imges/Images/meditation.png',
        time: '09:00AM',
        date:'10/12/2022',
        location: 'Enspiral Dev Academy',
    },
    {
      id: 5,
        offering: 'Cooking',
        description:
        "Nourish your body, nourish your mind. Get out those pots and pans, we are firing up the elements. Cool, calm and collected Clem will teach you the ways of the kitchen in this immersive culinary experience.",
        teacher:'Clementine',
        image:'Imges/Images/cooking.png',
        time: '05:00PM',
        date:'09/12/2022',
        location: 'Enspiral Dev Academy',
    },
    {
      id: 6,
        offering: 'Journaling',
        description:
        "Observe not absorb, go on write about it. Articulate your thoughts and feelings. Let's reflect together on where we are, regardless of age, stage or phase. All welcome.",
        teacher:'Ana',
        image:'Imges/Images/journaling.png',
        time: '09:30AM',
        date:'28/11/2022',
        location: 'Enspiral Dev Academy',
    },
    {
      id: 7,
        offering: 'Watercolour',
        description:
        "Unleash your creative magic in an hour long watercolour extravaganza. Engage in the art of tone and composition. Enhance your skills in painting with watercolour. Each student will come away with their own small scale artwork.",
        teacher:'Alex',
        image:'Imges/Images/watercolor.png',
        time: '01:00PM',
        date:'29/11/2022',
        location: 'Enspiral Dev Academy',
    },
  ])
}
