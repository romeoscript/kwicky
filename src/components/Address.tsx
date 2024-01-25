import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select, Input } from 'antd';

interface FormData {
  input1: string;
  select1: string;
  input2: string;
  select2: string;
  input3: string;
  select3: string;
  select4: string;
  input4: string;
}

const Address: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSubmit = (data: FormData) => {
    // Handle form submission with the form data
    console.log(data);
  };

  return (
    <div className='my-[2rem]'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        <div>
          <Controller
            name="input1"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="input with clear icon"
                className='p-[0.5rem]'
                allowClear
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="select1"
            control={control}
            defaultValue="lucy"
            render={({ field }) => (
              <Select
                {...field}
                className='w-full '
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="input2"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="input with clear icon"
                className='p-[0.5rem]'
                allowClear
              />
            )}
          />
        </div>
        <div className='flex gap-4'>
          <Controller
            name="select2"
            control={control}
            defaultValue="lucy"
            render={({ field }) => (
              <Select
                {...field}
                className='w-full '
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            )}
          />
          <Controller
            name="input3"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="input with clear icon"
                className='p-[0.5rem]'
                allowClear
              />
            )}
          />
        </div>
        <div className='flex gap-4'>
          <Controller
            name="select3"
            control={control}
            defaultValue="lucy"
            render={({ field }) => (
              <Select
                {...field}
                className='w-full '
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            )}
          />
          <Controller
            name="select4"
            control={control}
            defaultValue="lucy"
            render={({ field }) => (
              <Select
                {...field}
                className='w-full '
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            )}
          />
        </div>
        <Controller
          name="input4"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="input with clear icon"
              className='p-[0.5rem]'
              allowClear
            />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Address;
