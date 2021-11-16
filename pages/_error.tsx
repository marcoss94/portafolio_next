import React from 'react'
import { Layout } from '../components/Layout'

interface IProps {
    statusCode?: number | boolean
}

const _error = ({ statusCode }: IProps) => {
    return (
        <Layout noFooter>
            {statusCode ? (
                <p className='text-center'>
                    Could not load you page: Status Code {statusCode}
                </p>
            ) : (
                <p className='text-center'>Could not get this page</p>
            )}
        </Layout>
    )
}

export default _error
