
import { Button, Flex, Collapse, Checkbox } from 'antd'
import {DownOutlined} from '@ant-design/icons'
const Searchfilter = () => {
    return (
        <div className='w-[300px] bg-white border-2 p-[0.5rem] fixed'>
            <form action="">
             
                <Collapse
                   bordered={false}
                   defaultActiveKey={['1']}
                   expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
                   expandIconPosition="right" // Use the expandIconPosition prop
                
                    items={[
                        {
                            key: '1',
                            label: 'Brand',
                            children: (
                                <Checkbox.Group className='flex flex-col' style={{ width: '100%' }}>
                                    <Checkbox  value="A">Option A</Checkbox>
                                    <Checkbox value="B">Option B</Checkbox>
                                    <Checkbox value="C">Option C</Checkbox>
                                </Checkbox.Group>
                            )
                        },
                    ]}
                />
                <Collapse
                   bordered={false}
                   defaultActiveKey={['1']}
                   expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
                   expandIconPosition="right" // Use the expandIconPosition prop
                
                    items={[
                        {
                            key: '2',
                            label: 'Model',
                            children: (
                                <Checkbox.Group className='flex flex-col' style={{ width: '100%' }}>
                                    <Checkbox value="A">Option A</Checkbox>
                                    <Checkbox value="B">Option B</Checkbox>
                                    <Checkbox value="C">Option C</Checkbox>
                                </Checkbox.Group>
                            )
                        },
                    ]}
                />
                <Collapse
                   bordered={false}
                   defaultActiveKey={['1']}
                   expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
                   expandIconPosition="right" // Use the expandIconPosition prop
                
                    items={[
                        {
                            key: '3',
                            label: 'Operating System',
                            children: (
                                <Checkbox.Group className='flex flex-col' style={{ width: '100%' }}>
                                    <Checkbox value="A">Option A</Checkbox>
                                    <Checkbox value="B">Option B</Checkbox>
                                    <Checkbox value="C">Option C</Checkbox>
                                </Checkbox.Group>
                            )
                        },
                    ]}
                />
                
                <Flex align="flex-start" gap="small" vertical>
                    <Button type="primary" className='bg-[#01183C] w-full ' size='large'>
                        Apply Filter
                    </Button>
                    <Button size='large' className='w-full'>
                        cancel
                    </Button>
                </Flex >
            </form>
        </div>
    )
}

export default Searchfilter
