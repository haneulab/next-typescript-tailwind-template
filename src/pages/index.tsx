/**
 * type imports
 */
import type { MetaConfig } from '@typeDefs/components/layouts'
import type { PageWithLayout } from '@typeDefs/pages'

/**
 * constant imports
 */
import { MESSAGE } from '@constants'

/**
 * component imports
 */
import PrimaryLayout from '@components/layouts/PrimaryLayout'
import MessageBar from '@components/shared/bars/MessageBar'

const Home: PageWithLayout = () => {
    return (
        <div>
            <MessageBar message={MESSAGE} />
        </div>
    )
}

Home.getLayout = (page) => {
    const indexMetaOption: MetaConfig = {
        title: 'My App | Home',
        description: 'This is a home route.',
        keywords: ['Home'],
    }
    return <PrimaryLayout metaOption={indexMetaOption}>{page}</PrimaryLayout>
}

export default Home
