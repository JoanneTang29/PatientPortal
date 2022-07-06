import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import FormatAlignJustifyRoundedIcon from '@mui/icons-material/FormatAlignJustifyRounded';

export const NavData = [
  {
    title: 'Home',
    icon: <HomeRoundedIcon />,
    link: '/home',
  },
  {
    title: 'Patients',
    icon: <PeopleAltRoundedIcon />,
    link: '/patients',
  },
  {
    title: 'Appointments',
    icon: <CalendarMonthRoundedIcon />,
    link: '/appointments',
  },
  {
    title: 'Messages',
    icon: <MessageRoundedIcon />,
    link: '/messages',
  },
  {
    title: 'Forms',
    icon: <FormatAlignJustifyRoundedIcon />,
    link: '/patientform',
  },
];
