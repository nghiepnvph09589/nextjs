import type { NextPage } from 'next'
import BarComponent from './BarComponent'
import Image from 'next/image'
import image from '../public/hinh_nen.jpg'

const Home: NextPage = () => {
  return (
    <div >
      {/* <Head>
        <title>Create</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <div className={styles.container}>
        <SideBar />
        <div>
          <Topbar />
          <Image
            src={image}
            alt="picture"
            width={100}
            height={100}
          />

        </div>
      </div> */}
      <BarComponent
        children={
          <Image
            src={image}
            alt="picture"
            width={100}
            height={100}
          />
        }
      />
    </div>
  )
}

export default Home
