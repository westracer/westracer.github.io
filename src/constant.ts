import {
    faStackOverflow,
    faGithub,
    faMedium,
    faLinkedin,
    faFacebook,
    faVk,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

const data = {
    name: 'Igor Kharakhordin',
    title: 'Software Engineer',
    location: 'Barnaul, Russia',
    links: [
        {
            icon: faStackOverflow,
            link: 'https://google.com',
        },
        {
            icon: faGithub,
            link: 'https://google.com',
        },
        {
            icon: faMedium,
            link: 'https://google.com',
        },
        {
            icon: faLinkedin,
            link: 'https://google.com',
        },
    ],
    resume: [
        {
            text: 'Resume in English',
            link: 'https://google.com',
        },
        {
            text: 'Резюме на русском',
            link: 'https://google.com',
        },
    ],
    socials: [
        {
            icon: faEnvelope,
            link: 'https://google.com',
        },
        {
            icon: faFacebook,
            link: 'https://google.com',
        },
        {
            icon: faVk,
            link: 'https://google.com',
        },
        {
            icon: faTwitter,
            link: 'https://google.com',
        },
    ],
}

export default data