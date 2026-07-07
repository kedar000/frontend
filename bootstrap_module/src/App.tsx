// Create a page containing:
import Grid from './components/Grid/GridEqualParts';
import SamplePage from './components/SamplePage';
import GridThreeEqualParts from './components/Grid/GridThreeEqualParts';
import FixedWidthCol from './components/Grid/FicedWidthGrid';
import GreaterThan12 from './components/Grid/GreaterThan12';

// * A container
// * A heading in blue
// * A paragraph in gray
// * A green button
// * A red button
// * Add top margin to the page
// * Add horizontal padding to both buttons
// * 

export default function App() {
  return (
    <>
    {/* <SamplePage /> */}
    <Grid />
    <GridThreeEqualParts />
    <FixedWidthCol />
    <GreaterThan12 />
    </>
  );
}