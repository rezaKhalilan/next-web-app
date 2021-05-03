import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
import styles from "../styles/Home.module.css";
import Cards from "../components/Cards/Cards";
import Tag from "../components/Tag/Tag";
import Pricing from "../components/Pricing/Pricing";
import RecentWork from "../components/RecentWork/RecentWork";

export default function Home() {
  return (
    <Layout>
      <Picture></Picture>
      <Cards />
      <Tag />
      <Pricing />
      <RecentWork />
    </Layout>
  );
}
