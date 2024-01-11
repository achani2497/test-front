import { useState } from "react"
import { FormProvider, useForm } from 'react-hook-form'
import { PRIORITY, STATUS } from "../../constants/dictionaries"
import { Validations } from "../../constants/validations"
import { Input } from './Input'
import { Radios } from "./Radios"
import { Select } from "./Select"

export default function TestForm({ setClose, test, isEditing = false, submitAction }) {
    const methods = useForm({
        mode: 'onTouched',
        defaultValues: test
    })
    const [step, setStep] = useState(1)
    const statusOptions = [
        {
            label: STATUS.passed.label,
            value: STATUS.passed.value
        },
        {
            label: STATUS.failed.label,
            value: STATUS.failed.value
        },
    ]

    function onSubmit(data) {
        submitAction(data)
        setClose()
    }

    const advanceStep = () => {
        setStep(cur => cur + 1)
    }

    return (
        <>
            <div className="text-base font-normal">{isEditing ? 'Editing test' : 'Adding new test'}</div>
            <FormProvider {...methods}>

                <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    {step == 1 && (
                        <Input label={'Username'} fieldName={'user_name'} validations={Validations.USERNAME} />
                    )}
                    {step == 2 && (
                        <div className="flex flex-col gap-4">
                            <Input label={'Test name'} fieldName={'test_name'} validations={Validations.TEST_NAME} />
                            <Select label={'Priority'} fieldName={'priority'} validations={Validations.PRIORITY} defaultValue={''}>
                                <option disabled value=''>Selecciona una prioridad</option>
                                <option value={PRIORITY.high.value}>{PRIORITY.high.label}</option>
                                <option value={PRIORITY.medium.value}>{PRIORITY.medium.label}</option>
                                <option value={PRIORITY.low.value}>{PRIORITY.low.label}</option>
                            </Select>
                            <Radios options={statusOptions} fieldName={'status'} validations={Validations.STATUS} />
                        </div>

                    )}

                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="w-full text-md bg-[#3D3D3D] rounded-lg p-2 focus:outline-none"
                            onClick={setClose}
                        >
                            Cancel
                        </button>
                        {step == 1 && (
                            <button
                                disabled={!methods.formState.isValid}
                                type="button"
                                className="w-full text-md bg-sky rounded-lg p-2 focus:outline-none disabled:bg-gray-500 disabled:text-slate-900"
                                onClick={advanceStep}
                            >
                                Next
                            </button>

                        )}
                        {step == 2 && (
                            <button
                                type="submit"
                                className="w-full text-md bg-sky rounded-lg p-2 focus:outline-none"
                            >
                                Confirm
                            </button>

                        )}
                    </div>

                </form>
            </FormProvider>
        </>
    )
}