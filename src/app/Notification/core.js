import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '@/app/theme/layout';

const Core = (props) => {
  const {
      Content,
  } = props;

  const router = useRouter();

  return (
  	<>
      <Layout>
  	    <Content
  	    	router={router}
	     />
      </Layout> 
	  </>
   );

};

export default Core;