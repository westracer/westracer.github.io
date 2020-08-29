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
            link: 'https://docs.google.com/document/d/1FhIInlWVRMgO7vqt9heg-Bh5lFF7wq3F7dhfo0oaG6g/',
        },
        {
            text: 'Резюме на русском',
            link: 'https://docs.google.com/document/d/1tBXEsAiqdhvRKBomm_4zICsDGUoFC1NzRpmrwsNncJo/',
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