import IconGit from "../../assets/icons/IconGit";
import IconVk from "../../assets/icons/IconVk";
import IconTg from "../../assets/icons/IconTg";

export const footerDataMap = new Map([
  [
    'iconLinks', 
    [
      {
      'href': 'https://github.com/Ivsmcrew',
      'icon': <IconGit />
      },
      {
      'href': 'https://t.me/IVS_M',
      'icon': <IconVk />
      },
      {
      'href': 'https://vk.com/son_of_korzh',
      'icon': <IconTg />
      },
    ]
  ],

  [
    'supportLinks', 
    [
      {
        'to': '/',
        'title': 'Help'
      },
      {
        'to': '/',
        'title': 'Advisories'
      },
      {
        'to': '/',
        'title': 'Contacts'
      },
      {
        'to': '/',
        'title': 'Status'
      },
    ]
  ],

  [
    'companyLinks', 
    [
      {
        'to': '/',
        'title': 'About'
      },
      {
        'to': '/',
        'title': 'Blog'
      },
    ]
  ],

  [
    'termsLinks', 
    [
      {
        'to': '/',
        'title': 'Policies'
      },
      {
        'to': '/',
        'title': 'Terms of use'
      },
      {
        'to': '/',
        'title': 'Privacy'
      },
    ]
  ]
])