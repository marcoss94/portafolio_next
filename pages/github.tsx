import { Layout } from '../components/Layout'
import Error from './_error'

const Github = ({ user, statusCode }) => {
    if (statusCode) {
        return <Error />
    }
    return (
        <Layout noFooter dark>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className='card card-body text-center'>
                        <h1>{user?.name}</h1>
                        <img
                            src={user.avatar_url}
                            alt=''
                            style={{ borderRadius: '50%' }}
                        />
                        <p>{user.bio}</p>
                        <p>marcossalvarez94@gmail.com</p>
                        <a
                            href='https://www.linkedin.com/in/marcos-alvarez-64b558191/'
                            target='_blank'
                            className='btn btn-outline-primary my-2'>
                            Go to LinkedIn
                        </a>
                        <a
                            href={user.html_url}
                            target='_blank'
                            className='btn btn-outline-secondary'>
                            {' '}
                            Go to github
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://api.github.com/users/marcoss94')
    const data = await res.json()
    const statusCode = res.status > 200 ? res.status : false

    return {
        props: {
            user: data,
            statusCode,
        },
    }
}
export default Github
