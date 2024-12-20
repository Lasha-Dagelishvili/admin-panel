import { useEffect, useState } from "react";
import { getUsersListInAdmin } from "./api/admin";
import { Table } from "antd";
import { mapUsersListForAdminTable } from "./api/admin/utils";

const { Column } = Table

const TestView = () => {
    const [users, setUsers] = useState<
        {email: string; createdAt: string; phone: string; lastSignIn: string;}[]
    >([
        {
            email: "john123@gmail.com",
            createdAt: "",
            phone: "",
            lastSignIn: "",
        },
    ]);

    useEffect(() => {
        getUsersListInAdmin().then((users) => {
            const mappedUsers = mapUsersListForAdminTable(users);

            setUsers(prev => {
                return [...prev, ...mappedUsers]
            });
        });
    },[]);  

  return (
    <Table bordered>
        <Column title="Email" dataIndex="email" />
        <Column title="Create At" dataIndex="createdAt" />
        <Column title="Phone" dataIndex="phone" />
        <Column title="Last Sign In" dataIndex="lastSignIn" />
    </Table>
  );
};

export default TestView;