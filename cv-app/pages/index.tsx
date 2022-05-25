import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Courses,
  Education,
  Experience,
  Skills,
} from '../components';
import { Layout } from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, minimum-scale=1.0'
        />
        <title>Aleksandra Szczur | CV</title>
        <meta
          name='description'
          content='CV zawierające informacje dotyczące mojego zatrudnienia, edukacji, umiejętności i innych informacji potrzebnych do znalezienia zatrudnienia'
        />
        <meta
          name='keywords'
          content='cv, resume, umiejętności, doświadczenie zawodowe, edukacja, zainteresowania, dane osobowe'
        />
        <meta name='robots' content='index,follow' />
        
      </Head>

      <Layout>
      <Courses /> 
      <Education />
      <Experience />
      <Skills />
      </Layout>
    </div>
  );
};

export default Home;
