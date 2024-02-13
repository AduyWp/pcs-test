import Content from '@/app/Notification/components';
import Core from '@/app/Notification/core';

const Page = (props) => (
    <Core
        Content={Content}
        {...props}
    />
);

export default Page;