import Link from 'next/link';
import Layout from '../conponents/Layout';

import Address from '../components/Address';

export default () =>(
    <Layout header="Address" title="address book.">
        <Address />
        <hr />
        <div>
            <Link href="/address_add">
                <button>add</button>
            </Link>
        </div>
    </Layout>
);