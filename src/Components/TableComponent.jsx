import React, { useState } from "react";
import { Input, Table } from "antd";

const TableComponent = (props) => {
	return (
		<>
			<Table
				dataSource={props.dataSource}
				columns={props.columns}
				pagination={{ pageSize: 6 }}
			/>
		</>
	);
};

export default TableComponent;
