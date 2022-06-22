import React from 'react';
import { IconChangePssword, IconEditProfle, IconHistory, IconJersey, IconSignOut, IconUser } from "../../assets";

export const dummyMenu = [
    {
      id: 1,
      nama: 'Edit Profile',
      gambar: <IconUser/>,
      halaman: 'EditProfile'
    },
    {
      id: 2,
      nama: 'Change Password',
      gambar: <IconChangePssword />,
      halaman: 'ChangePassword'
    },
    {
      id: 3,
      nama: 'History Pemesanan',
      gambar: <IconJersey />,
      halaman: 'History'
    },
    {
      id: 4,
      nama: 'Sign Out',
      gambar: <IconSignOut />,
      halaman: 'Login'
    },
  ];