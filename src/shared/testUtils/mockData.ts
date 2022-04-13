export const mockData = {
  fakeFavResponse: {
    __v: 0,
    _id: expect.any(String),
    created_at: expect.any(String),
    updated_at: expect.any(String),
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        _id: expect.any(String),
        title: "Bypass 2",
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        _id: expect.any(String),
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeWrongUserId: "644fb6ce49b2801f01e04695",
  fakeUserData: {
    _id: "624fbbdfea80babf8a455932",
    email: "correo2@gmail.com",
    password: "U2FsdGVkX1+3tt+qM+sbIyfzLRNTUXArR3W4lZNSHpo=",
    created_at: '2022-04-08T04:15:10.134+00:00',
    updated_at: '2022-04-08T04:15:10.134+00:00',
  },
  fakeFavList: [
    {
      _id: '62508783efb8cf673e0100ec',
      user_id: '624fbbdfea80babf8a455932',
      name: "Canciones Favoritas",
      fav_items: [
        {
          title: "Bypass",
          description: "Bachata",
          link: "https://google.com/?bypass"
        },
        {
          title: "Aguanile",
          description: "Salsa",
          link: "https://google.com/?aguanile"
        }
      ]
    },
    {
      _id: '62508783efb8cf674e0100ec',
      user_id: '624fbbdfea80babf8a455932',
      name: "Canciones Favoritas 2",
      fav_items: [
        {
          title: "Bypass 2",
          description: "Bachata",
          link: "https://google.com/?bypass"
        },
        {
          title: "Aguanile 2",
          description: "Salsa",
          link: "https://google.com/?aguanile"
        }
      ]
    }
  ],
  fakeFavToCreate: {
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        title: "Bypass 2",
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeFav: {
    _id: '62508783efb8cf674e0100ec',
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        title: "Bypass 2",
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeWrongFavName: {
    user_id: '624fbbdfea80babf8a455932',
    fav_items: [
      {
        title: "Bypass 2",
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeWrongFavUserId: {
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        title: "Bypass 2",
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeWrongFavItemTitle: {
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeWrongFavItemDescription: {
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        title: "Bypass 2",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeWrongFavItemLink: {
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas 2",
    fav_items: [
      {
        title: "Bypass 2",
        description: "Bachata"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  },
  fakeUserId: '624fbbdfea80babf8a455932',
  fakeFavId: '62508783efb8cf674e0100ec',
};