import { GiTeamIdea,
         GiIfrit,
         GiHouse,
         GiLaptop,
         GiTripleYin,
         GiAlliedStar,
         GiDiamondTrophy
         } from "react-icons/gi";

export const sidebarData = [
  {
    path: '/heroes',
    icon: <GiIfrit />,
    title: 'Heroes'
  },
  {
    path: '/matches',
    icon: <GiLaptop />,
    title: 'Matches'
  },
  {
    path: '/teams',
    icon: <GiTeamIdea />,
    title: 'Teams'
  },
  {
    path: '/combos',
    icon: <GiTripleYin />,
    title: 'Combos'
  },
  {
    path: '/ranks',
    icon: <GiDiamondTrophy />,
    title: 'Ranks'
  },
  {
    path: '/records',
    icon: <GiAlliedStar />,
    title: 'Records'
  },
  {
    path: '/login',
    icon: <GiHouse />,
    title: 'Login'
  },
]