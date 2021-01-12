export default function Home() {
    return (
        <div>SSG</div>
    )
}

export async function getStaticProps({ params, locale, preview = false, previewData }) {
    return {
        props: {

        }
    }
}

export async function getStaticPaths({ locales }) {
    const paths = [
        {
            params: {
                static: 'home'
            }
        },
        {
            params: {
                static: 'index'
            }
        }
    ]

    return {
        paths,
        fallback: false
    }
}