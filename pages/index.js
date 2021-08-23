import {server} from "../config";
import Landing from '../components/Landing/Landing';
import Works from '../components/Works/Works';
import mainStyles from '../styles/Main.module.scss';
import {useRef} from "react";

export default function Home({projects}) {
  const worksRef = useRef(null);

  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <>
      <main className={mainStyles.main}>
        <Landing scrollToWorks={scrollToWorks}/>
        <Works refProp={worksRef} projects={projects}/>
      </main>
    </>
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
