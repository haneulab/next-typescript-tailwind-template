import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { type PageWithLayout } from '@typing'
import { pageMeta } from '@data/meta'

const HomePage: PageWithLayout = () => {
    const { user } = useUser()
    return (
        <>
            <MetaLayout {...pageMeta('index', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3>HomePage</h3>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default HomePage
