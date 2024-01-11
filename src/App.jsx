import { TableComponent } from './components/Table/Table';

const App = () => (
  <div className="flex justify-center">
    <div className='m-0 px-2 md:px-8 lg:px-24 xl:px-56 py-2 md:py-6 lg:py-16 xl:py-40 text-center'>
      <h1 className='text-3xl tracking-[0.2px] font-medium'>Tests Manager</h1>
      <TableComponent />
    </div>
  </div>
);

export default App;
