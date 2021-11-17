import { Layout } from '../components/Layout'
import { skills, experiences, projects } from '../profile'

const Index = () => {
    return (
        <Layout>
            {/* header card */}
            <header className='row'>
                <div className='col-md-12'>
                    <div className='card card-body bg-secondary text-light'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img
                                    src='profile.jpg'
                                    className='img-fluid w-100'
                                    alt=''
                                />
                            </div>
                            <div className='col-md-8'>
                                <h1>Marcos Alvarez</h1>
                                <h3>Frontend Developer</h3>

                                <h5 style={{ lineHeight: '2' }}>
                                    I am an Engineer and Web Developer
                                    passionate about the font-end. I define
                                    myself as a communicative person,
                                    enterprising, positive and I like the
                                    teamwork. I am always researching
                                    technologies web, to offer innovative
                                    solutions in the projects in which I work.
                                </h5>

                                <a
                                    href='mailto:marcossalvarez94@gmail.com'
                                    className='btn btn-outline-light'>
                                    Send me an email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Second section */}
            <section className='row py-2'>
                <div className='col-md-4 my-2'>
                    <div className='card bg-light h-100'>
                        <div className='card-body'>
                            <h1>Skill</h1>
                            {skills.map((item, index) => (
                                <div key={index} className='py-2'>
                                    <h5>{item.skill}</h5>
                                    <div className='progress'>
                                        <div
                                            className='progress-bar'
                                            role='progressbar'
                                            style={{
                                                width: `${item.percentage}%`,
                                            }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-md-8 my-2'>
                    <div className='card bg-light'>
                        <div className='card-body'>
                            <h1>Education</h1>
                            <ul>
                                <li>
                                    <h3>Universidad Agraria de la Habana</h3>
                                    <h5>
                                        {2013}-{2018}
                                    </h5>
                                    <p>Informatics Engineering</p>
                                </li>
                            </ul>
                            <h1>Experience</h1>
                            <ul>
                                {experiences.map(
                                    (
                                        { description, from, to, title },
                                        index,
                                    ) => (
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h5>
                                                {from} - {to ? to : 'Actual'}
                                            </h5>
                                            <p>{description}</p>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Portfolio */}
            <section>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card card-body bg-dark'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h1 className='text-center text-light'>
                                        Portfolio
                                    </h1>
                                </div>
                                {projects.map(
                                    (
                                        { name, description, image, git },
                                        index,
                                    ) => (
                                        <div
                                            className='col-md-4 p-2'
                                            key={index}>
                                            <div className='card h-100'>
                                                <div className='overflow'>
                                                    <a
                                                        target={'_blank'}
                                                        href={git}>
                                                        <img
                                                            src={`${image}`}
                                                            alt=''
                                                            className='img-fluid card-img-top'
                                                        />
                                                    </a>
                                                </div>
                                                <div className='card-body'>
                                                    <h3>{name}</h3>
                                                    <p>{description}</p>
                                                    <a
                                                        className='btn btn-dark'
                                                        target={'_blank'}
                                                        href={git}>
                                                        Know more
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Index
