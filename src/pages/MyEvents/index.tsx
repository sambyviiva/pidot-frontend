interface IMyEventsProps {
  penkki: number;
}

const MyEvents: React.FC<IMyEventsProps> = (props: IMyEventsProps) => {
  return <>Mun eventit {props.penkki}</>;
};

export default MyEvents;
