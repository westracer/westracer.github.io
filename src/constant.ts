import {
    faStackOverflow,
    faGithub,
    faMedium,
    faFacebook,
    faVk,
} from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

const data = {
    name: 'Igor Kharakhordin',
    title: 'Software Engineer',
    location: 'Barnaul, Russia',
    links: [
        {
            icon: faStackOverflow,
            link: 'https://stackoverflow.com/users/3908065/igor-kharakhordin',
        },
        {
            icon: faGithub,
            link: 'https://github.com/westracer',
        },
        {
            icon: faMedium,
            link: 'https://medium.com/@westracer1',
        },
        // {
        //     icon: faLinkedin,
        //     link: 'https://google.com',
        // },
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
            link: 'mailto:westracer1@gmail.com',
        },
        {
            icon: faFacebook,
            link: 'https://www.facebook.com/westracer/',
        },
        {
            icon: faVk,
            link: 'https://vk.com/westracer',
        },
        // {
        //     icon: faTwitter,
        //     link: 'https://google.com',
        // },
    ],
}

export default data