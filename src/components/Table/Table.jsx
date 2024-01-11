import { Suspense, lazy, useCallback, useState } from 'react';
import { PRIORITY, STATUS } from "../../constants/dictionaries";
import { useFetchTests } from '../../hooks/useFetchTests';
import { createTest, destroyTest, modifyTest } from '../../services/testsService';
import { ActionsButton } from '../ActionsButton';
import { Modal } from '../Modal';
import { Table, TableBody, TableCell, TableHead, TableHeader } from './TableParts';

const TestForm = lazy(() => import('../Form/TestForm'))

export const TableComponent = () => {
  const [modalData, setModalData] = useState({ open: false, test: null, isEditing: false });
  const { tests, refreshTests, isLoading, setIsLoading } = useFetchTests();

  const addTest = useCallback((newTest) => {
    createTest(newTest)
      .then(() => {
        setIsLoading(true)
        refreshTests();
      })
      .catch(e => console.log(e))
  }, [refreshTests]);

  const editTest = useCallback((test) => {
    modifyTest(test).then(() => {
      setIsLoading(true)
      refreshTests();
    }).catch(e => console.log(e))
  }, [refreshTests])

  const deleteTest = useCallback((test_id) => {
    setIsLoading(true)
    destroyTest({ test_id }).then(() => {
      refreshTests()
    })
      .catch(e => console.log(e))
  }, [refreshTests])

  const handleEdit = useCallback((test) => {
    setModalData({ open: true, test, isEditing: true });
  }, [refreshTests]);

  const closeModal = useCallback(() => {
    setModalData({ open: false, test: null, isEditing: false });
  }, [refreshTests]);

  const openModal = useCallback(() => {
    setModalData({ open: true, test: null, isEditing: false });
  }, [refreshTests]);

  return (
    <div className='flex flex-col gap-4'>
      <button onClick={openModal} className='self-end rounded-md bg-sky text-white px-6 py-2 text-sm w-[105px] h-9'>Add test</button>
      <div className='flex flex-col justify-center m-auto h-fit w-full rounded-[15px]'>
        <Table>
          <TableHead>
            <TableHeader width={'w-52'}>User Name</TableHeader>
            <TableHeader width={'w-52'}>Test Name</TableHeader>
            <TableHeader width={'w-52'}>Priority</TableHeader>
            <TableHeader width={'w-[335px]'}>Status</TableHeader>
            <TableHeader width={'w-16'}></TableHeader>
          </TableHead>
          <TableBody isLoading={isLoading} thereAreRecords={tests.length > 0}>
            {
              tests.map(test => {
                return (
                  <tr className="text-white" key={test._id}>
                    <TableCell>{test.user_name} </TableCell>
                    <TableCell>{test.test_name}</TableCell>
                    <TableCell> {PRIORITY[test.priority].label} </TableCell>
                    <TableCell> {STATUS[test.status].label} </TableCell>
                    <TableCell>
                      <ActionsButton
                        handleEdit={() => handleEdit(test)}
                        handleDelete={() => deleteTest(test._id)}
                      />
                    </TableCell>
                  </tr>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
      <Modal open={modalData.open} setClose={closeModal}>
        <Suspense fallback={'Cargandoooo . . .'}>
          <div className="bg-black px-6 py-6 flex flex-col gap-4 text-start">
            <TestForm
              setClose={closeModal}
              test={modalData.test}
              submitAction={modalData.isEditing ? editTest : addTest}
              isEditing={modalData.isEditing}
            />
          </div>
        </Suspense>
      </Modal>
    </div>
  )
};
