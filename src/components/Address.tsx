
import {  Select, Input } from 'antd'

const Address = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='my-[2rem]'>
            <form action="" className='flex flex-col gap-8'>
                <div>
                    <Input placeholder="input with clear icon" className='p-[0.5rem]' allowClear />
                </div>
                <div>
                    <Select
                        defaultValue="lucy"
                        className='w-full '
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>

                <div>
                    <Input placeholder="input with clear icon" className='p-[0.5rem]' allowClear />
                </div>

                <div className='flex gap-4'>
                    <Select
                        defaultValue="lucy"
                        className='w-full '
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <Input placeholder="input with clear icon" className='p-[0.5rem]' allowClear />
                </div>
                <div className='flex gap-4'>
                    <Select
                        defaultValue="lucy"
                        className='w-full '
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <Select
                        defaultValue="lucy"
                        className='w-full '
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />

                </div>

                <Input placeholder="input with clear icon" className='p-[0.5rem]' allowClear />
            </form>
        </div>
    )
}

export default Address
