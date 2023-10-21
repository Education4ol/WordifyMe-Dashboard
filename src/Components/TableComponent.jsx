import React, { useState, useEffect } from "react";
import { Input, Table } from "antd";

const TableComponent = (props) => {
	return (
		<>
			<Table
				dataSource={props.dataSource}
				columns={props.columns}
				pagination={{ pageSize: 5 }}
			/>
		</>
	);
};

export default TableComponent;
