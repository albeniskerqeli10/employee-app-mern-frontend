import React from 'react';
const Row = React.lazy(() => import('./Row'));
const Table = React.lazy(() => import('./Table'));
const Hero  = () => {
return(
    <section className="w-full   py-4 flex flex-col items-center justify-center flex-wrap">
    <Row/>
        <Table/>
    </section>
)
};

export default Hero;
