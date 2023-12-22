import React from "react";
import { Drawer } from "antd";
import { Space, Button } from "antd";
const DrawerComp = ({ children, ...props }) => {
  return (
    <>
      <Drawer
        title={props.title}
        placement="right"
        size="medium"
        width={600}
        onClose={() => {
          props.setOpenDrawer(false);
        }}
        open={props.openDrawer}
        extra={
          <Space>
            <Button
              onClick={() => {
                props.setOpenDrawer(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                props.setOpenDrawer(false);
              }}
            >
              OK
            </Button>
          </Space>
        }
      >
        {children}
      </Drawer>
    </>
  );
};

export default DrawerComp;
