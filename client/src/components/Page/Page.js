import React, { Fragment } from 'react';
import './Page.css'
import Header from '../Header/Header';
import SearchForm from '../Form/Form';
const Page = () => {

    return (
        <Fragment>
            <Header />
            <div className="box">
                {/* form */}
                <SearchForm />
            </div>
        </Fragment>
    );
};

export default Page;
