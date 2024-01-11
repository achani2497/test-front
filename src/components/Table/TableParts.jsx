import { Spinner } from '../Spinner/Spinner';

export function Table({ children }) {
    return (
        <table className="w-full text-sm text-left text-white border border-solid border-gray border-collapse rounded-xl">
            {children}
        </table>
    );
};

export function TableHead({ children }) {
    return (
        <thead className="text-white bg-[#545454] rounded-t-lg h-[59px]">
            <tr>
                {children}
            </tr>
        </thead>
    )
}

export function TableHeader({ children, width }) {
    return (
        <th className={`px-3 h-[59px] border border-solid border-gray border-collapse font-normal text-base ${width}`} > {children} </th>
    )
}

export function TableBody({ isLoading, thereAreRecords, children }) {
    return (
        <tbody className="bg-[#201F1F]">
            {isLoading ? (
                <tr>
                    <td colSpan={5} className='p-4'>
                        <Spinner />
                    </td>
                </tr>
            ) : (
                !thereAreRecords ?
                    (
                        <tr>
                            <td colSpan={5} className='p-4 text-center'>No hay tests creados</td>
                        </tr>
                    ) : children
            )}
        </tbody>
    );
};

export function TableCell({ children }) {
    return (
        <td className="px-3 h-[46px] border border-solid border-gray font-medium text-base tracking-[0.2px]"> {children} </td>
    )
}

export function TableRow({ children }) {
    return <tr className="text-white">{children}</tr>;
}
