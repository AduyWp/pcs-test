import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '@/app/theme/layout';

const dataNews = [
  {
    id: 1,
    avatar: '/assets/avatars/1.png',
    name: 'Ana Riswati',
    date: new Date(),
    desc: 'Kalimat 1 - lorem ipsum dolor sit amet',
    desc1: 'Kalimat 2 - lorem ipsum dolor sit amet',
    desc2: 'Kalimat 3 - lorem ipsum dolor sit amet',
    desc3: 'Kalimat 4 - lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    avatar: '/assets/avatars/2.png',
    name: 'Maria Anastasia',
    date: new Date(),
    desc: 'Kalimat 1 - lorem ipsum dolor sit amet',
    desc1: 'Kalimat 2 - lorem ipsum dolor sit amet',
    desc2: 'Kalimat 3 - lorem ipsum dolor sit amet',
    desc3: 'Kalimat 4 - lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    avatar: '/assets/avatars/3.png',
    name: 'Vicky Doe',
    date: new Date(),
    desc: 'Kalimat 1 - lorem ipsum dolor sit amet',
    desc1: 'Kalimat 2 - lorem ipsum dolor sit amet',
    desc2: 'Kalimat 3 - lorem ipsum dolor sit amet',
    desc3: 'Kalimat 4 - lorem ipsum dolor sit amet',
  },
]

const dataOnline = [
  {
    id: 1,
    avatar: '/assets/avatars/1.png',
    name: 'Jefril',
    office: 'Sahid'
  },
  {
    id: 2,
    avatar: '/assets/avatars/2.png',
    name: 'Zasami',
    office: 'BSD'
  },
  {
    id: 3,
    avatar: '/assets/avatars/3.png',
    name: 'Sam',
    office: 'Sahid'
  },
  {
    id: 4,
    avatar: '/assets/avatars/4.png',
    name: 'Aldo',
    office: 'Sahid'
  },
  {
    id: 5,
    avatar: '/assets/avatars/5.png',
    name: 'Erwin',
    office: 'Sahid'
  },
  {
    id: 6,
    avatar: '/assets/avatars/6.png',
    name: 'Arye',
    office: 'Sahid'
  },
  {
    id: 7,
    avatar: '/assets/avatars/7.png',
    name: 'Risya',
    office: 'Sahid'
  },
  {
    id: 8,
    avatar: '/assets/avatars/8.png',
    name: 'Nesha',
    office: 'WFH'
  }
]

const Core = (props) => {
  const {
      Content,
  } = props;

  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
  	<>
      <Layout>
  	    <Content
  	    	router={router}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          dataNews={dataNews}
          dataOnline={dataOnline}
	     />
      </Layout> 
	  </>
   );

};

export default Core;