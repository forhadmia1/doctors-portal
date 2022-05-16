import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Users = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch('https://evening-oasis-06751.herokuapp.com/user', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }

    const makeAdmin = (email) => {
        fetch(`https://evening-oasis-06751.herokuapp.com/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an admin!')
                }
            })
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Sl:</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr class="hover">
                            <th>{index + 1}</th>
                            <td>Forhad</td>
                            <td>{user.email}</td>
                            <td>{user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} class="btn btn-xs">Make Admin</button>}</td>
                            <td><button class="btn btn-xs">Remove User</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;