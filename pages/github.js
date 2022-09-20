import Head from 'next/head'
export default function github(){
    return(
        <div>
            <Head>
                <meta http-equiv="refresh" content="2;url=https://github.com"/>
            </Head>
            <script>
                window.location.replace('https://github.com/Sudsymoss/james-website');
            </script>
        </div>
    )
}