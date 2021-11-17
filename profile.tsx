import PortfolioImage from './public/Portafolio.png'
import MovieImage from './public/Movie.jpg'
import AmazonImage from './public/Amazon.jpg'
import GoogleImage from './public/Google.jpg'
import SpymovilImage from './public/Spymovil.jpg'
import TwitterImage from './public/Twitter.jpg'

export const skills = [
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'TypeScript', percentage: 80 },
    { skill: 'React', percentage: 80 },
    { skill: 'Next', percentage: 50 },
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 90 },
    { skill: 'SASS', percentage: 80 },
]

export const experiences = [
    {
        title: 'Frontend Developer at TDT Global',
        description: 'Full Time - Montevideo, Uruguay',
        from: '2020',
    },
    {
        title: 'Frontend Developer at SPYMOVIL',
        description: 'Full Time - Montevideo, Uruguay',
        from: '2019',
        to: '2020',
    },
    {
        title: 'Frontend Developer Freelancer',
        description: 'Full Time - Cuba',
        from: '2018',
        to: '2019',
    },
]

export const projects = [
    {
        name: 'Portfolio',
        description: 'React, TypeScript, Next',
        image: PortfolioImage,
        git: 'https://github.com/marcoss94/portafolio_next',
    },
    {
        name: 'Movie App',
        description: 'React, TypeScript, Next, Mongo DB',
        image: MovieImage,
        git: 'https://github.com/marcoss94/movie-next',
    },
    {
        name: 'Amazon Clone',
        description: 'React, JavaScript, Firebase',
        image: AmazonImage,
        git: 'https://github.com/marcoss94/AmazonClone',
    },
    {
        name: 'Google Cluster Marker',
        description: 'React, JavaScript, Google Maps, Redux',
        image: GoogleImage,
        git: 'https://github.com/marcoss94/GoogleMaps-ClusterMarker-React-',
    },
    {
        name: 'SpyMovil',
        description: 'React, API REST',
        image: SpymovilImage,
        git: 'https://github.com/marcoss94/spymovilapi',
    },
    {
        name: 'Twitter Clone',
        description: 'React, JavaScript, Next, Firebase',
        image: TwitterImage,
        git: 'https://github.com/marcoss94/ProyectoNextReact',
    },
]
