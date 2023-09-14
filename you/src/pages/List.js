import React from "react";

const User =({userData}) =>{
    return(
        <tr>
            <td>{userData.name}</td> | <td>{userData.email}</td>
            
        </tr>
    )
}

const UserList = () => {
    const users =[
        {email: 'you@naver.com', name: '유건희'},
        {email: 'hong@naver.com', name: '홍진경'},
        {email: 'you123@naver.com', name: '유찬희'},
        {email: 'you123455@naver.com', name: '유에에'},
    ]

    return  (
        <table>
            <thead>
                <tr>
                    <th>이름</th> | <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (<User userData={user} />))}
            </tbody>
        </table>
    )
}

export default UserList;