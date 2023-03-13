/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const SignInPage: PageWithLayout = () => {
    const router = useRouter()
    const { user } = useUser()

    useEffect(() => {
        if (user) {
            if (router.query.redirect) {
                router.push(router.query.redirect as string)
            } else {
                router.push('/')
            }
        }
    }, [user])

    return (
        <>
            <MetaLayout {...pageMeta('signin')} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3>SignInPage</h3>
                <button>Sign In</button>
            </div>
        </>
    )
}

SignInPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default SignInPage
