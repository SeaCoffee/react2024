
import React, { useEffect, useState } from 'react';
import {userService} from "../../services/axiosService";


const UserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        userService.getUserInfo().then(response => {
            const data = response.data;
            if (data) {
                setUserInfo(data);
            } else {
                console.error('No data in response:', response);
            }
        }).catch(error => {
            console.error('Error loading user info:', error);
        });
    }, []);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const avatarUrl = userInfo.avatar?.gravatar?.hash
        ? `https://www.gravatar.com/avatar/${userInfo.avatar.gravatar.hash}?s=30`
        : 'path_to_default_avatar_image';

    return (
        <div >
            <img src={avatarUrl} alt="ava" />
            <span>{userInfo.username}</span>
        </div>
    );
};
export default UserInfo

