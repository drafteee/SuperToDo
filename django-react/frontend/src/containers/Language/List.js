import React from 'react'
import { Table } from 'antd';

const ListLanguage = () => {
    const columns = [
        {
          title: 'rus',
          dataIndex: 'rus',
        },
        {
          title: 'eng',
          dataIndex: 'eng',
        },
        {
          title: 'countRepeat',
          dataIndex: 'countRepeat',
        },
      ];
      
      

      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <Table columns={columns} dataSource={data} onChange={onChange} expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
          }}/>
    )
}

export default ListLanguage;