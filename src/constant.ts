import {
    faStackOverflow,
    faGithub,
    faMedium,
    faFacebook,
    faVk,
    faSkype,
    faLinkedin,
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
    ],
    resume: [
        {
            text: 'Resume in English',
            link: process.env.PUBLIC_URL + '/resume_en.pdf',
        },
        {
            text: 'Резюме на русском',
            link: process.env.PUBLIC_URL + '/resume_ru.pdf',
        },
    ],
    socials: [
        {
            icon: faEnvelope,
            link: 'mailto:westracer1@gmail.com',
        },
        {
            icon: faSkype,
            link: 'https://join.skype.com/invite/fEAsgRbzMU3E',
        },
        {
            icon: faFacebook,
            link: 'https://www.facebook.com/westracer/',
        },
        {
            icon: faVk,
            link: 'https://vk.com/westracer',
        },
        {
            icon: faLinkedin,
            link: 'https://linkedin.com/in/igor-kharakhordin',
        },
        // {
        //     icon: faTwitter,
        //     link: 'https://google.com',
        // },
    ],
}

export default data