 
 // Nav Link structure just support for only 1 subLinks loop, in case  there are multiple sub of sub sub of supper sayzannnnn, update UI rendering
 // Constant should only uppercase 
 const NAVLINKS = [
    {
        name: 'Blog',
        url: '/blog',
    },
    {
        name: 'Socicals',
        url: '/create-social',
    },
    {
        name: 'Past Socicals',
        url: '/past-socicals',
    },
    {
        name: 'Clubs',
        url: '/clubs',
        subLinks: [
            {
                name: 'Clubs Manchester',
                url: '/clubs/:manchseter', 
            }
        ]
    },
    {
        name: 'Contact',
        url: '/contact',
    }
]

export default NAVLINKS