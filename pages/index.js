import DashBoard from "../components/DashBoard";
import generateMain from '../hoc/generateMain'
const DashBoardWithLayOut = generateMain(DashBoard) 
export default function Home() {
  return (
    <DashBoardWithLayOut />
  );
}
