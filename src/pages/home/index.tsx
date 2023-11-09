interface IHomeProps {
  penkki: number;
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return <>SaliMikko penkkaa {props.penkki}</>;
};

export default Home;
