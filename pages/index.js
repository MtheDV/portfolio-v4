import {server} from "../config";
import Landing from '../components/Landing/Landing';
import Works from '../components/Works/Works';
import mainStyles from '../styles/Main.module.scss';
import {useRef} from "react";
import SecretGradient from '../components/Effects/SecretGradient';

export default function Home({projects}) {
  const worksRef = useRef(null);

  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className={mainStyles.main}>
      <main className={mainStyles.main__content}>
        <Landing scrollToWorks={scrollToWorks}/>
        <Works refProp={worksRef} projects={projects}/>
      </main>
      <SecretGradient/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects
    },
  };
};
